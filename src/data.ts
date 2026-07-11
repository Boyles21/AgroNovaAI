import { ProductSpec, TechFramework, SolutionSector } from "./types";

export const PRODUCTS_DATA: ProductSpec[] = [
  {
    name: "TerraBot S4",
    category: "Ground Robotics",
    tagline: "Autonomous Micro-Precision Field Platform",
    description: "A heavy-duty autonomous crawler designed for target weeding, precise micro-droplet nutrient distribution, and mechanical harvesting. Guided by stereo depth-vision and sub-centimeter GPS.",
    stats: [
      { label: "AI Compute", value: "275 TOPS" },
      { label: "Battery Life", value: "14 Hours" },
      { label: "Target Accuracy", value: "< 2mm" },
      { label: "Ground Speed", value: "8.5 km/h" }
    ],
    features: [
      "Real-time weed detection and mechanical root termination",
      "Dynamic multi-spectral soil moisture profiling",
      "Soft-touch end effectors for delicates harvesting",
      "Autonomous solar-recharging bay compatibility"
    ]
  },
  {
    name: "AeroScout V8",
    category: "Aerial Robotics",
    tagline: "Multispectral Autonomous Surveyor",
    description: "An industrial-grade heavy-lift octocopter built for continuous aerial mapping and ultra-high-resolution multispectral analysis. Scans hundreds of hectares per flight with automated hot-swap battery docking.",
    stats: [
      { label: "Flight Time", value: "55 Mins" },
      { label: "Payload Cap", value: "12.5 kg" },
      { label: "Scan Rate", value: "180 ha/hr" },
      { label: "Optics", value: "12-Band MS" }
    ],
    features: [
      "Omnidirectional LiDAR collision avoidance",
      "Bioluminescent stress indicator detection",
      "Automated thermal canopy micro-climate mapping",
      "Secure encrypted satellite downlink connection"
    ]
  },
  {
    name: "Ceres Core v3",
    category: "Central Intelligence",
    tagline: "Neural Crop Optimization Coordinator",
    description: "The decentralized cognitive hub of the modern digital farm. Ceres Core aggregates edge data from TerraBots and AeroScouts to predict yield models, orchestrate robotic workflows, and automate irrigation.",
    stats: [
      { label: "Model Scale", value: "85B Params" },
      { label: "Ingest Rate", value: "10GB / min" },
      { label: "Yield Uplift", value: "+ 34.2%" },
      { label: "Water Saved", value: "- 42.0%" }
    ],
    features: [
      "Predictive micro-weather modeling and storm mitigation",
      "Decentralized edge-mesh coordination protocol",
      "Carbon capture and soil sequestration tracking",
      "Autonomous pesticide-reduction recipe compiler"
    ]
  }
];

export const TECH_DATA: TechFramework[] = [
  {
    title: "AgroBrain Vision OS",
    codename: "Project Argus",
    description: "Our proprietary computer vision pipeline optimized for real-time edge processing. Trained on over 500 million plant phenotype datasets to recognize microscopic stress points before they affect crop growth.",
    metrics: [
      { label: "Frame Rate", value: "240 FPS" },
      { label: "Classification Latency", value: "< 4ms" },
      { label: "Insect Detection", value: "99.8%" }
    ],
    details: [
      "Direct neural processing unit (NPU) kernel-level integrations",
      "Real-time sunlight-intensity and glare-correction filters",
      "Sub-surface root system structure estimation models",
      "Stomatal conductance tracking via infrared thermal vision"
    ]
  },
  {
    title: "Decentralized Swarm Protocol",
    codename: "Project Nexus",
    description: "A revolutionary ad-hoc mesh communication system that enables multi-robot collaboration in remote valleys and off-grid fields without cellular towers or satellite links.",
    metrics: [
      { label: "Mesh Range", value: "15 km" },
      { label: "Sync Latency", value: "12ms" },
      { label: "Max Node Scale", value: "250 Units" }
    ],
    details: [
      "Dynamic peer-to-peer task load balancing",
      "Automated path-deconfliction and landing-pad reservation",
      "Distributed diagnostic sharing and collective fallback plans",
      "Military-grade AES-256 local encrypted transmission"
    ]
  }
];

export const SOLUTIONS_DATA: SolutionSector[] = [
  {
    title: "Broadacre Farming",
    tagline: "Industrial scale. Microscopic precision.",
    description: "Transform thousands of hectares of soy, corn, and wheat into automated carbon-negative zones. Reduce fertilizer waste and maximize yield dynamically without adding personnel.",
    useCase: "Orchestrate 10 AeroScouts and 4 TerraBots to autonomously defend crops from emerging pests.",
    benefits: [
      "90% reduction in chemical chemical runoff",
      "Continuous 24/7 crop health monitoring",
      "Immediate spot-spraying instead of blanket application",
      "Digital yield twins updated hourly"
    ]
  },
  {
    title: "Specialty Vineyards",
    tagline: "Delicate canopies. Exceptional vintage.",
    description: "Managing high-end grape varietals requires delicate handling. Our robots navigate tight terraced canopies, selectively leaf-thin, and harvest only the grapes at peak brix levels.",
    useCase: "Autonomous mechanical leaf stripping and precision pruning based on individual vine vigor.",
    benefits: [
      "Zero-soil-compaction tracked robotic designs",
      "Non-destructive ripeness sensing in-situ",
      "Selective night-harvesting for optical juice preservation",
      "Real-time powdery mildew predictive tracking"
    ]
  }
];
