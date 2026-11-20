const ROLLMANN_PARTS_DB = [
  {
    code: "LM20UU",
    brand: "THK",
    category: "Linear Bushing",
    dr: 20,
    D: 32,
    L: 42,
    B: 30.5,
    W: 1.6,
    C: 860,
    C0: 1370,
    mass: 87,
    retainer: "Resin",
    seal: "Double Seal (UU)",
    stock: "Central Stock (Bengaluru / Pune)",
    leadTime: "Immediate Dispatch",
    cadFile: "THK_LM20UU.step",
    desc: "Precision cylindrical linear bushing with synthetic resin retainer and double nitrile rubber contact lip seals. Friction coefficient 0.001 to 0.003."
  },
  {
    code: "LM20GA",
    brand: "THK",
    category: "Linear Bushing",
    dr: 20,
    D: 32,
    L: 42,
    B: 30.5,
    W: 1.6,
    C: 860,
    C0: 1370,
    mass: 92,
    retainer: "Metal (High-Temp)",
    seal: "No Seal",
    stock: "Central Stock (Delhi)",
    leadTime: "24-48 Hours",
    cadFile: "THK_LM20GA.step",
    desc: "High-temperature linear bushing with precision stainless steel metal retainer rated for operating temperatures up to 120°C."
  },
  {
    code: "LM20-AJ",
    brand: "THK",
    category: "Linear Bushing",
    dr: 20,
    D: 32,
    L: 42,
    B: 30.5,
    W: 1.6,
    C: 860,
    C0: 1370,
    mass: 85,
    retainer: "Resin",
    seal: "Single Seal",
    stock: "Central Stock (Pune)",
    leadTime: "Immediate Dispatch",
    cadFile: "THK_LM20_AJ.step",
    desc: "Clearance-adjustable linear bushing with axial split outer cylinder. Enables zero-backlash fine preload adjustment in adjustable housings."
  },
  {
    code: "LM20-OP",
    brand: "THK",
    category: "Linear Bushing",
    dr: 20,
    D: 32,
    L: 42,
    B: 30.5,
    W: 1.6,
    C: 860,
    C0: 1370,
    mass: 80,
    retainer: "Resin",
    seal: "Open Type",
    stock: "Central Stock (Bengaluru)",
    leadTime: "Immediate Dispatch",
    cadFile: "THK_LM20_OP.step",
    desc: "Open-type linear bushing with 60° cutaway designed for use with continuously supported precision shafts over long stroke lengths."
  },
  {
    code: "LM12UU",
    brand: "THK",
    category: "Linear Bushing",
    dr: 12,
    D: 21,
    L: 30,
    B: 23,
    W: 1.3,
    C: 410,
    C0: 590,
    mass: 31.5,
    retainer: "Resin",
    seal: "Double Seal (UU)",
    stock: "Central Stock (Bengaluru)",
    leadTime: "Immediate Dispatch",
    cadFile: "THK_LM12UU.step",
    desc: "12mm standard linear bushing for high-speed pick-and-place actuators, linear stages, and robotic end effectors."
  },
  {
    code: "LM16UU",
    brand: "THK",
    category: "Linear Bushing",
    dr: 16,
    D: 28,
    L: 37,
    B: 26.5,
    W: 1.6,
    C: 770,
    C0: 1180,
    mass: 69,
    retainer: "Resin",
    seal: "Double Seal (UU)",
    stock: "Central Stock (Ahmedabad)",
    leadTime: "Immediate Dispatch",
    cadFile: "THK_LM16UU.step",
    desc: "16mm precision linear bushing with recirculating ball rows for smooth, zero-cogging linear translation."
  },
  {
    code: "LM25UU",
    brand: "THK",
    category: "Linear Bushing",
    dr: 25,
    D: 40,
    L: 59,
    B: 41,
    W: 1.85,
    C: 980,
    C0: 1570,
    mass: 220,
    retainer: "Resin",
    seal: "Double Seal (UU)",
    stock: "Central Stock (Pune)",
    leadTime: "Immediate Dispatch",
    cadFile: "THK_LM25UU.step",
    desc: "25mm heavy-duty linear bushing providing high static safety factors for industrial packaging and assembly machinery."
  },
  {
    code: "LM30UU",
    brand: "THK",
    category: "Linear Bushing",
    dr: 30,
    D: 45,
    L: 64,
    B: 44.5,
    W: 1.85,
    C: 1570,
    C0: 2740,
    mass: 250,
    retainer: "Resin",
    seal: "Double Seal (UU)",
    stock: "Central Stock (Chennai)",
    leadTime: "Immediate Dispatch",
    cadFile: "THK_LM30UU.step",
    desc: "30mm high-capacity linear bushing engineered for high-rigidity guidance under cantilevered and offset payloads."
  },
  {
    code: "HSR25A2SS+1200L",
    brand: "THK",
    category: "LM Guide",
    dr: 23,
    D: 70,
    L: 83,
    B: 57,
    W: 23,
    C: 27600,
    C0: 36400,
    mass: 540,
    retainer: "Caged",
    seal: "Double End Seals + Metal Scraper",
    stock: "Ready with Custom Rail Cutting",
    leadTime: "Same Day Cut & Chamfer",
    cadFile: "THK_HSR25A.step",
    desc: "THK 4-way equal-load heavy-duty LM Guide assembly. Equal dynamic capacity in radial, reverse-radial, and horizontal directions."
  },
  {
    code: "SHS25C2SS+1000L",
    brand: "THK",
    category: "LM Guide",
    dr: 23,
    D: 70,
    L: 92,
    B: 57,
    W: 23,
    C: 31700,
    C0: 44500,
    mass: 610,
    retainer: "Caged Ball Technology",
    seal: "End Seals + Inner Wiper",
    stock: "Central Stock (Bengaluru / Pune)",
    leadTime: "Immediate Dispatch",
    cadFile: "THK_SHS25C.step",
    desc: "Patented caged ball linear guide eliminating ball-to-ball friction for whisper-quiet travel up to 5 m/s and extended greasing intervals."
  },
  {
    code: "BNK1520-3G0+400LC5",
    brand: "THK",
    category: "Ball Screw",
    dr: 15,
    D: 34,
    L: 400,
    B: 20,
    W: 5,
    C: 7400,
    C0: 14000,
    mass: 1200,
    retainer: "Precision Ground",
    seal: "Labyrinth Seals",
    stock: "Central Stock (Bengaluru)",
    leadTime: "Immediate Dispatch / Custom Journal Turning",
    cadFile: "THK_BNK1520.step",
    desc: "Precision ground high-lead ball screw (15mm screw shaft dia, 20mm lead) with standardized finished shaft ends for BK12/BF12."
  },
  {
    code: "CF20UU-B",
    brand: "THK",
    category: "Cam Follower",
    dr: 20,
    D: 52,
    L: 66,
    B: 24,
    W: 20,
    C: 21100,
    C0: 34300,
    mass: 460,
    retainer: "Needle Roller Cage",
    seal: "Synthetic Rubber Seals",
    stock: "Central Stock (Delhi / Pune)",
    leadTime: "Immediate Dispatch",
    cadFile: "THK_CF20UUB.step",
    desc: "Stud type cam follower with hex socket head for rapid tightening. High-hardness thick-walled outer ring for high contact track loads."
  },
  {
    code: "RB8016UUCC0",
    brand: "THK",
    category: "Cross Roller Ring",
    dr: 80,
    D: 120,
    L: 16,
    B: 16,
    W: 16,
    C: 15700,
    C0: 23800,
    mass: 740,
    retainer: "Spacer Retainer",
    seal: "Double Rubber Lip Seals",
    stock: "Central Stock (Bengaluru)",
    leadTime: "Immediate Dispatch",
    cadFile: "THK_RB8016.step",
    desc: "High-rigidity cross roller ring with 90° alternating cylindrical rollers. Absorbs radial, axial, and tilting moment loads with runout below 2µm."
  },
  {
    code: "SPB-2030",
    brand: "Oiles",
    category: "Self-Lubricating Bushing",
    dr: 20,
    D: 28,
    L: 30,
    B: 0,
    W: 0,
    C: 29000,
    C0: 58000,
    mass: 75,
    retainer: "Solid Bronze Matrix",
    seal: "Embedded Graphite Plugs",
    stock: "Central Stock (Pune / Ahmedabad)",
    leadTime: "Immediate Dispatch",
    cadFile: "OILES_SPB2030.step",
    desc: "Oiles 500SP high-strength cast bronze bushing embedded with solid graphite lubricant plugs. Maintenance-free operation under heavy reciprocating loads."
  },
  {
    code: "MBPS2501BS1",
    brand: "Zimmer",
    category: "Linear Rail Clamping Element",
    dr: 23,
    D: 70,
    L: 90,
    B: 45,
    W: 30,
    C: 1200,
    C0: 2400,
    mass: 650,
    retainer: "Pneumatic BISS",
    seal: "Spring Opening",
    stock: "Central Stock (Bengaluru)",
    leadTime: "Immediate Dispatch",
    cadFile: "ZIMMER_MBPS25.step",
    desc: "Zimmer pneumatic linear guide brake and holding element for 25mm profile rails. Provides 1200N holding force with zero rail raceway damage."
  }
];

