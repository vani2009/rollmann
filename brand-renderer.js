const RollmannBrandRenderer = {
  currentBrand: null,

  init() {
    const container = document.getElementById('brandPageContent');
    if (!container) return;

    if (typeof ROLLMANN_BRANDS === 'undefined' || !Array.isArray(ROLLMANN_BRANDS)) {
      container.innerHTML = '<div style="padding:40px; text-align:center; color:red;">Brand database not found.</div>';
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const slug = (params.get('b') || 'thk').toLowerCase();

    this.currentBrand = ROLLMANN_BRANDS.find(b => b.slug.toLowerCase() === slug) || ROLLMANN_BRANDS[0];

    document.title = this.currentBrand.name + " Products, Catalogues & 3D CAD Models | Rollmann India";

    this.renderPage(container);
    this.attach3dModalHandlers();
  },

  renderPage(container) {
    const b = this.currentBrand;

    let categoriesHtml = b.categories.map((cat, catIdx) => {
      let rowsHtml = cat.products.map(p => {
        let pdfCell = p.datasheet
          ? `<a href="${p.datasheet}" class="cad-btn btn-download-cat" data-brand="${b.name}" data-title="${p.series} Datasheet" data-file="${p.datasheet}"><i class="fa-solid fa-file-pdf" style="color:#DC2626;"></i> PDF</a>`
          : `<button type="button" class="cad-btn disabled-btn" disabled>Coming soon</button>`;

        let dxfCell = '';
        if (p.dxf) {
          dxfCell = `<a href="${p.dxf}" class="cad-btn cad-dl-btn" data-brand="${b.name}" data-title="${p.series} 2D DXF" data-file="${p.dxf}"><i class="fa-solid fa-file-lines" style="color:var(--rollmann-cyan);"></i> DXF</a>`;
        } else if (p.officialCadUrl) {
          dxfCell = `<a href="${p.officialCadUrl}" target="_blank" rel="noopener noreferrer" class="cad-btn"><i class="fa-solid fa-arrow-up-right-from-square" style="color:var(--rollmann-cyan);"></i> Portal</a>`;
        } else {
          dxfCell = `<button type="button" class="cad-btn disabled-btn" disabled>Coming soon</button>`;
        }

        let stepCell = '';
        if (p.step) {
          stepCell = `<a href="${p.step}" class="cad-btn cad-dl-btn" data-brand="${b.name}" data-title="${p.series} 3D STEP" data-file="${p.step}"><i class="fa-solid fa-cube" style="color:#F97316;"></i> STEP</a>`;
        } else if (p.officialCadUrl) {
          stepCell = `<a href="${p.officialCadUrl}" target="_blank" rel="noopener noreferrer" class="cad-btn"><i class="fa-solid fa-arrow-up-right-from-square" style="color:#F97316;"></i> Portal</a>`;
        } else {
          stepCell = `<button type="button" class="cad-btn disabled-btn" disabled>Coming soon</button>`;
        }

        let previewBtn = `<button type="button" class="btn-preview-3d" data-brand="${b.name}" data-series="${p.series}" data-has3d="${p.has3d ? '1' : '0'}" data-glb="${p.glb || ''}" data-step="${p.step || ''}" data-desc="${encodeURIComponent(p.desc)}">
          <i class="fa-solid fa-cube"></i> 3D Preview
        </button>`;

        let waBtn = `<button type="button" class="btn-table-rfq btn-whatsapp-ask" data-wa-brand="${b.name}" data-wa-product="${p.series}" style="background:#25D366; color:#fff; border-color:#25D366; padding:6px 12px;" title="Inquire on WhatsApp">
          <i class="fa-brands fa-whatsapp"></i> Inquire
        </button>`;

        return `
          <tr>
            <td>
              <strong style="color:var(--navy-deep); font-size:13.5px; display:block;">${p.series}</strong>
            </td>
            <td>
              <div style="font-size:12.5px; color:var(--gray-600); line-height:1.4;">${p.desc}</div>
            </td>
            <td>${pdfCell}</td>
            <td>${dxfCell}</td>
            <td>${stepCell}</td>
            <td>${previewBtn}</td>
            <td>${waBtn}</td>
          </tr>
        `;
      }).join('');

      return `
        <div class="brand-category-card" style="background:#fff; border:1px solid var(--gray-200); border-radius:var(--radius-md); padding:24px; margin-bottom:32px; box-shadow:0 4px 14px rgba(0,0,0,0.03);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; border-bottom:1px solid var(--gray-200); padding-bottom:14px;">
            <div>
              <span style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--rollmann-cyan); letter-spacing:0.04em;">Category ${catIdx + 1} of ${b.categories.length}</span>
              <h3 style="font-size:18px; font-weight:800; color:var(--navy-deep); margin:2px 0 0 0;">${cat.name}</h3>
              <p style="font-size:13px; color:var(--gray-600); margin:4px 0 0 0;">${cat.desc}</p>
            </div>
            <button type="button" class="btn-whatsapp-ask" data-wa-brand="${b.name}" data-wa-product="${cat.name}" style="width:auto; padding:8px 16px;">
              <i class="fa-brands fa-whatsapp"></i> Ask on WhatsApp
            </button>
          </div>

          <div class="catalog-table-wrap">
            <table class="spec-matrix-table">
              <thead>
                <tr>
                  <th style="min-width:140px;">Series / Model</th>
                  <th style="min-width:240px;">Engineering Description</th>
                  <th>Datasheet</th>
                  <th>2D CAD</th>
                  <th>3D CAD</th>
                  <th>3D Preview</th>
                  <th>WhatsApp</th>
                </tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <span>&rsaquo;</span>
        <a href="products.html">Products</a>
        <span>&rsaquo;</span>
        <span>${b.name}</span>
      </div>

      <div class="brand-hero-card" style="background:linear-gradient(135deg, var(--navy-deep) 0%, #001f3b 100%); border:1px solid rgba(0,173,239,0.3); border-radius:var(--radius-md); padding:32px; margin-bottom:36px; box-shadow:0 12px 32px rgba(0,0,0,0.25); color:#fff;">
        <div style="display:flex; gap:28px; align-items:center; flex-wrap:wrap;">
          <div style="width:200px; height:80px; background:#fff; border-radius:6px; display:flex; align-items:center; justify-content:center; padding:12px; box-shadow:0 4px 14px rgba(0,0,0,0.2); flex-shrink:0;">
            <img src="${b.logo}" alt="${b.name}" style="max-height:100%; max-width:100%; object-fit:contain;" />
          </div>
          <div style="flex:1; min-width:280px;">
            <div style="display:flex; gap:8px; margin-bottom:10px; flex-wrap:wrap;">
              <span class="brand-dir-badge badge-auth" style="background:rgba(0,173,239,0.2); color:#fff; border-color:var(--rollmann-cyan);">Authorized Stockist</span>
              <span class="brand-dir-badge badge-loc" style="background:rgba(255,255,255,0.15); color:#fff; border-color:rgba(255,255,255,0.3);">${b.badges[1]}</span>
            </div>
            <h1 style="font-size:26px; font-weight:800; color:#fff; margin:0 0 8px 0;">${b.name} Industrial Products &amp; Engineering Systems</h1>
            <p style="font-size:14px; color:var(--gray-300); line-height:1.5; margin:0 0 16px 0; max-width:780px;">${b.description}</p>
            <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
              <a href="${b.catalogueUrl}" class="btn-primary btn-download-cat" data-brand="${b.name}" data-title="${b.name} Master Catalog" data-file="${b.catalogueUrl}">
                <i class="fa-solid fa-file-pdf"></i> Download Full Catalogue (PDF)
              </a>
              <a href="${b.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="background:rgba(255,255,255,0.1); color:#fff; border-color:rgba(255,255,255,0.3);">
                <i class="fa-solid fa-globe"></i> Official Manufacturer Portal &rarr;
              </a>
              <button type="button" class="btn-whatsapp-ask" data-wa-brand="${b.name}" data-context="${b.name} Full Catalog Sizing" style="width:auto; padding:10px 18px;">
                <i class="fa-brands fa-whatsapp"></i> Ask on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:24px;">
        <h2 style="font-size:20px; font-weight:800; color:var(--navy-deep); margin:0 0 4px 0;">
          Product Series &amp; Technical CAD Downloads
        </h2>
        <p style="font-size:13px; color:var(--gray-600); margin:0;">
          Inspect series specifications, download 2D DXF and 3D STEP solid models, or interact with 3D model previews.
        </p>
      </div>

      <div class="brand-categories-wrapper">
        ${categoriesHtml}
      </div>
    `;
  },

  attach3dModalHandlers() {
    const modal = document.getElementById('rollmann3dModal');
    const closeBtn = document.getElementById('modal3dClose');
    const backdrop = document.getElementById('modal3dBackdrop');
    const viewerBox = document.getElementById('modal3dViewerContainer');
    const titleEl = document.getElementById('modal3dTitle');
    const modelNameEl = document.getElementById('modal3dModelName');
    const dlStep = document.getElementById('modal3dDownloadStep');
    const askWa = document.getElementById('modal3dAskWa');

    if (!modal) return;

    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    if (backdrop) backdrop.addEventListener('click', () => modal.classList.remove('active'));

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-preview-3d');
      if (btn) {
        const brand = btn.getAttribute('data-brand');
        const series = btn.getAttribute('data-series');
        const has3d = btn.getAttribute('data-has3d') === '1';
        const glb = btn.getAttribute('data-glb');
        const step = btn.getAttribute('data-step');
        const desc = decodeURIComponent(btn.getAttribute('data-desc') || '');

        if (titleEl) titleEl.textContent = brand + ' ' + series + ' 3D CAD Inspector';
        if (modelNameEl) modelNameEl.textContent = series;

        if (dlStep) {
          if (step) {
            dlStep.href = step;
            dlStep.style.display = 'inline-flex';
          } else {
            dlStep.style.display = 'none';
          }
        }

        if (askWa) {
          askWa.setAttribute('data-wa-brand', brand);
          askWa.setAttribute('data-wa-product', series);
        }

        if (viewerBox) {
          if (has3d && glb) {
            viewerBox.innerHTML = `
              <model-viewer src="${glb}" alt="${series} 3D Model" auto-rotate camera-controls shadow-intensity="1" exposure="1.1" style="width:100%; height:420px; background:#001224; border-radius:8px;">
                <div slot="poster" style="display:flex; align-items:center; justify-content:center; height:100%; color:#fff;">Loading 3D CAD Model...</div>
              </model-viewer>
            `;
          } else {
            viewerBox.innerHTML = `
              <div style="padding:32px 20px; text-align:center; color:#fff; width:100%;">
                <div style="width:80px; height:80px; margin:0 auto 16px auto; border-radius:50%; background:rgba(0,173,239,0.12); border:1px solid var(--rollmann-cyan); display:flex; align-items:center; justify-content:center;">
                  <i class="fa-solid fa-cube" style="font-size:36px; color:var(--rollmann-cyan);"></i>
                </div>
                <h4 style="font-size:18px; font-weight:800; color:#fff; margin-bottom:8px;">${series} 3D CAD Solid Model</h4>
                <p style="font-size:13px; color:var(--gray-300); max-width:440px; margin:0 auto 20px auto; line-height:1.5;">
                  ${desc || 'Precision engineered industrial component geometry.'}
                </p>
                <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:6px; padding:12px 16px; max-width:380px; margin:0 auto 20px auto; font-size:12px; color:var(--gray-300);">
                  <i class="fa-solid fa-circle-check" style="color:var(--rollmann-cyan); margin-right:6px;"></i>
                  Direct STEP/IGES solid model package available for immediate dispatch.
                </div>
                <button type="button" class="btn-whatsapp-ask" data-wa-brand="${brand}" data-wa-product="${series} 3D CAD Solid Model" style="max-width:280px; margin:0 auto; padding:10px 16px;">
                  <i class="fa-brands fa-whatsapp"></i> Request 3D STEP via WhatsApp
                </button>
              </div>
            `;
          }
        }

        modal.classList.add('active');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  RollmannBrandRenderer.init();
});
