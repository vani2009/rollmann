const ROLLMANN_BRANDS = [
  {
    name: "THK",
    slug: "thk",
    logo: "images/brands/thk.svg",
    country: "Japan",
    badges: ["Authorized Stockist", "Made in Japan"],
    description: "World leader in Linear Motion Guides, precision ball screws, linear bushings, and high-rigidity cross roller rings.",
    catalogueUrl: "downloads/thk/THK_Linear_Motion_General_Catalog.pdf",
    officialUrl: "https://www.thk.com",
    categories: [
      {
        name: "Linear Bushings",
        desc: "High precision cylindrical and flanged linear bushings with smooth infinite recirculating stroke.",
        products: [
          {
            series: "LM / LM-L",
            desc: "Standard cylindrical linear bushings with synthetic resin retainers and double rubber contact seals.",
            datasheet: "downloads/thk/THK_Linear_Bush_508-2E.pdf",
            dxf: "downloads/thk/LM20UU.dxf",
            step: "downloads/thk/LM20UU.step",
            glb: "downloads/thk/lm20uu.glb",
            has3d: true,
            officialCadUrl: "https://tech.thk.com/en/products/cad.php"
          },
          {
            series: "LMF / LMK / LMH",
            desc: "Round, square, and oval two-cut flanged linear bushings for direct housing face mounting.",
            datasheet: "downloads/thk/THK_Linear_Bush_508-2E.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://tech.thk.com/en/products/cad.php"
          },
          {
            series: "LG Series",
            desc: "Guide ball bushing with 4-row arc raceways providing non-rotating high load capacity.",
            datasheet: "downloads/thk/THK_Linear_Bush_508-2E.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://tech.thk.com/en/products/cad.php"
          }
        ]
      },
      {
        name: "LM Guides & Profile Rails",
        desc: "Heavy-duty 4-way equal-load profile rail systems engineered for machine tools and robotic gantries.",
        products: [
          {
            series: "HSR Series",
            desc: "Standard heavy-load 4-way equal load caged ball linear guide blocks and ground rails.",
            datasheet: "downloads/thk/THK_HSR_LM_Guide_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://tech.thk.com/en/products/cad.php"
          },
          {
            series: "SHS Series",
            desc: "Global standard caged-ball linear guideway offering ultra-smooth low noise travel.",
            datasheet: "downloads/thk/THK_SHS_LM_Guide_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://tech.thk.com/en/products/cad.php"
          },
          {
            series: "SSR Series",
            desc: "Compact low center-of-gravity radial type linear guides for horizontal axis machines.",
            datasheet: "downloads/thk/THK_SSR_LM_Guide_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://tech.thk.com/en/products/cad.php"
          }
        ]
      },
      {
        name: "Precision Ball Screws",
        desc: "JIS C3/C5 precision ground and rolled ball screws delivering micron-level positioning repeatability.",
        products: [
          {
            series: "BNK Series",
            desc: "Precision finished shaft ends ball screws with ground threads and zero-backlash preloaded nuts.",
            datasheet: "downloads/thk/THK_BNK_Ball_Screw_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://tech.thk.com/en/products/cad.php"
          },
          {
            series: "BTK / MTF Series",
            desc: "High-efficiency rolled ball screws with compact gothic-arch raceway profiles.",
            datasheet: "downloads/thk/THK_BTK_Ball_Screw_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://tech.thk.com/en/products/cad.php"
          }
        ]
      },
      {
        name: "Cam Followers & Roller Followers",
        desc: "Stud-type and yoke-type track rollers with integrated needle bearings for cam mechanisms and linear tracks.",
        products: [
          {
            series: "CF / CFH Series",
            desc: "High-rigidity stud-type cam followers with hexagonal socket for rapid hex-key maintenance.",
            datasheet: "downloads/thk/THK_Cam_Follower_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://tech.thk.com/en/products/cad.php"
          }
        ]
      },
      {
        name: "Cross Roller Rings",
        desc: "Compact orthogonal cylindrical roller bearings carrying radial, thrust, and moment loads simultaneously.",
        products: [
          {
            series: "RB / RE / RU Series",
            desc: "Separable and integrated high-rigidity rings for industrial robot joints and rotary tables.",
            datasheet: "downloads/thk/THK_Cross_Roller_Ring_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://tech.thk.com/en/products/cad.php"
          }
        ]
      }
    ]
  },
  {
    name: "Tsubaki",
    slug: "tsubaki",
    logo: "images/brands/tsubaki.svg",
    country: "Japan",
    badges: ["Authorized Stockist", "In Stock"],
    description: "Premier Japanese manufacturer of high-end roller chains, lube-free Lambda chains, Cableveyor carriers, and actuators.",
    catalogueUrl: "downloads/tsubaki/Tsubaki_General_Catalog.pdf",
    officialUrl: "https://www.tsubakimoto.com",
    categories: [
      {
        name: "Drive & Roller Chains",
        desc: "ANSI and BS standard precision transmission chains and maintenance-free lube-free chains.",
        products: [
          {
            series: "Lambda Lube-Free Chain",
            desc: "Oil-impregnated sintered metal bushings provide long maintenance-free service life without external lube.",
            datasheet: "downloads/tsubaki/Tsubaki_Lambda_Chain_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://ttdc.tsubakimoto.co.jp/"
          },
          {
            series: "RS Standard Roller Chain",
            desc: "World standard heavy transmission chain with seamless solid bushings and shot-peened plates.",
            datasheet: "downloads/tsubaki/Tsubaki_RS_Roller_Chain_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://ttdc.tsubakimoto.co.jp/"
          }
        ]
      },
      {
        name: "Cable Carriers (Cableveyors)",
        desc: "Plastic and steel dynamic cable management systems for protecting electrical lines and hydraulic hoses.",
        products: [
          {
            series: "TKP / TKR Series",
            desc: "Lightweight, silent, low-vibration plastic cable tracks for pick-and-place automation.",
            datasheet: "downloads/tsubaki/Tsubaki_Cableveyor_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://ttdc.tsubakimoto.co.jp/"
          }
        ]
      },
      {
        name: "Power Cylinders & Actuators",
        desc: "Electromechanical high-thrust linear actuators equipped with safety friction clutches.",
        products: [
          {
            series: "Linipower Cylinders",
            desc: "High-duty screw-driven cylinders delivering stable linear thrust from 100 N to 300 kN.",
            datasheet: "downloads/tsubaki/Tsubaki_Power_Cylinder_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://ttdc.tsubakimoto.co.jp/"
          }
        ]
      }
    ]
  },
  {
    name: "Oiles",
    slug: "oiles",
    logo: "images/brands/oiles.svg",
    country: "Japan",
    badges: ["Authorized Stockist", "Made in Japan"],
    description: "World leader in self-lubricating bearings, solid bronze graphite-plugged bushings, and maintenance-free slide plates.",
    catalogueUrl: "downloads/oiles/Oiles_Self_Lubricating_Bearings_Catalog.pdf",
    officialUrl: "https://www.oiles.co.jp",
    categories: [
      {
        name: "Solid Bronze Bearings",
        desc: "Cast bronze bearings embedded with high-grade solid graphite lubricant plugs for extreme loads.",
        products: [
          {
            series: "Oiles 500SP / SPB / SPF",
            desc: "Solid bronze graphite plugged cylindrical and flanged bearings operating without oil lubrication.",
            datasheet: "downloads/oiles/Oiles_500SP_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.oiles.co.jp/en/bearing/cad/"
          }
        ]
      },
      {
        name: "Composite Dry Bushings",
        desc: "Multi-layered PTFE self-lubricating dry sliding bushings with steel shell reinforcement.",
        products: [
          {
            series: "Oiles Drymet LF / LFB",
            desc: "Three-layer composite bushings featuring a PTFE/lead sliding surface, sintered bronze interlayer, and steel backing.",
            datasheet: "downloads/oiles/Oiles_Drymet_LF_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.oiles.co.jp/en/bearing/cad/"
          }
        ]
      },
      {
        name: "Wear Plates & Die Components",
        desc: "Standard guide post sets, wear slide plates, and bronze guide rings for stamping dies and molds.",
        products: [
          {
            series: "Oiles 500SP Flat Plates",
            desc: "Precision ground self-lubricating wear plates for machine guideways and press dies.",
            datasheet: "downloads/oiles/Oiles_Wear_Plates_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.oiles.co.jp/en/bearing/cad/"
          }
        ]
      }
    ]
  },
  {
    name: "Zimmer",
    slug: "zimmer",
    logo: "images/brands/zimmer.svg",
    country: "Germany",
    badges: ["Authorized Stockist", "Made in Germany"],
    description: "Premium German manufacturer of pneumatic, hydraulic, and manual linear rail clamping elements and shock absorbers.",
    catalogueUrl: "downloads/zimmer/Zimmer_Clamping_and_Braking_Elements_Catalog.pdf",
    officialUrl: "https://www.zimmer-group.com",
    categories: [
      {
        name: "Pneumatic Rail Clamps & Brakes",
        desc: "Safety braking and holding elements engineered for profile linear guide rails.",
        products: [
          {
            series: "MBPS / UBPS Series",
            desc: "Spring-accumulator pneumatic clamping elements for immediate emergency holding and braking.",
            datasheet: "downloads/zimmer/Zimmer_MBPS_Clamping_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.zimmer-group.com/en/services/cad-data"
          }
        ]
      },
      {
        name: "Manual Clamping Elements",
        desc: "Ergonomic quick-acting mechanical locking elements with adjustable clamping levers.",
        products: [
          {
            series: "HK / MK Series",
            desc: "Manual clamping elements for table positioning, slide stops, and optical inspection rigs.",
            datasheet: "downloads/zimmer/Zimmer_HK_Manual_Clamp_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.zimmer-group.com/en/services/cad-data"
          }
        ]
      },
      {
        name: "Industrial Damping Technology",
        desc: "Precision self-compensating kinetic energy absorbers for robotic automation.",
        products: [
          {
            series: "Powerstop Industrial Shock Absorbers",
            desc: "High energy capacity dampers providing controlled deceleration without peak shock loads.",
            datasheet: "downloads/zimmer/Zimmer_Powerstop_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.zimmer-group.com/en/services/cad-data"
          }
        ]
      }
    ]
  },
  {
    name: "INA",
    slug: "ina",
    logo: "images/brands/ina.svg",
    country: "Germany",
    badges: ["Authorized Stockist", "Made in Germany"],
    description: "Schaeffler brand renowned for precision needle roller bearings, linear monorail guidance systems, and track rollers.",
    catalogueUrl: "downloads/ina/INA_Needle_Roller_Bearings_Catalog.pdf",
    officialUrl: "https://www.schaeffler.de",
    categories: [
      {
        name: "Needle Roller Bearings",
        desc: "High load capacity radial needle bearings for compact, space-constrained shafts.",
        products: [
          {
            series: "HK / BK / NK / RNA Series",
            desc: "Drawn cup needle roller bearings with open or closed ends and machined heavy-duty needle rings.",
            datasheet: "downloads/ina/INA_Needle_Roller_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.schaeffler.de/en/medias/"
          }
        ]
      },
      {
        name: "Monorail Linear Guidance Systems",
        desc: "Four-row and six-row ball monorail guidance systems designed for high precision and stiffness.",
        products: [
          {
            series: "KUVE / KUSE Series",
            desc: "High rigidity linear ball guideways with full sealing and integrated grease reservoir options.",
            datasheet: "downloads/ina/INA_KUVE_Linear_Guideway_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.schaeffler.de/en/medias/"
          }
        ]
      },
      {
        name: "Track Rollers & Cam Followers",
        desc: "Heavy-duty stud and yoke track rollers for high static and dynamic contact stresses.",
        products: [
          {
            series: "KR / NUKR / NUTR Series",
            desc: "Thick-walled outer ring cylindrical and crowned track rollers for industrial automation paths.",
            datasheet: "downloads/ina/INA_Track_Rollers_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.schaeffler.de/en/medias/"
          }
        ]
      }
    ]
  },
  {
    name: "FAG",
    slug: "fag",
    logo: "images/brands/fag.svg",
    country: "Germany",
    badges: ["Authorized Stockist", "In Stock"],
    description: "Schaeffler brand producing precision spindle bearings, deep groove ball bearings, and spherical roller bearings.",
    catalogueUrl: "downloads/fag/FAG_Rolling_Bearings_Master_Catalog.pdf",
    officialUrl: "https://www.schaeffler.de",
    categories: [
      {
        name: "Deep Groove Ball Bearings",
        desc: "Generation C low-noise high-speed radial ball bearings with optimized raceways.",
        products: [
          {
            series: "Generation C 6000 / 6200 / 6300",
            desc: "Optimized radial deep groove ball bearings with low friction and labyrinth seal shielding.",
            datasheet: "downloads/fag/FAG_Deep_Groove_Ball_Bearings_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.schaeffler.de/en/medias/"
          }
        ]
      },
      {
        name: "Precision Spindle Bearings",
        desc: "High-speed angular contact spindle bearings engineered for CNC machine tool spindles.",
        products: [
          {
            series: "B7000 / B7200 Ceramic Hybrid Sets",
            desc: "Ultra-high speed angular contact spindle bearings with silicon nitride ceramic balls.",
            datasheet: "downloads/fag/FAG_Spindle_Bearings_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.schaeffler.de/en/medias/"
          }
        ]
      },
      {
        name: "Spherical Roller Bearings",
        desc: "Self-aligning heavy-duty double row spherical roller bearings for vibratory screens and gearboxes.",
        products: [
          {
            series: "22200 / 22300 E1 Series",
            desc: "Severe duty spherical roller bearings with high dynamic load ratings and heat-stabilized rings.",
            datasheet: "downloads/fag/FAG_Spherical_Roller_Datasheet.pdf",
            dxf: null,
            step: null,
            glb: null,
            has3d: false,
            officialCadUrl: "https://www.schaeffler.de/en/medias/"
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ROLLMANN_BRANDS;
}