class RollmannApp {
  constructor() {
    this.bomItems = this.loadBom();
    this.initSearch();
    this.initProjectBomModal();
    this.initMobileNav();
    this.initLmConfigurator();
    this.initCatalogFilter();
    this.initLifeCalculator();
    this.initToleranceVisualizer();
    this.initBlueprintInspector();
    this.initHeroQuickSearch();
    this.initPartBreakdown();
    this.updateBomBadge();
  }

  initHeroQuickSearch() {
    const input = document.getElementById('heroQuickInput');
    const btn = document.getElementById('heroQuickBtn');
    const popup = document.getElementById('quickResultPopup');
    const title = document.getElementById('popupTitle');
    const content = document.getElementById('popupContent');
    const actions = document.getElementById('popupActions');
    const closeBtn = document.getElementById('popupCloseBtn');

    if (!input || !popup) return;

    const performLookup = () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        input.focus();
        return;
      }

      const qRaw = input.value.trim();

      if (q.includes('where') || q.includes('location') || q.includes('office') || q.includes('warehouse') || q.includes('address') || q.includes('branch') || q.includes('hub')) {
        title.innerHTML = '<i class="fa-solid fa-warehouse" style="color:var(--rollmann-cyan);"></i> 5 Offices &amp; 3 Warehouses';
        content.innerHTML = `
          <div class="popup-status-badge"><i class="fa-solid fa-circle-check"></i> Nationwide Distribution Network</div>
          <p style="margin-bottom:8px;">Rollmann operates 5 regional offices and 3 central warehouses located in <strong>Bengaluru (Headquarters)</strong>, <strong>Pune (MIDC Bhosari)</strong>, and <strong>New Delhi</strong>, with regional desks in <strong>Ahmedabad</strong> and <strong>Chennai</strong>.</p>
          <div style="font-size:11.5px; color:var(--gray-600); background:var(--gray-50); padding:8px 10px; border-radius:4px;">
            Same-day dispatch available across India for standard inventory.
          </div>
        `;
        actions.innerHTML = `
          <a href="contact-us.html" class="popup-btn-primary">View Nationwide Hubs &rarr;</a>
          <a href="tel:+918026609630" class="popup-btn-secondary"><i class="fa-solid fa-phone"></i> Call 080 26609630</a>
        `;
        popup.classList.add('active');
        return;
      }

      if (q.includes('cut') || q.includes('machin') || q.includes('shaft') || q.includes('journal') || q.includes('chamfer') || q.includes('bk') || q.includes('bf')) {
        title.innerHTML = '<i class="fa-solid fa-wrench" style="color:var(--rollmann-cyan);"></i> In-House CNC Machining';
        content.innerHTML = `
          <div class="popup-status-badge"><i class="fa-solid fa-circle-check"></i> Precision Workshop Available</div>
          <p style="margin-bottom:8px;">We offer abrasive cold rail cutting to <strong>&plusmn;0.2 mm</strong> tolerance, custom G-dimension pitch matching, and CNC ball screw journal turning for BK/BF/FK/FF support units.</p>
        `;
        actions.innerHTML = `
          <a href="services.html" class="popup-btn-primary">View Machining Specs &rarr;</a>
          <a href="contact-us.html" class="popup-btn-secondary">Send Drawing for Quote</a>
        `;
        popup.classList.add('active');
        return;
      }

      if (q.includes('genuine') || q.includes('auth') || q.includes('cert') || q.includes('japan') || q.includes('warranty') || q.includes('original')) {
        title.innerHTML = '<i class="fa-solid fa-award" style="color:var(--rollmann-cyan);"></i> 100% Genuine Certified Imports';
        content.innerHTML = `
          <div class="popup-status-badge"><i class="fa-solid fa-circle-check"></i> Official THK Stockist</div>
          <p style="margin-bottom:8px;">All products are direct factory imports from THK Japan, Tsubaki, Oiles, Zimmer Group, and INA, accompanied by JIS manufacturer inspection certificates and serial traceability.</p>
        `;
        actions.innerHTML = `
          <a href="about-us.html" class="popup-btn-primary">About Our Heritage &rarr;</a>
          <a href="contact-us.html" class="popup-btn-secondary">Contact Technical Desk</a>
        `;
        popup.classList.add('active');
        return;
      }

