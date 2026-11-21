# Rollmann Trading Company - Downloads & CAD Asset Repository

This directory hosts downloadable technical documentation, 2D drawings, 3D solid models, and 3D web assets for the 6 authorized partner brands: **THK, Tsubaki, Oiles, Zimmer, INA, and FAG**.

---

## 1. Directory Structure

```
downloads/
├── README.md
├── thk/
│   ├── THK_Linear_Motion_General_Catalog.pdf   (Master Catalog)
│   ├── THK_Linear_Bush_508-2E.pdf              (Datasheet)
│   ├── LM20UU.dxf                              (2D CAD Drawing)
│   ├── LM20UU.step                             (3D Solid Model)
│   └── lm20uu.glb                              (Interactive 3D Web Model)
├── tsubaki/
│   ├── Tsubaki_General_Catalog.pdf             (Master Catalog)
│   └── ...
├── oiles/
│   ├── Oiles_Self_Lubricating_Bearings_Catalog.pdf
│   └── ...
├── zimmer/
│   ├── Zimmer_Clamping_and_Braking_Elements_Catalog.pdf
│   └── ...
├── ina/
│   ├── INA_Needle_Roller_Bearings_Catalog.pdf
│   └── ...
└── fag/
    ├── FAG_Rolling_Bearings_Master_Catalog.pdf
    └── ...
```

---

## 2. File Types & Naming Conventions

| Asset Type | File Extension | Storage Path | Usage in Website |
|---|---|---|---|
| **Master Catalogues** | `.pdf` | `downloads/<brand>/<Brand>_General_Catalog.pdf` | Downloaded from `products.html`, `catalogues.html`, and `brand.html` |
| **Series Datasheets** | `.pdf` | `downloads/<brand>/<Series>_Datasheet.pdf` | Downloaded from the series table in `brand.html` |
| **2D CAD Drawings** | `.dxf` | `downloads/<brand>/<PartNumber>.dxf` | "2D (DXF)" button in the brand series table |
| **3D Solid Models** | `.step` / `.stp` | `downloads/<brand>/<PartNumber>.step` | "3D (STEP)" button in the series table and 3D modal |
| **Interactive 3D Models** | `.glb` | `downloads/<brand>/<partnumber>.glb` | Displayed inside Google's `<model-viewer>` in the 3D preview modal |

---

## 3. How to Register Files in `brands-data.js`

All download links and 3D models are driven centrally by `brands-data.js`. Adding or updating a file is a single data entry:

```javascript
{
  name: "THK",
  slug: "thk",
  catalogueUrl: "downloads/thk/THK_Linear_Motion_General_Catalog.pdf",
  categories: [
    {
      name: "Linear Bushings",
      products: [
        {
          series: "LM / LM-L",
          desc: "Standard cylindrical linear bushings...",
          datasheet: "downloads/thk/THK_Linear_Bush_508-2E.pdf", // Local PDF
          dxf: "downloads/thk/LM20UU.dxf",                     // Local DXF
          step: "downloads/thk/LM20UU.step",                   // Local STEP
          glb: "downloads/thk/lm20uu.glb",                     // Interactive GLB
          has3d: true,
          officialCadUrl: "https://tech.thk.com/en/products/cad.php" // External fallback
        }
      ]
    }
  ]
}
```

### Availability Rules:
- If a file path is provided (e.g. `downloads/thk/...`), the download button is active.
- If `officialCadUrl` is provided (without local file), a "Portal &rarr;" button links to the manufacturer's CAD portal.
- If both are `null`, the button automatically renders as a disabled **"Coming soon"** button. Broken links are never displayed.

---

## 4. Download Gating Configuration

Download gating is controlled in `whatsapp-config.js`:

```javascript
GATE_DOWNLOADS: false, // Set to true to require Name, Company, Email, Phone
FORM_ENDPOINT: "https://formspree.io/f/YOUR_FORM_KEY"
```

- When `GATE_DOWNLOADS: false` (default), clicking any catalogue or CAD download downloads the file immediately.
- When `GATE_DOWNLOADS: true`, a clean modal captures the lead and submits via POST to your Formspree/Web3Forms endpoint before triggering the download.
