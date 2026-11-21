const RollmannWhatsAppRouter = {
  config: typeof ROLLMANN_WHATSAPP_CONFIG !== 'undefined' ? ROLLMANN_WHATSAPP_CONFIG : {
    BRANCHES: {
      Delhi: { number: "919910322150", label: "New Delhi Warehouse Hub" },
      Pune: { number: "918147354218", label: "Pune MIDC Bhosari Desk" },
      Ahmedabad: { number: "919958550409", label: "Ahmedabad Branch Desk" },
      Chennai: { number: "918122092712", label: "Chennai Regional Desk" },
      Bengaluru: { number: "91XXXXXXXXXX", label: "Bengaluru Headquarters" }
    },
    DEFAULT_BRANCH: "Bengaluru",
    GATE_DOWNLOADS: false,
    FORM_ENDPOINT: "https://formspree.io/f/YOUR_FORM_KEY"
  },

  activeContext: {
    brand: "",
    product: "",
    partNumber: "",
    quantity: ""
  },

  currentBranch: "Bengaluru",
  currentCity: "Bengaluru",

  init() {
    this.currentBranch = this.config.DEFAULT_BRANCH;
    this.currentCity = this.config.DEFAULT_BRANCH;
    this.loadSavedBranch();
    this.detectCity();
    this.injectFloatingWidget();
    this.injectDownloadGateModal();
    this.attachEventListeners();
  },

  loadSavedBranch() {
    const saved = localStorage.getItem('rollmann_whatsapp_branch');
    const savedCity = localStorage.getItem('rollmann_whatsapp_city');
    if (saved && this.config.BRANCHES[saved]) {
      this.currentBranch = saved;
    }
    if (savedCity) {
      this.currentCity = savedCity;
    }
  },

  async detectCity() {
    if (localStorage.getItem('rollmann_whatsapp_branch')) return;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1600);
      const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const city = (data.city || '').toLowerCase();
        const region = data.region || '';

        let matched = null;
        if (this.config.CITY_TO_BRANCH && this.config.CITY_TO_BRANCH[city]) {
          matched = this.config.CITY_TO_BRANCH[city];
        } else if (this.config.STATE_TO_BRANCH && this.config.STATE_TO_BRANCH[region]) {
          matched = this.config.STATE_TO_BRANCH[region];
        }

        if (matched && this.config.BRANCHES[matched]) {
          this.currentBranch = matched;
          this.currentCity = data.city || matched;
          const select = document.getElementById('waCitySelect');
          if (select) select.value = matched;
          this.updateBranchDisplay();
        }
      }
    } catch (e) {
      this.currentBranch = this.config.DEFAULT_BRANCH;
    }
  },

  injectFloatingWidget() {
    if (document.getElementById('rollmannFloatingWaBtn')) return;

    const btn = document.createElement('div');
    btn.id = 'rollmannFloatingWaBtn';
    btn.className = 'rollmann-floating-wa';
    btn.innerHTML = `
      <button type="button" class="floating-wa-circle" id="floatingWaTrigger" aria-label="Open WhatsApp Engineering Support">
        <i class="fa-brands fa-whatsapp"></i>
        <span class="floating-wa-ping"></span>
      </button>
      <div class="floating-wa-tooltip">
        <strong>Instant WhatsApp Desk</strong>
        <span>Price &amp; Stock Availability</span>
      </div>
    `;
    document.body.appendChild(btn);

    const modal = document.createElement('div');
    modal.id = 'rollmannWaModal';
    modal.className = 'rollmann-wa-modal';
    modal.innerHTML = `
      <div class="wa-modal-backdrop" id="waModalBackdrop"></div>
      <div class="wa-modal-box">
        <div class="wa-modal-header">
          <div class="wa-header-left">
            <div class="wa-avatar"><i class="fa-brands fa-whatsapp"></i></div>
            <div>
              <div class="wa-header-title">Rollmann Engineering Desk</div>
              <div class="wa-header-sub" id="waBranchLabel">Connected to Bengaluru Headquarters</div>
            </div>
          </div>
          <button type="button" class="wa-close-btn" id="waModalClose">&times;</button>
        </div>

        <div class="wa-modal-body">
          <div class="wa-form-row">
            <label class="wa-label" for="waCitySelect">Select Your Nearest Hub / City</label>
            <select id="waCitySelect" class="wa-select">
              <option value="Bengaluru">Bengaluru Hub (Karnataka, AP, Telangana)</option>
              <option value="Delhi">Delhi Warehouse (Delhi NCR, Haryana, UP, Punjab)</option>
              <option value="Pune">Pune Bhosari Hub (Maharashtra, MP, Goa)</option>
              <option value="Ahmedabad">Ahmedabad Branch (Gujarat, Rajasthan)</option>
              <option value="Chennai">Chennai Branch (Tamil Nadu, Kerala)</option>
              <option value="Other">Other Location (Routed to Central HQ)</option>
            </select>
          </div>

          <div class="wa-context-box" id="waContextBox" style="display:none;">
            <div class="wa-context-label">Inquiry Reference:</div>
            <div class="wa-context-text" id="waContextText"></div>
          </div>

          <div class="wa-form-row">
            <label class="wa-label" for="waInputName">Your Name (Optional)</label>
            <input type="text" id="waInputName" class="wa-input" placeholder="e.g. Rajesh Kumar" />
          </div>

          <div class="wa-form-row">
            <label class="wa-label" for="waInputCompany">Company / Plant (Optional)</label>
            <input type="text" id="waInputCompany" class="wa-input" placeholder="e.g. Bosch Rexroth, Precision CNC" />
          </div>

          <div class="wa-form-row">
            <label class="wa-label" for="waInputReq">Requirement / Part Numbers (Optional)</label>
            <textarea id="waInputReq" class="wa-textarea" rows="2" placeholder="e.g. Looking for 10 pcs LM20UU in Bengaluru stock..."></textarea>
          </div>

          <div class="wa-preview-msg-box">
            <div class="wa-msg-label">Message Preview:</div>
            <div class="wa-msg-text" id="waMsgPreview"></div>
          </div>

          <button type="button" class="wa-submit-btn" id="waSubmitBtn">
            <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp &rarr;
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  injectDownloadGateModal() {
    if (document.getElementById('rollmannDownloadModal')) return;

    const modal = document.createElement('div');
    modal.id = 'rollmannDownloadModal';
    modal.className = 'rollmann-download-modal';
    modal.innerHTML = `
      <div class="dl-modal-backdrop" id="dlModalBackdrop"></div>
      <div class="dl-modal-box">
        <div class="dl-modal-header">
          <div>
            <div class="dl-modal-title"><i class="fa-solid fa-file-arrow-down" style="color:var(--rollmann-cyan); margin-right:8px;"></i> Technical Resource Download</div>
            <div class="dl-modal-sub" id="dlModalFileName">File Specification</div>
          </div>
          <button type="button" class="dl-close-btn" id="dlModalClose">&times;</button>
        </div>
        <form class="dl-modal-body" id="dlGateForm">
          <div class="dl-info-banner">Please provide your technical contact details to initiate the high-resolution CAD / Catalog download.</div>
          <div class="dl-form-row">
            <label class="dl-label">Full Name *</label>
            <input type="text" id="dlName" class="dl-input" required placeholder="e.g. Anish Patel" />
          </div>
          <div class="dl-form-row">
            <label class="dl-label">Company / Organization *</label>
            <input type="text" id="dlCompany" class="dl-input" required placeholder="e.g. Larsen &amp; Toubro" />
          </div>
          <div class="dl-form-row">
            <label class="dl-label">Corporate Email Address *</label>
            <input type="email" id="dlEmail" class="dl-input" required placeholder="e.g. anish@company.com" />
          </div>
          <div class="dl-form-row">
            <label class="dl-label">Phone / WhatsApp Number *</label>
            <input type="tel" id="dlPhone" class="dl-input" required placeholder="e.g. +91 98765 43210" />
          </div>
          <button type="submit" class="btn-primary" style="width:100%; justify-content:center; padding:11px; margin-top:8px;">
            <i class="fa-solid fa-download"></i> Start Download Now &rarr;
          </button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
  },

  attachEventListeners() {
    const trigger = document.getElementById('floatingWaTrigger');
    const modal = document.getElementById('rollmannWaModal');
    const backdrop = document.getElementById('waModalBackdrop');
    const closeBtn = document.getElementById('waModalClose');
    const select = document.getElementById('waCitySelect');
    const submitBtn = document.getElementById('waSubmitBtn');

    const nameInput = document.getElementById('waInputName');
    const compInput = document.getElementById('waInputCompany');
    const reqInput = document.getElementById('waInputReq');

    if (trigger) {
      trigger.addEventListener('click', () => {
        this.openWaModal();
      });
    }

    if (backdrop) backdrop.addEventListener('click', () => this.closeWaModal());
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeWaModal());

    if (select) {
      select.value = this.currentBranch;
      select.addEventListener('change', () => {
        const val = select.value === 'Other' ? 'Bengaluru' : select.value;
        this.currentBranch = val;
        this.currentCity = select.value;
        localStorage.setItem('rollmann_whatsapp_branch', val);
        localStorage.setItem('rollmann_whatsapp_city', select.value);
        this.updateBranchDisplay();
        this.updateMsgPreview();
      });
    }

    [nameInput, compInput, reqInput].forEach(inp => {
      if (inp) inp.addEventListener('input', () => this.updateMsgPreview());
    });

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.executeWhatsAppSend();
      });
    }

    document.addEventListener('click', (e) => {
      const askBtn = e.target.closest('.btn-whatsapp-ask, .ask-whatsapp-btn, [data-wa-product], [data-wa-brand]');
      if (askBtn) {
        e.preventDefault();
        const brand = askBtn.getAttribute('data-wa-brand') || askBtn.getAttribute('data-brand') || '';
        const prod = askBtn.getAttribute('data-wa-product') || askBtn.getAttribute('data-product') || '';
        const part = askBtn.getAttribute('data-wa-part') || askBtn.getAttribute('data-part') || '';
        const qty = askBtn.getAttribute('data-wa-qty') || askBtn.getAttribute('data-qty') || '';
        const ctx = askBtn.getAttribute('data-context') || '';

        this.openWithContext({
          brand: brand,
          product: prod,
          partNumber: part,
          quantity: qty,
          context: ctx
        });
      }

      const branchBtn = e.target.closest('.btn-branch-wa');
      if (branchBtn) {
        e.preventDefault();
        const b = branchBtn.getAttribute('data-branch');
        if (b && this.config.BRANCHES[b]) {
          this.currentBranch = b;
          this.currentCity = b;
          this.openWaModal();
        }
      }
    });

    this.attachDownloadGateHandlers();
  },

  openWithContext(ctx) {
    this.activeContext = Object.assign({ brand: "", product: "", partNumber: "", quantity: "" }, ctx);
    const box = document.getElementById('waContextBox');
    const txt = document.getElementById('waContextText');

    let desc = "";
    if (this.activeContext.partNumber) {
      desc = "Part Number: " + this.activeContext.partNumber;
      if (this.activeContext.quantity) desc += " (Qty: " + this.activeContext.quantity + ")";
    } else if (this.activeContext.product) {
      desc = this.activeContext.product;
    } else if (this.activeContext.brand) {
      desc = this.activeContext.brand + " Authorized Catalog";
    } else if (this.activeContext.context) {
      desc = this.activeContext.context;
    } else {
      desc = document.title.split('|')[0].trim();
    }

    if (box && txt) {
      txt.textContent = desc;
      box.style.display = 'block';
    }

    this.openWaModal();
  },

  openWaModal() {
    const modal = document.getElementById('rollmannWaModal');
    const select = document.getElementById('waCitySelect');
    if (select) select.value = this.currentBranch;
    this.updateBranchDisplay();
    this.updateMsgPreview();
    if (modal) modal.classList.add('active');
  },

  closeWaModal() {
    const modal = document.getElementById('rollmannWaModal');
    if (modal) modal.classList.remove('active');
  },

  updateBranchDisplay() {
    const lbl = document.getElementById('waBranchLabel');
    const bInfo = this.config.BRANCHES[this.currentBranch] || this.config.BRANCHES[this.config.DEFAULT_BRANCH];
    if (lbl && bInfo) {
      lbl.textContent = 'Routing to ' + bInfo.label;
    }
  },

  buildMessageText() {
    const name = document.getElementById('waInputName')?.value.trim();
    const comp = document.getElementById('waInputCompany')?.value.trim();
    const req = document.getElementById('waInputReq')?.value.trim();
    const city = this.currentCity || this.currentBranch;

    let target = "";
    if (this.activeContext.partNumber) {
      target = this.activeContext.partNumber;
      if (this.activeContext.quantity) target += " (" + this.activeContext.quantity + " pcs)";
    } else if (this.activeContext.product) {
      target = this.activeContext.product;
    } else if (this.activeContext.brand) {
      target = this.activeContext.brand + " components";
    } else if (this.activeContext.context) {
      target = this.activeContext.context;
    } else {
      target = document.title.split('|')[0].trim();
    }

    let greeting = "Hi Rollmann,";
    if (name && comp) {
      greeting = "Hi Rollmann, I'm " + name + " from " + comp + ", " + city + ".";
    } else if (name) {
      greeting = "Hi Rollmann, I'm " + name + " from " + city + ".";
    } else if (comp) {
      greeting = "Hi Rollmann, I'm contacting from " + comp + ", " + city + ".";
    } else {
      greeting = "Hi Rollmann, I'm contacting from " + city + ".";
    }

    let body = "I'm interested in " + target + ". Please share price and warehouse availability.";
    if (req) {
      body += " Additional details: " + req;
    }

    return greeting + " " + body;
  },

  updateMsgPreview() {
    const preview = document.getElementById('waMsgPreview');
    if (preview) {
      preview.textContent = this.buildMessageText();
    }
  },

  executeWhatsAppSend() {
    const bInfo = this.config.BRANCHES[this.currentBranch] || this.config.BRANCHES[this.config.DEFAULT_BRANCH];
    const number = bInfo.number;
    const msg = this.buildMessageText();

    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'whatsapp_chat_click',
        branch: this.currentBranch,
        page: window.location.pathname,
        product: this.activeContext.partNumber || this.activeContext.product || this.activeContext.brand
      });
    }

    const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(msg);
    window.open(url, '_blank');
    this.closeWaModal();
  },

  attachDownloadGateHandlers() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-download-cat, .cad-dl-btn');
      if (btn) {
        const file = btn.getAttribute('data-file') || btn.getAttribute('href');
        const title = btn.getAttribute('data-title') || btn.getAttribute('data-brand') || 'Technical Resource';

        if (!file || file === '#' || file.startsWith('javascript:')) return;

        if (this.config.GATE_DOWNLOADS) {
          e.preventDefault();
          this.openDownloadGate(file, title);
        }
      }
    });

    const form = document.getElementById('dlGateForm');
    const dlModal = document.getElementById('rollmannDownloadModal');
    const dlClose = document.getElementById('dlModalClose');
    const dlBackdrop = document.getElementById('dlModalBackdrop');

    if (dlClose) dlClose.addEventListener('click', () => this.closeDownloadGate());
    if (dlBackdrop) dlBackdrop.addEventListener('click', () => this.closeDownloadGate());

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const pendingFile = form.getAttribute('data-pending-file');
        const payload = {
          name: document.getElementById('dlName')?.value,
          company: document.getElementById('dlCompany')?.value,
          email: document.getElementById('dlEmail')?.value,
          phone: document.getElementById('dlPhone')?.value,
          requested_file: pendingFile,
          timestamp: new Date().toISOString()
        };

        try {
          if (this.config.FORM_ENDPOINT && !this.config.FORM_ENDPOINT.includes('YOUR_FORM_KEY')) {
            await fetch(this.config.FORM_ENDPOINT, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
              body: JSON.stringify(payload)
            });
          }
        } catch (err) {
        }

        this.closeDownloadGate();
        if (pendingFile) {
          const a = document.createElement('a');
          a.href = pendingFile;
          a.download = '';
          a.target = '_blank';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      });
    }
  },

  openDownloadGate(file, title) {
    const modal = document.getElementById('rollmannDownloadModal');
    const fileName = document.getElementById('dlModalFileName');
    const form = document.getElementById('dlGateForm');
    if (fileName) fileName.textContent = title + ' (' + file.split('/').pop() + ')';
    if (form) form.setAttribute('data-pending-file', file);
    if (modal) modal.classList.add('active');
  },

  closeDownloadGate() {
    const modal = document.getElementById('rollmannDownloadModal');
    if (modal) modal.classList.remove('active');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  RollmannWhatsAppRouter.init();
});