      const exact = ROLLMANN_PARTS_DB.find(p => p.code.toLowerCase() === q);
      const partial = exact || ROLLMANN_PARTS_DB.find(p => p.code.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));

      if (partial) {
        title.innerHTML = `<i class="fa-solid fa-microchip" style="color:var(--rollmann-cyan);"></i> ${partial.brand} ${partial.code}`;
        content.innerHTML = `
          <div class="popup-status-badge"><i class="fa-solid fa-circle-check"></i> ${partial.stock || 'In Stock'}</div>
          <div style="font-size:12px; font-weight:700; color:var(--navy-deep); margin-bottom:4px;">${partial.category}</div>
          <p style="font-size:11.5px; color:var(--gray-600); margin-bottom:8px;">${partial.desc || ''}</p>
          <div class="popup-specs-grid">
            <div class="popup-spec-item"><strong>Bore:</strong> ${partial.dr ? partial.dr + ' mm' : '-'}</div>
            <div class="popup-spec-item"><strong>Outer Dia:</strong> ${partial.D ? partial.D + ' mm' : '-'}</div>
            <div class="popup-spec-item"><strong>Length:</strong> ${partial.L ? partial.L + ' mm' : '-'}</div>
            <div class="popup-spec-item"><strong>Dynamic C:</strong> ${partial.C ? partial.C + ' N' : '-'}</div>
          </div>
          <div style="font-size:11px; color:var(--gray-500);">Shaft Fit: ISO 286 g6 / h6 &bull; Lead Time: ${partial.leadTime || 'Immediate'}</div>
        `;
        const link = partial.code.startsWith('LM') ? 'linear-bush.html' : 'products.html?q=' + encodeURIComponent(partial.code);
        actions.innerHTML = `
          <a href="${link}" class="popup-btn-primary">View Full Specs / CAD &rarr;</a>
          <a href="contact-us.html" class="popup-btn-secondary">Request Fast Quote</a>
        `;
        popup.classList.add('active');
        return;
      }

      title.innerHTML = `<i class="fa-solid fa-magnifying-glass" style="color:var(--rollmann-cyan);"></i> Search: "${qRaw}"`;
      content.innerHTML = `
        <div class="popup-status-badge"><i class="fa-solid fa-warehouse"></i> 25,000+ SKUs Central Stock</div>
        <p style="margin-bottom:8px;">We stock thousands of linear guides, bushings, ball screws, and clamps. Our engineering desk can confirm immediate stock for "<strong>${qRaw}</strong>".</p>
      `;
      actions.innerHTML = `
        <a href="products.html?q=${encodeURIComponent(qRaw)}" class="popup-btn-primary">Search Catalog &rarr;</a>
        <a href="contact-us.html" class="popup-btn-secondary">Inquire with Sales</a>
      `;
      popup.classList.add('active');
    };

    if (btn) btn.addEventListener('click', performLookup);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        performLookup();
      }
      if (e.key === 'Escape') {
        popup.classList.remove('active');
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
      });
    }

    document.addEventListener('click', (e) => {
      const box = document.getElementById('heroQuickBox');
      if (box && !box.contains(e.target)) {
        popup.classList.remove('active');
      }
    });
  }

  loadBom() {
    try {
      const stored = localStorage.getItem('rollmann_project_bom_v2');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveBom() {
    try {
      localStorage.setItem('rollmann_project_bom_v2', JSON.stringify(this.bomItems));
      this.updateBomBadge();
    } catch (e) {}
  }

  updateBomBadge() {
    const total = this.bomItems.reduce((acc, i) => acc + (parseInt(i.qty) || 1), 0);
    document.querySelectorAll('.header-rfq-badge, .rfq-count-badge, #headerRfqBadge').forEach(b => {
      b.textContent = total;
    });
  }

  addToBom(code, qty = 1, notes = "") {
    const found = ROLLMANN_PARTS_DB.find(p => p.code.toLowerCase() === code.toLowerCase()) || {
      code,
      brand: "THK",
      category: "Linear Component",
      stock: "Central Stock",
      desc: "Authorized Motion Component"
    };

    const existing = this.bomItems.find(i => i.code.toLowerCase() === code.toLowerCase());
    if (existing) {
      existing.qty = (parseInt(existing.qty) || 1) + parseInt(qty);
      if (notes) existing.notes = notes;
    } else {
      this.bomItems.push({
        code: found.code,
        brand: found.brand,
        category: found.category,
        stock: found.stock,
        qty: parseInt(qty) || 1,
        notes: notes || "Standard fit / Inspection certificate requested"
      });
    }

    this.saveBom();
    this.renderBomList();
    this.showToast(`Added ${qty}x [${found.code}] to Project BOM`);
  }

  removeFromBom(code) {
    this.bomItems = this.bomItems.filter(i => i.code.toLowerCase() !== code.toLowerCase());
    this.saveBom();
    this.renderBomList();
    this.showToast(`Removed [${code}] from Project BOM`);
  }

  updateBomQty(code, qty) {
    const item = this.bomItems.find(i => i.code.toLowerCase() === code.toLowerCase());
    if (item) {
      item.qty = Math.max(1, parseInt(qty) || 1);
      this.saveBom();
      this.renderBomList();
    }
  }

  updateBomNotes(code, notes) {
    const item = this.bomItems.find(i => i.code.toLowerCase() === code.toLowerCase());
    if (item) {
      item.notes = notes;
      this.saveBom();
    }
  }

  showToast(msg) {
    let box = document.getElementById('rollmannToastBox');
    if (!box) {
      box = document.createElement('div');
      box.id = 'rollmannToastBox';
      box.className = 'toast-box';
      document.body.appendChild(box);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--rollmann-cyan);"></i> <span>${msg}</span>`;
    box.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  initSearch() {
    const input = document.getElementById('globalSearchInput') || document.querySelector('.header-search-input');
    const dropdown = document.getElementById('searchSuggestDropdown') || document.querySelector('.search-suggest-dropdown');
    if (!input || !dropdown) return;

    input.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
        return;
      }

      const matches = ROLLMANN_PARTS_DB.filter(p => 
        p.code.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );

      if (!matches.length) {
        dropdown.innerHTML = `
          <div class="suggest-header">Technical Lookup</div>
          <div style="padding:14px; font-size:12.5px; color:var(--gray-600); text-align:center;">
            No direct part match for "<strong>${q}</strong>". Try searching <strong>LM20</strong>, <strong>HSR25</strong>, <strong>BNK</strong>, or <strong>Oiles</strong>.
          </div>
        `;
      } else {
        dropdown.innerHTML = `
          <div class="suggest-header">Matching Components (${matches.length})</div>
          ${matches.slice(0, 6).map(m => `
            <div class="suggest-item" onclick="window.location.href='linear-bush.html?model=${m.code.includes('LM') ? m.code : 'LM20'}'">
              <div>
                <div class="suggest-item-code">${m.code}</div>
                <div class="suggest-item-desc">${m.brand} • ${m.category} • dr=${m.dr}mm D=${m.D}mm • C=${m.C}N</div>
              </div>
              <span class="suggest-item-tag">${m.leadTime}</span>
            </div>
          `).join('')}
        `;
      }
      dropdown.classList.add('active');
    });

    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') dropdown.classList.remove('active');
      if (e.key === 'Enter') {
        const first = dropdown.querySelector('.suggest-item');
        if (first) first.click();
      }
    });
  }

  initProjectBomModal() {
    let drawer = document.getElementById('rfqDrawer');
    let backdrop = document.getElementById('rfqBackdrop');

    if (!drawer) {
      backdrop = document.createElement('div');
      backdrop.id = 'rfqBackdrop';
      backdrop.className = 'rfq-drawer-backdrop';
      document.body.appendChild(backdrop);

      drawer = document.createElement('div');
      drawer.id = 'rfqDrawer';
      drawer.className = 'rfq-drawer';
      drawer.innerHTML = `
        <div class="rfq-drawer-header">
          <div>
            <div class="rfq-drawer-title"><i class="fa-solid fa-layer-group" style="margin-right:8px; color:var(--rollmann-cyan);"></i> Project Specification BOM</div>
            <div style="font-size:11px; color:var(--gray-300); margin-top:2px;">Engineering Bill of Materials & Technical Transmittal</div>
          </div>
          <button type="button" class="rfq-drawer-close" id="rfqDrawerClose">&times;</button>
        </div>
        <div style="padding:12px 20px; background:var(--gray-100); border-bottom:1px solid var(--gray-200); font-size:12px; display:flex; justify-content:space-between; align-items:center;">
          <span>Project Ref: <strong id="bomProjectName">Automation Assembly Line 01</strong></span>
          <button type="button" style="color:var(--rollmann-cyan); font-weight:700;" onclick="rollmannApp.exportBomCsv()"><i class="fa-solid fa-file-csv"></i> Export CSV</button>
        </div>
        <div class="rfq-items-list" id="rfqItemsList"></div>
        <div class="rfq-drawer-footer">
          <div style="font-size:12px; color:var(--gray-600); margin-bottom:12px; display:flex; justify-content:space-between;">
            <span>Technical Verification:</span>
            <strong style="color:var(--navy-deep);">Authorized THK Engineering Desk</strong>
          </div>
          <button type="button" class="btn-primary" style="width:100%; justify-content:center; text-transform:uppercase;" onclick="rollmannApp.submitBomTransmittal()">
            <i class="fa-solid fa-paper-plane" style="margin-right:6px;"></i> Transmit Technical BOM to Engineers &rarr;
          </button>
        </div>
      `;
      document.body.appendChild(drawer);
    }

    document.querySelectorAll('.header-rfq-btn, .open-rfq-drawer').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openBomDrawer();
      });
    });

    const closeBtn = document.getElementById('rfqDrawerClose');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeBomDrawer());
    if (backdrop) backdrop.addEventListener('click', () => this.closeBomDrawer());

    this.renderBomList();
  }

  openBomDrawer() {
    this.renderBomList();
    const drawer = document.getElementById('rfqDrawer');
    const backdrop = document.getElementById('rfqBackdrop');
    if (drawer) drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeBomDrawer() {
    const drawer = document.getElementById('rfqDrawer');
    const backdrop = document.getElementById('rfqBackdrop');
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  renderBomList() {
    const container = document.getElementById('rfqItemsList');
    if (!container) return;

    if (!this.bomItems.length) {
      container.innerHTML = `
        <div style="text-align:center; padding:40px 10px; color:var(--gray-500);">
          <i class="fa-solid fa-compass-drafting" style="font-size:38px; color:var(--gray-300); margin-bottom:12px;"></i>
          <h4 style="font-size:15px; color:var(--navy-deep); margin-bottom:4px;">No Components in Project BOM</h4>
          <p style="font-size:12px; max-width:280px; margin:0 auto;">Select linear bushings, guides, or ball screws from the engineering tools to compile your technical specification schedule.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.bomItems.map(item => `
      <div class="rfq-item-card" style="display:block; padding:14px; background:var(--white); border:1px solid var(--gray-200); border-radius:var(--radius-sm); margin-bottom:10px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
          <div>
            <strong style="font-family:var(--font-mono); font-size:14px; color:var(--rollmann-cyan);">${item.code}</strong>
            <div style="font-size:11.5px; color:var(--gray-600);">${item.brand} • ${item.category}</div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <input type="number" min="1" value="${item.qty || 1}" style="width:48px; padding:4px; text-align:center; font-weight:700; border:1px solid var(--gray-300); border-radius:3px;" onchange="rollmannApp.updateBomQty('${item.code}', this.value)" />
            <button type="button" class="rfq-item-remove" onclick="rollmannApp.removeFromBom('${item.code}')" title="Remove" style="font-size:18px; color:#C62828;">&times;</button>
          </div>
        </div>
        <div style="margin-top:6px;">
          <input type="text" value="${item.notes || ''}" placeholder="Engineering notes (e.g. Preload C1, rail length 1200mm)..." style="width:100%; font-size:11.5px; padding:6px 8px; border:1px solid var(--gray-200); border-radius:3px; background:var(--gray-50);" onchange="rollmannApp.updateBomNotes('${item.code}', this.value)" />
        </div>
      </div>
    `).join('');
  }

  exportBomCsv() {
    if (!this.bomItems.length) {
      alert('Your Project BOM is empty.');
      return;
    }
    const headers = ['Part Number', 'Manufacturer', 'Category', 'Quantity', 'Engineering Notes'];
    const rows = this.bomItems.map(i => [`"${i.code}"`, `"${i.brand}"`, `"${i.category}"`, i.qty, `"${i.notes || ''}"`]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Rollmann_Project_BOM_Schedule.csv');
    document.body.appendChild(link);
    link.click();
    link.remove();
    this.showToast('Exported Project BOM to CSV');
  }

  submitBomTransmittal() {
    if (!this.bomItems.length) {
      alert('Please add at least one component to your Project BOM before transmitting.');
      return;
    }
    const partList = this.bomItems.map(i => `• ${i.code} (Qty: ${i.qty}) - Notes: ${i.notes || 'Standard'}`).join('\n');
    const mailto = `mailto:sales@rollmann.in?subject=Project%20Engineering%20BOM%20Transmittal&body=Dear%20Rollmann%20Application%20Engineering%20Team,%0D%0A%0D%0APlease%20review%20and%20provide%20an%20official%20engineering%20conformance%20quote%20and%20cad%20verification%20for%20the%20following%20Project%20BOM:%0D%0A%0D%0A${encodeURIComponent(partList)}%0D%0A%0D%0AProject%20Name:%20%0D%0ACompany:%20%0D%0AContact%20Person:%20%0D%0APhone:%20%0D%0ADelivery%20Location:%20%0D%0A%0D%0AThank%20you!`;
    window.location.href = mailto;
    this.closeBomDrawer();
    this.showToast('Generating Project BOM engineering transmittal to sales@rollmann.in...');
  }

  initMobileNav() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navBar = document.querySelector('.nav-bar');
    if (!toggle || !navBar) return;

    toggle.addEventListener('click', () => {
      const isVisible = navBar.style.display === 'block';
      navBar.style.display = isVisible ? 'none' : 'block';
    });
  }

  initLmConfigurator() {
    const modelSelect = document.getElementById('cfgModelSelect');
    if (!modelSelect) return;

    const updateConfig = () => {
      const selectedModel = modelSelect.value || 'LM20';
      const sealType = document.querySelector('input[name="cfgSeal"]:checked')?.value || 'UU';
      const retainerType = document.querySelector('input[name="cfgRetainer"]:checked')?.value || 'resin';
      const typeStyle = document.querySelector('input[name="cfgType"]:checked')?.value || 'standard';

      let fullCode = selectedModel;
      if (typeStyle === 'aj') fullCode += '-AJ';
      else if (typeStyle === 'op') fullCode += '-OP';
      else if (retainerType === 'metal') fullCode += 'GA';
      else if (sealType === 'UU') fullCode += 'UU';

      const specs = {
        LM6: { dr: 6, D: 12, L: 19, B: 13.5, W: 1.1, C: 210, C0: 270, mass: 8, rows: 4 },
        LM8: { dr: 8, D: 15, L: 24, B: 17.5, W: 1.1, C: 270, C0: 410, mass: 16, rows: 4 },
        LM10: { dr: 10, D: 19, L: 29, B: 22, W: 1.3, C: 370, C0: 550, mass: 30, rows: 4 },
        LM12: { dr: 12, D: 21, L: 30, B: 23, W: 1.3, C: 410, C0: 590, mass: 31.5, rows: 4 },
        LM16: { dr: 16, D: 28, L: 37, B: 26.5, W: 1.6, C: 770, C0: 1180, mass: 69, rows: 5 },
        LM20: { dr: 20, D: 32, L: 42, B: 30.5, W: 1.6, C: 860, C0: 1370, mass: 87, rows: 5 },
        LM25: { dr: 25, D: 40, L: 59, B: 41, W: 1.85, C: 980, C0: 1570, mass: 220, rows: 6 },
        LM30: { dr: 30, D: 45, L: 64, B: 44.5, W: 1.85, C: 1570, C0: 2740, mass: 250, rows: 6 },
        LM40: { dr: 40, D: 60, L: 80, B: 60.5, W: 2.15, C: 2160, C0: 4020, mass: 590, rows: 6 },
        LM50: { dr: 50, D: 80, L: 100, B: 74, W: 2.65, C: 3820, C0: 7940, mass: 1580, rows: 6 }
      }[selectedModel] || { dr: 20, D: 32, L: 42, B: 30.5, W: 1.6, C: 860, C0: 1370, mass: 87, rows: 5 };

      const codeDisplay = document.getElementById('configuredPartCode');
      if (codeDisplay) codeDisplay.innerText = fullCode;

      const drEl = document.getElementById('specDr');
      if (drEl) drEl.innerText = `${specs.dr} mm`;
      const dEl = document.getElementById('specD');
      if (dEl) dEl.innerText = `${specs.D} mm`;
      const lEl = document.getElementById('specL');
      if (lEl) lEl.innerText = `${specs.L} mm`;
      const cEl = document.getElementById('specC');
      if (cEl) cEl.innerText = `${specs.C} N`;
      const c0El = document.getElementById('specC0');
      if (c0El) c0El.innerText = `${specs.C0} N`;
      const massEl = document.getElementById('specMass');
      if (massEl) massEl.innerText = `${specs.mass} g`;

      const blueprintDr = document.getElementById('svgDimensionDr');
      if (blueprintDr) blueprintDr.textContent = `Ødr: ${specs.dr} mm`;
      const blueprintD = document.getElementById('svgDimensionD');
      if (blueprintD) blueprintD.textContent = `ØD: ${specs.D} mm`;
      const blueprintL = document.getElementById('svgDimensionL');
      if (blueprintL) blueprintL.textContent = `L: ${specs.L} mm`;

      if (this.recalcLife) this.recalcLife();
    };

    modelSelect.addEventListener('change', updateConfig);
    document.querySelectorAll('input[name="cfgSeal"], input[name="cfgRetainer"], input[name="cfgType"]').forEach(radio => {
      radio.addEventListener('change', updateConfig);
    });

    const addConfigBtn = document.getElementById('addConfiguredToRfqBtn');
    if (addConfigBtn) {
      addConfigBtn.addEventListener('click', () => {
        const fullCode = document.getElementById('configuredPartCode')?.innerText || 'LM20UU';
        const qty = parseInt(document.getElementById('configuredQtyInput')?.value) || 1;
        this.addToBom(fullCode, qty, 'Configured specification via parametric tool');
        this.openBomDrawer();
      });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const m = urlParams.get('model');
    if (m) {
      const match = m.match(/LM\d+/i);
      if (match) {
        modelSelect.value = match[0].toUpperCase();
      }
    }
    updateConfig();
  }

  initLifeCalculator() {
    const pInput = document.getElementById('calcLoadP');
    const sInput = document.getElementById('calcStrokeS');
    const nInput = document.getElementById('calcCyclesN');
    const fwSelect = document.getElementById('calcFw');
    const resKm = document.getElementById('calcResultKm');
    const resHours = document.getElementById('calcResultHours');
    const resYears = document.getElementById('calcResultYears');

    if (!pInput || !sInput || !nInput || !resKm) return;

    this.recalcLife = () => {
      const P = parseFloat(pInput.value) || 250;
      const S = parseFloat(sInput.value) || 300;
      const n = parseFloat(nInput.value) || 30;
      const fw = parseFloat(fwSelect?.value) || 1.2;

      let C = 860;
      const model = document.getElementById('cfgModelSelect')?.value;
      const modelMap = {
        LM6: 210, LM8: 270, LM10: 370, LM12: 410, LM16: 770,
        LM20: 860, LM25: 980, LM30: 1570, LM40: 2160, LM50: 3820
      };
      if (model && modelMap[model]) C = modelMap[model];

      const ratio = C / (P * fw);
      const L10 = Math.max(0.1, Math.pow(ratio, 3) * 50);

      const hours = (L10 * 1000000) / (2 * S * n * 60);
      const years = hours / (16 * 300);

      resKm.textContent = L10 > 1000 ? `${(L10 / 1000).toFixed(1)}k km` : `${L10.toFixed(1)} km`;
      resHours.textContent = hours > 10000 ? `${Math.round(hours).toLocaleString()} hrs` : `${Math.round(hours)} hrs`;
      if (resYears) resYears.textContent = `${years.toFixed(1)} Yrs (16h/day)`;

      const safetyFactor = (C / P).toFixed(2);
      const sfEl = document.getElementById('calcSafetyFactor');
      if (sfEl) sfEl.textContent = `fs = ${safetyFactor}`;
    };

    [pInput, sInput, nInput].forEach(el => el.addEventListener('input', this.recalcLife));
    if (fwSelect) fwSelect.addEventListener('change', this.recalcLife);
    this.recalcLife();
  }

  initToleranceVisualizer() {
    const shaftSelect = document.getElementById('tolShaftFit');
    const housingSelect = document.getElementById('tolHousingFit');
    const tolDisplay = document.getElementById('tolRadialClearanceDisplay');
    const tolShaftDev = document.getElementById('tolShaftDeviation');
    const tolHousingDev = document.getElementById('tolHousingDeviation');

    if (!shaftSelect || !housingSelect || !tolDisplay) return;

    const updateTolerance = () => {
      const shaft = shaftSelect.value;
      const housing = housingSelect.value;

      const tolMap = {
        g6: { dev: "-7 to -20 µm", min: -20, max: -7 },
        h6: { dev: "0 to -13 µm", min: -13, max: 0 },
        f6: { dev: "-20 to -33 µm", min: -33, max: -20 }
      };

      const housingMap = {
        H7: { dev: "0 to +25 µm", min: 0, max: 25 },
        J7: { dev: "+12 to -13 µm", min: -13, max: 12 }
      };

      const sData = tolMap[shaft] || tolMap.g6;
      const hData = housingMap[housing] || housingMap.H7;

      if (tolShaftDev) tolShaftDev.textContent = `Shaft (20mm): ${sData.dev}`;
      if (tolHousingDev) tolHousingDev.textContent = `Housing (32mm): ${hData.dev}`;

      if (shaft === 'g6' && housing === 'H7') {
        tolDisplay.innerHTML = `<span style="color:#2E7D32;"><i class="fa-solid fa-circle-check"></i> Standard Normal Clearance (0 to +18 µm)</span>`;
      } else if (shaft === 'h6') {
        tolDisplay.innerHTML = `<span style="color:var(--rollmann-cyan);"><i class="fa-solid fa-bullseye"></i> Precision Minimum Play (-3 to +12 µm)</span>`;
      } else if (shaft === 'f6') {
        tolDisplay.innerHTML = `<span style="color:#F57C00;"><i class="fa-solid fa-arrow-right-arrow-left"></i> Loose Clearance (+13 to +33 µm)</span>`;
      }
    };

    shaftSelect.addEventListener('change', updateTolerance);
    housingSelect.addEventListener('change', updateTolerance);
    updateTolerance();
  }

  initBlueprintInspector() {
    const svg = document.getElementById('lmBlueprintSvg');
    if (!svg) return;

    const layerMap = {
      bpSvgCylinder: 'cylinder',
      bpSvgRetainer: 'retainer',
      bpSvgShaft: 'shaft',
      bpSvgSeals: 'seals'
    };

    Object.keys(layerMap).forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.cursor = 'pointer';
        el.addEventListener('mouseenter', () => this.inspectBlueprint(layerMap[id]));
      }
    });

    document.querySelectorAll('.bp-svg-ball').forEach(b => {
      b.style.cursor = 'pointer';
      b.addEventListener('mouseenter', () => this.inspectBlueprint('balls'));
    });
  }

  inspectBlueprint(layer) {
    document.querySelectorAll('.layer-pill').forEach(btn => btn.classList.remove('active'));
    const matchedBtn = document.querySelector(`.layer-pill[data-layer="${layer}"]`);
    if (matchedBtn) matchedBtn.classList.add('active');

    const cylinder = document.getElementById('bpSvgCylinder');
    const retainer = document.getElementById('bpSvgRetainer');
    const shaft = document.getElementById('bpSvgShaft');
    const seals = document.getElementById('bpSvgSeals');
    const balls = document.querySelectorAll('.bp-svg-ball');

    cylinder?.classList.remove('bp-hl-cylinder');
    retainer?.classList.remove('bp-hl-retainer');
    shaft?.classList.remove('bp-hl-shaft');
    seals?.classList.remove('bp-hl-seals');
    balls.forEach(b => b.classList.remove('bp-hl-balls'));

    const titleEl = document.getElementById('bpInspTitle');
    const badgeEl = document.getElementById('bpInspBadge');
    const matEl = document.getElementById('bpInspMat');
    const hardEl = document.getElementById('bpInspHardness');
    const fitEl = document.getElementById('bpInspFit');
    const descEl = document.getElementById('bpInspDesc');

    if (layer === 'cylinder') {
      cylinder?.classList.add('bp-hl-cylinder');
      if (titleEl) titleEl.textContent = 'Outer Cylinder (Sleeve)';
      if (badgeEl) badgeEl.textContent = 'JIS G 4805 SUJ2';
      if (matEl) matEl.textContent = 'SUJ2 Chromium Bearing Steel';
      if (hardEl) hardEl.textContent = 'HRC 58 to 64';
      if (fitEl) fitEl.textContent = 'Housing Fit: H7 (+0 to +25 µm)';
      if (descEl) descEl.textContent = 'Precision heat-treated and ground outer cylinder. Rigid cylindrical construction guarantees dimensional stability under high cycle loads.';
    } else if (layer === 'balls') {
      balls.forEach(b => b.classList.add('bp-hl-balls'));
      if (titleEl) titleEl.textContent = 'Recirculating Ball Train';
      if (badgeEl) badgeEl.textContent = 'ISO 3290-1 Grade G10';
      if (matEl) matEl.textContent = 'SUJ2 High Carbon Chrome';
      if (hardEl) hardEl.textContent = 'HRC 62 to 66';
      if (fitEl) fitEl.textContent = 'Sphericity ≤ 0.25 µm';
      if (descEl) descEl.textContent = 'Precision rolling balls providing point contact with precision LM shaft. Recirculates through 4 to 6 independent raceway circuits.';
    } else if (layer === 'retainer') {
      retainer?.classList.add('bp-hl-retainer');
      if (titleEl) titleEl.textContent = 'Seamless Ball Retainer';
      if (badgeEl) badgeEl.textContent = 'Synthetic Resin (POM)';
      if (matEl) matEl.textContent = 'Reinforced Polyacetal Resin';
      if (hardEl) hardEl.textContent = 'Max Temp 80°C';
      if (fitEl) fitEl.textContent = 'Quiet Velocity ≤ 2 m/s';
      if (descEl) descEl.textContent = 'One-piece molded resin cage prevents ball-to-ball friction, dampens acoustic noise, and enables high-speed linear cycling.';
    } else if (layer === 'seals') {
      seals?.classList.add('bp-hl-seals');
      if (titleEl) titleEl.textContent = 'End Contact Lip Seals (UU)';
      if (badgeEl) badgeEl.textContent = 'NBR Nitrile Rubber';
      if (matEl) matEl.textContent = 'Synthetic Nitrile Elastomer';
      if (hardEl) hardEl.textContent = 'Temp -15°C to +80°C';
      if (fitEl) fitEl.textContent = 'Dual Wiper Contact';
      if (descEl) descEl.textContent = 'Specially profiled elastomeric wiper lips seal against particulate contamination while retaining lubricant along the shaft stroke.';
    } else if (layer === 'shaft') {
      shaft?.classList.add('bp-hl-shaft');
      if (titleEl) titleEl.textContent = 'Precision LM Shaft Axis';
      if (badgeEl) badgeEl.textContent = 'ISO 286 g6 / h6';
      if (matEl) matEl.textContent = 'SUJ2 / High Carbon Steel';
      if (hardEl) hardEl.textContent = 'HRC 58 to 64 (Depth ≥1.5mm)';
      if (fitEl) fitEl.textContent = 'Shaft Fit: g6 (-7 to -20 µm)';
      if (descEl) descEl.textContent = 'Centerless precision ground shaft with surface finish Ra 0.2 µm. Induction hardened depth ensures raceway fatigue resistance.';
    } else {
      if (titleEl) titleEl.textContent = 'Assembly Cross-Section';
      if (badgeEl) badgeEl.textContent = 'JIS B 1575 / ISO 10285';
      if (matEl) matEl.textContent = 'SUJ2 + Resin POM';
      if (hardEl) hardEl.textContent = 'HRC 58 to 64';
      if (fitEl) fitEl.textContent = 'Shaft g6 / Housing H7';
      if (descEl) descEl.textContent = 'Integrated linear motion bearing assembly. Select a layer pill above or hover over components to inspect metallurgy, hardness standards, and precision tolerances.';
    }
  }

  initCatalogFilter() {
    const tableBody = document.getElementById('catalogTableBody');
    if (!tableBody) return;

    const countDisplay = document.getElementById('catalogMatchCount');

    const renderCatalog = (items) => {
      if (countDisplay) countDisplay.textContent = items.length;
      if (!items.length) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="8" style="text-align:center; padding:32px; color:var(--gray-500);">
              <i class="fa-solid fa-filter-circle-xmark" style="font-size:28px; margin-bottom:8px; display:block; color:var(--gray-400);"></i>
              No components match the specified engineering parameters. Try expanding your bore diameter or load limits.
            </td>
          </tr>
        `;
        return;
      }
      tableBody.innerHTML = items.map(p => `
        <tr>
          <td>
            <a href="linear-bush.html?model=${p.code.includes('LM') ? p.code : 'LM20'}" class="part-cell-code">${p.code}</a>
            <div style="font-size:11.5px; color:var(--gray-600); margin-top:2px;">${p.desc.substring(0, 60)}...</div>
          </td>
          <td><span style="font-weight:700; color:var(--gray-700);">${p.brand}</span></td>
          <td>${p.category}</td>
          <td><strong>${p.dr ? p.dr + ' mm' : '-'}</strong></td>
          <td>${p.D ? p.D + ' mm' : '-'}</td>
          <td><strong>${p.C ? p.C + ' N' : '-'}</strong></td>
          <td>
            <span class="stock-tag-instock">
              <i class="fa-solid fa-circle" style="font-size:6px;"></i> ${p.stock}
            </span>
          </td>
          <td>
            <button type="button" class="btn-table-rfq" onclick="rollmannApp.addToBom('${p.code}', 1, 'Standard specification'); rollmannApp.openBomDrawer();">
              + BOM
            </button>
          </td>
        </tr>
      `).join('');
    };

    renderCatalog(ROLLMANN_PARTS_DB);

    const brandFilter = document.getElementById('catalogBrandFilter');
    const catFilter = document.getElementById('catalogCategoryFilter');
    const searchFilter = document.getElementById('catalogSearchFilter');
    const boreMinFilter = document.getElementById('catalogBoreMin');
    const boreMaxFilter = document.getElementById('catalogBoreMax');
    const loadMinFilter = document.getElementById('catalogLoadMin');

    const applyFilter = () => {
      const bVal = brandFilter ? brandFilter.value : 'all';
      const cVal = catFilter ? catFilter.value : 'all';
      const sVal = searchFilter ? searchFilter.value.trim().toLowerCase() : '';
      const bMin = boreMinFilter && boreMinFilter.value ? parseFloat(boreMinFilter.value) : 0;
      const bMax = boreMaxFilter && boreMaxFilter.value ? parseFloat(boreMaxFilter.value) : Infinity;
      const lMin = loadMinFilter && loadMinFilter.value ? parseFloat(loadMinFilter.value) : 0;

      const filtered = ROLLMANN_PARTS_DB.filter(p => {
        const matchesBrand = (bVal === 'all' || p.brand.toLowerCase() === bVal.toLowerCase());
        const matchesCat = (cVal === 'all' || p.category.toLowerCase().includes(cVal.toLowerCase()));
        const matchesSearch = (!sVal || p.code.toLowerCase().includes(sVal) || p.category.toLowerCase().includes(sVal) || p.desc.toLowerCase().includes(sVal));
        const matchesBore = !p.dr || (p.dr >= bMin && p.dr <= bMax);
        const matchesLoad = !p.C || (p.C >= lMin);
        return matchesBrand && matchesCat && matchesSearch && matchesBore && matchesLoad;
      });

      renderCatalog(filtered);
    };

    if (brandFilter) brandFilter.addEventListener('change', applyFilter);
    if (catFilter) catFilter.addEventListener('change', applyFilter);
    if (searchFilter) searchFilter.addEventListener('input', applyFilter);
    if (boreMinFilter) boreMinFilter.addEventListener('input', applyFilter);
    if (boreMaxFilter) boreMaxFilter.addEventListener('input', applyFilter);
    if (loadMinFilter) loadMinFilter.addEventListener('input', applyFilter);
  }

  initPartBreakdown() {
    const seriesInput = document.getElementById('breakdownSeriesInput');
    const seriesPills = document.querySelectorAll('#seriesQuickPills .wizard-pill');
    const diaInput = document.getElementById('breakdownDiaInput');
    const diaPillsContainer = document.getElementById('diaQuickPills');
    const sealPillsContainer = document.getElementById('sealQuickPills');

    const resBrandTag = document.getElementById('resBrandTag');
    const resPartCode = document.getElementById('resPartCode');
    const resPartName = document.getElementById('resPartName');
    const resStockPill = document.getElementById('resStockPill');
    const nomToken1 = document.getElementById('nomToken1');
    const nomLbl1 = document.getElementById('nomLbl1');
    const nomToken2 = document.getElementById('nomToken2');
    const nomLbl2 = document.getElementById('nomLbl2');
    const nomToken3 = document.getElementById('nomToken3');
    const nomLbl3 = document.getElementById('nomLbl3');
    const specDr = document.getElementById('specValDr');
    const specD = document.getElementById('specValD');
    const specL = document.getElementById('specValL');
    const specC = document.getElementById('specValC');
    const specC0 = document.getElementById('specValC0');
    const specFit = document.getElementById('specValFit');
    const cadLink = document.getElementById('resCadLink');
    const addBomBtn = document.getElementById('resAddBomBtn');

    if (!seriesInput || !resPartCode) return;

    const breakdownCatalog = {
      LM: {
        brand: 'THK JAPAN AUTHENTIC',
        name: 'Precision Cylindrical Linear Bushing',
        seriesDesc: 'Linear Bushing Series',
        cadUrl: 'linear-bush.html',
        diameters: {
          6: { D: 12, L: 19, C: 206, C0: 265, fit: 'ISO 286 g6 / h6', stock: 'Bengaluru (Immediate)' },
          8: { D: 15, L: 24, C: 265, C0: 402, fit: 'ISO 286 g6 / h6', stock: 'Bengaluru / Pune (Immediate)' },
          10: { D: 19, L: 29, C: 372, C0: 549, fit: 'ISO 286 g6 / h6', stock: 'Pune (Immediate)' },
          12: { D: 21, L: 30, C: 410, C0: 590, fit: 'ISO 286 g6 / h6', stock: 'Bengaluru / Delhi (Immediate)' },
          16: { D: 28, L: 37, C: 775, C0: 1180, fit: 'ISO 286 g6 / h6', stock: 'Bengaluru / Pune (Immediate)' },
          20: { D: 32, L: 42, C: 860, C0: 1370, fit: 'ISO 286 g6 / h6', stock: 'Bengaluru / Pune (Immediate)' },
          25: { D: 40, L: 59, C: 980, C0: 1570, fit: 'ISO 286 g6 / h6', stock: 'Bengaluru / Pune (Immediate)' },
          30: { D: 45, L: 64, C: 1570, C0: 2740, fit: 'ISO 286 g6 / h6', stock: 'Bengaluru (Immediate)' },
          40: { D: 60, L: 80, C: 2160, C0: 4020, fit: 'ISO 286 g6 / h6', stock: 'Pune / Delhi (24 Hrs)' },
          50: { D: 80, L: 100, C: 3820, C0: 7940, fit: 'ISO 286 g6 / h6', stock: 'Bengaluru (24 Hrs)' }
        },
        seals: [
          { key: 'UU', label: 'Double Nitrile Rubber Lip Seals', suffix: 'UU' },
          { key: 'U', label: 'Single Nitrile Rubber Lip Seal', suffix: 'U' },
          { key: 'None', label: 'Standard Open Ends (No Rubber Seals)', suffix: '' },
          { key: 'AJ', label: 'Clearance-Adjustable Slit Outer Cylinder', suffix: '-AJ' },
          { key: 'OP', label: 'Open Type (60 Deg Cutout for Continuous Shaft)', suffix: '-OP' },
          { key: 'GA', label: 'High-Temp Metal Retainer (up to 120 Deg C)', suffix: 'GA' }
        ]
      },
      HSR: {
        brand: 'THK JAPAN AUTHENTIC',
        name: 'Heavy-Load 4-Way Equal Load LM Guide',
        seriesDesc: 'Heavy Load LM Guide Series',
        cadUrl: 'lm-guide.html',
        diameters: {
          15: { D: 47, L: 60, C: 14300, C0: 25100, fit: 'JIS H/P Precision', stock: 'Bengaluru / Pune (Immediate)' },
          20: { D: 63, L: 76, C: 21100, C0: 36700, fit: 'JIS H/P Precision', stock: 'Bengaluru / Pune (Immediate)' },
          25: { D: 70, L: 88, C: 35200, C0: 59700, fit: 'JIS H/P Precision', stock: 'Bengaluru / Pune (Immediate)' },
          30: { D: 90, L: 106, C: 53300, C0: 89300, fit: 'JIS H/P Precision', stock: 'Pune / Delhi (Immediate)' },
          35: { D: 100, L: 122, C: 71200, C0: 119000, fit: 'JIS H/P Precision', stock: 'Bengaluru (Immediate)' }
        },
        seals: [
          { key: 'A', label: 'Flange Type Block (Top/Bottom Tapped)', suffix: 'A' },
          { key: 'B', label: 'Flange Type Block (Through Mounting Holes)', suffix: 'B' },
          { key: 'R', label: 'Square Compact Block (Narrow Width Tapped)', suffix: 'R' },
          { key: 'UU', label: 'Standard End Dust Seals', suffix: 'UU' },
          { key: 'SS', label: 'Double End Seals + Side Scrapers', suffix: 'SS' }
        ]
      },
      SHS: {
        brand: 'THK JAPAN AUTHENTIC',
        name: 'Caged Ball Ultra-Quiet LM Guide',
        seriesDesc: 'Caged Ball Low-Noise Series',
        cadUrl: 'lm-guide.html',
        diameters: {
          15: { D: 47, L: 64, C: 17200, C0: 27900, fit: 'JIS H/P Precision', stock: 'Bengaluru (Immediate)' },
          20: { D: 63, L: 79, C: 27500, C0: 44700, fit: 'JIS H/P Precision', stock: 'Bengaluru / Pune (Immediate)' },
          25: { D: 70, L: 92, C: 41700, C0: 67400, fit: 'JIS H/P Precision', stock: 'Bengaluru / Pune (Immediate)' },
          30: { D: 90, L: 111, C: 61900, C0: 100000, fit: 'JIS H/P Precision', stock: 'Pune (Immediate)' }
        },
        seals: [
          { key: 'C', label: 'Flange Type Caged Ball Block', suffix: 'C' },
          { key: 'V', label: 'Square Type Compact Caged Ball Block', suffix: 'V' },
          { key: 'UU', label: 'Standard End Seals', suffix: 'UU' },
          { key: 'SS', label: 'End Seals + Laminated Scrapers', suffix: 'SS' }
        ]
      },
      BNK: {
        brand: 'THK JAPAN AUTHENTIC',
        name: 'Precision Ground High-Accuracy Ball Screw',
        seriesDesc: 'Ground Ball Screw Series',
        cadUrl: 'ball-screws.html',
        diameters: {
          15: { D: 48, L: 500, C: 7400, C0: 14700, fit: 'JIS C3/C5 Preloaded', stock: 'Bengaluru Workshop' },
          20: { D: 58, L: 800, C: 11800, C0: 25500, fit: 'JIS C3/C5 Preloaded', stock: 'Bengaluru / Pune Workshop' },
          25: { D: 70, L: 1000, C: 16700, C0: 38200, fit: 'JIS C3/C5 Preloaded', stock: 'Pune Workshop' }
        },
        seals: [
          { key: 'RR', label: 'Double Brush Labyrinth Seals', suffix: '-RR' },
          { key: 'ZZ', label: 'End Deflector High-Speed Seals', suffix: '-ZZ' }
        ]
      },
      CF: {
        brand: 'THK JAPAN AUTHENTIC',
        name: 'Precision Cam Follower (Stud Type)',
        seriesDesc: 'Stud-Type Cam Follower',
        cadUrl: 'products.html?category=Cam%20Follower',
        diameters: {
          6: { D: 16, L: 28, C: 3590, C0: 3650, fit: 'JIS Hex Stud M6x1.0', stock: 'Bengaluru / Pune (Immediate)' },
          10: { D: 22, L: 36, C: 5390, C0: 6860, fit: 'JIS Hex Stud M10x1.25', stock: 'Bengaluru / Pune (Immediate)' },
          12: { D: 30, L: 40, C: 7850, C0: 9790, fit: 'JIS Hex Stud M12x1.5', stock: 'Bengaluru / Pune (Immediate)' },
          16: { D: 35, L: 52, C: 12000, C0: 18300, fit: 'JIS Hex Stud M16x1.5', stock: 'Bengaluru / Pune (Immediate)' },
          20: { D: 52, L: 66, C: 24700, C0: 37200, fit: 'JIS Hex Stud M20x1.5', stock: 'Pune / Delhi (Immediate)' }
        },
        seals: [
          { key: 'UU', label: 'Synthetic Rubber Contact Seals Both Sides', suffix: 'UU' },
          { key: 'B', label: 'Hexagonal Socket Stud Head', suffix: '-B' },
          { key: 'None', label: 'Standard Cage-Guided Open Type', suffix: '' }
        ]
      },
      RB: {
        brand: 'THK JAPAN AUTHENTIC',
        name: 'Cross-Roller Ring (Separable Outer Ring)',
        seriesDesc: 'Cross-Roller Ring Series',
        cadUrl: 'products.html?category=Cross%20Roller',
        diameters: {
          20: { D: 36, L: 8, C: 2900, C0: 2700, fit: 'JIS Precision Rotary Fit', stock: 'Bengaluru (Immediate)' },
          30: { D: 55, L: 12, C: 7350, C0: 8350, fit: 'JIS Precision Rotary Fit', stock: 'Bengaluru / Pune (Immediate)' },
          50: { D: 80, L: 13, C: 14700, C0: 20600, fit: 'JIS Precision Rotary Fit', stock: 'Bengaluru / Delhi (Immediate)' }
        },
        seals: [
          { key: 'UU', label: 'Rubber Seals on Both Sides', suffix: 'UU' },
          { key: 'Open', label: 'Open Type / Low Rotational Torque', suffix: '' }
        ]
      },
      SPB: {
        brand: 'OILES JAPAN',
        name: 'Oiles 500SP Self-Lubricating Bushing',
        seriesDesc: 'Solid Lubricant Embedded Bronze',
        cadUrl: 'products.html?brand=Oiles',
        diameters: {
          20: { D: 28, L: 30, C: 49000, C0: 98000, fit: 'Shaft d8 / Housing H7', stock: 'Bengaluru / Pune (Immediate)' },
          25: { D: 33, L: 35, C: 61000, C0: 122000, fit: 'Shaft d8 / Housing H7', stock: 'Bengaluru / Pune (Immediate)' },
          30: { D: 38, L: 40, C: 75000, C0: 150000, fit: 'Shaft d8 / Housing H7', stock: 'Pune / Delhi (Immediate)' }
        },
        seals: [
          { key: 'Bronze', label: 'High-Strength Brass with Graphite Plugs', suffix: '' }
        ]
      }
    };

    let curSeries = 'LM';
    let curDia = 20;
    let curSeal = 'UU';

    const renderDiaPills = () => {
      const seriesData = breakdownCatalog[curSeries] || breakdownCatalog.LM;
      const diaKeys = Object.keys(seriesData.diameters).map(Number);
      if (!diaKeys.includes(Number(curDia))) {
        curDia = diaKeys[Math.floor(diaKeys.length / 2)] || diaKeys[0];
        diaInput.value = curDia;
      }
      diaPillsContainer.innerHTML = diaKeys.map(d => '<button type="button" class="wizard-pill ' + (Number(d) === Number(curDia) ? 'active' : '') + '" data-dia="' + d + '">&Oslash; ' + d + ' mm</button>').join('');

      diaPillsContainer.querySelectorAll('.wizard-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          diaPillsContainer.querySelectorAll('.wizard-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          curDia = Number(btn.getAttribute('data-dia'));
          diaInput.value = curDia;
          updateOutput();
        });
      });
    };

    const renderSealPills = () => {
      const seriesData = breakdownCatalog[curSeries] || breakdownCatalog.LM;
      const seals = seriesData.seals;
      const validKeys = seals.map(s => s.key);
      if (!validKeys.includes(curSeal)) {
        curSeal = seals[0].key;
      }
      sealPillsContainer.innerHTML = seals.map(s => '<button type="button" class="wizard-pill ' + (s.key === curSeal ? 'active' : '') + '" data-seal="' + s.key + '">' + s.key + ' (' + s.label.split(' ')[0] + ')</button>').join('');

      sealPillsContainer.querySelectorAll('.wizard-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          sealPillsContainer.querySelectorAll('.wizard-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          curSeal = btn.getAttribute('data-seal');
          updateOutput();
        });
      });
    };

    const updateOutput = () => {
      const seriesData = breakdownCatalog[curSeries] || breakdownCatalog.LM;
      const diaData = seriesData.diameters[curDia] || Object.values(seriesData.diameters)[0];
      const sealData = seriesData.seals.find(s => s.key === curSeal) || seriesData.seals[0];

      let fullCode = curSeries + curDia + sealData.suffix;
      if (curSeries === 'BNK') {
        fullCode = curSeries + curDia + '20' + sealData.suffix;
      }

      resBrandTag.textContent = seriesData.brand;
      resPartCode.textContent = fullCode;
      resPartName.textContent = seriesData.name;
      resStockPill.innerHTML = '<i class="fa-solid fa-circle-check"></i> In Stock (' + diaData.stock + ')';

      nomToken1.textContent = curSeries;
      nomLbl1.textContent = seriesData.seriesDesc;

      nomToken2.textContent = curDia + 'mm';
      nomLbl2.textContent = curDia + 'mm Bore / Shaft Dimension';

      nomToken3.textContent = sealData.key;
      nomLbl3.textContent = sealData.label;

      specDr.textContent = curDia + ' mm';
      specD.textContent = diaData.D + ' mm';
      specL.textContent = diaData.L + ' mm';
      specC.textContent = diaData.C.toLocaleString() + ' N';
      specC0.textContent = diaData.C0.toLocaleString() + ' N';
      specFit.textContent = diaData.fit;

      if (cadLink) {
        cadLink.href = seriesData.cadUrl;
      }
    };

    seriesPills.forEach(btn => {
      btn.addEventListener('click', () => {
        seriesPills.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        curSeries = btn.getAttribute('data-series');
        seriesInput.value = curSeries;
        renderDiaPills();
        renderSealPills();
        updateOutput();
      });
    });

    seriesInput.addEventListener('input', () => {
      const typed = seriesInput.value.trim().toUpperCase();
      const matched = Object.keys(breakdownCatalog).find(k => k === typed || typed.startsWith(k));
      if (matched) {
        curSeries = matched;
        seriesPills.forEach(b => {
          if (b.getAttribute('data-series') === matched) b.classList.add('active');
          else b.classList.remove('active');
        });
        renderDiaPills();
        renderSealPills();
        updateOutput();
      }
    });

    diaInput.addEventListener('input', () => {
      const num = parseInt(diaInput.value.trim());
      const seriesData = breakdownCatalog[curSeries] || breakdownCatalog.LM;
      if (num && seriesData.diameters[num]) {
        curDia = num;
        diaPillsContainer.querySelectorAll('.wizard-pill').forEach(b => {
          if (Number(b.getAttribute('data-dia')) === num) b.classList.add('active');
          else b.classList.remove('active');
        });
        updateOutput();
      }
    });

    if (addBomBtn) {
      addBomBtn.addEventListener('click', () => {
        const code = resPartCode.textContent.trim();
        this.addToBom(code, 1, 'Configured via Guided Breakdown Tool');
        this.openBomDrawer();
      });
    }

    renderDiaPills();
    renderSealPills();
    updateOutput();
  }

}

let rollmannApp;
document.addEventListener('DOMContentLoaded', () => {
  rollmannApp = new RollmannApp();
});
