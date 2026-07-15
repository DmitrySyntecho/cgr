/* ============================================================
   CGR — Content library (single source of truth)
   Replace review/photo placeholders with verified assets.
   ============================================================ */

export const COMPANY = {
  name: "California Garage Door Repair",
  short: "CGR",
  phone: "(818) 369-8144",
  phoneHref: "tel:+18183698144",
  license: "CSLB #1077353",
  since: 2006,
  yearsExperience: 20,
  insurance: "$2M general liability",
  google: { rating: "5.0", count: "400+" },
  yelp: { rating: "5.0", count: "900+" },
  promo: "15% Off Any Repair for New Customers",
};

export const NAV = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const BRANDS = [
  "C.H.I.",
  "Clopay",
  "LiftMaster",
  "Amarr",
  "Craftsman",
  "Genie",
  "Sommer",
  "Marantec",
  "Hörmann",
];

export const VALUE_PROPS = [
  {
    img: "/images/icon-247.png",
    title: "24/7 Statewide Service",
    body: "Available across Southern California, the Bay Area, Sacramento, the Central Valley, Central Coast, Northern California and Eastern California.",
    featured: true,
  },
  {
    img: "/images/icon-sameday.png",
    title: "Same-Day Emergency Response",
    body: "We dispatch the nearest available technician, with arrival times starting from approximately one hour depending on location.",
  },
  {
    img: "/images/icon-trucks.png",
    title: "Fully Stocked Service Trucks",
    body: "Our vehicles carry parts for most leading brands, allowing us to complete up to 90% of repairs during the first visit.",
  },
  {
    img: "/images/icon-rescom.png",
    title: "Residential & Commercial",
    body: "Repairs, installations, opener upgrades, spring replacement and complete garage door systems.",
  },
  {
    img: "/images/icon-estimate.png",
    title: "Transparent Upfront Estimates",
    body: "You receive a written, no-obligation estimate before work begins, with no hidden regional markups.",
  },
];

export const REGIONS = [
  "Los Angeles & Ventura",
  "Orange County",
  "San Diego",
  "Inland Empire",
  "Bay Area",
  "Sacramento",
  "Central Valley",
  "Central Coast",
  "Northern California",
];

export const POPULAR_CITIES = [
  "Los Angeles", "San Diego", "San Jose", "San Francisco",
  "Sacramento", "Fresno", "Oakland", "Bakersfield",
  "Anaheim", "Riverside", "Long Beach", "Stockton",
];

export const SERVICES = [
  {
    title: "24/7 Emergency Garage Door Repair",
    body: "Broken springs, off-track doors or a car stuck inside — we respond around the clock, statewide.",
    image: "/images/svc-emergency.jpg",
    alt: "Technician performing an emergency garage door repair at dusk",
    badge: "24/7",
    href: "#contact",
  },
  {
    title: "Garage Door Spring Repair & Replacement",
    body: "Torsion and extension spring replacement with correctly balanced, safety-rated hardware.",
    image: "/images/svc-spring.jpg",
    alt: "Close-up of a technician replacing a garage door torsion spring",
    href: "#contact",
  },
  {
    title: "Garage Door Opener Repair & Installation",
    body: "Diagnostics, repair and upgrades for LiftMaster, Genie, Chamberlain and smart Wi-Fi openers.",
    image: "/images/svc-opener.jpg",
    alt: "Technician installing a garage door opener on the ceiling",
    href: "#contact",
  },
  {
    title: "Garage Door Installation & Replacement",
    body: "New residential doors in steel, wood-look, glass and insulated styles from leading brands.",
    image: "/images/svc-install.jpg",
    alt: "Two technicians installing a new sectional garage door",
    href: "#contact",
  },
  {
    title: "Commercial Garage Door Repair",
    body: "Rolling steel, sectional and high-cycle commercial doors kept running for your business.",
    image: "/images/svc-commercial.jpg",
    alt: "Commercial rolling steel garage door being serviced",
    href: "#contact",
  },
  {
    title: "Garage Door Diagnostics & Maintenance",
    body: "25-point tune-ups that catch worn rollers, cables and sensors before they fail.",
    image: "/images/svc-maintenance.jpg",
    alt: "Technician inspecting a garage door with a tablet",
    href: "#contact",
  },
];

export const STEPS = [
  {
    title: "Schedule Your Inspection",
    body: "Call us or request an estimate online — day, night or weekend.",
  },
  {
    title: "25-Point On-Site Inspection",
    body: "Our technician checks the door, opener, springs, tracks, rollers and hardware in approximately 15–30 minutes.",
  },
  {
    title: "Receive a Clear Estimate",
    body: "You receive a detailed price breakdown before any work begins.",
  },
  {
    title: "Approve and Repair",
    body: "Once approved, most repairs can be completed during the same visit.",
  },
];

export const CA_PROBLEMS = [
  {
    id: "coastal",
    label: "Coastal Salt & Corrosion",
    icon: "Waves",
    image: "/images/region-coastal.jpg",
    alt: "Coastal Southern California home with a garage door near the ocean",
    regions: "San Diego · Long Beach · Huntington Beach · SF Bay shoreline",
    problems: [
      "Rust on hinges, springs, cables and brackets",
      "Squeaking or binding rollers",
      "Blistering and flaking lower panels",
    ],
    solution:
      "Galvanized tracks, stainless fasteners, sealed rollers, salt-resistant doors and preventative maintenance.",
  },
  {
    id: "valley",
    label: "Central Valley Heat",
    icon: "Sun",
    image: "/images/region-valley.jpg",
    alt: "Central Valley California ranch home under intense summer sun",
    regions: "Fresno · Bakersfield · Stockton · Modesto",
    problems: [
      "Fading and warped panels",
      "Overheating openers",
      "Cracked weather seals",
    ],
    solution:
      "Insulated lightweight doors, high-temperature openers, UV-resistant seals and properly balanced springs.",
  },
  {
    id: "bay",
    label: "Bay Area Fog & Moisture",
    icon: "CloudFog",
    image: "/images/region-bay.jpg",
    alt: "San Francisco Bay Area home with a garage door in morning fog",
    regions: "San Francisco · Oakland · Peninsula · Marin",
    problems: [
      "Surface rust",
      "Sensor failures after damp nights",
      "Doors sticking to bottom seals",
    ],
    solution:
      "Rust-inhibiting lubrication, protected wiring, sensor realignment, new seals and adjusted clearances.",
  },
  {
    id: "wildfire",
    label: "Wildfire Ash & Heat",
    icon: "Flame",
    image: "/images/region-wildfire.jpg",
    alt: "Sierra foothills California home under a smoky wildfire-season sky",
    regions: "Sierra foothills · Santa Ana Canyon · Santa Cruz Mountains · Wine Country",
    problems: [
      "Ash-clogged tracks",
      "Overheating openers",
      "Damaged panels and seals",
    ],
    solution:
      "Deep cleaning, heat protection, ember guards, reinforced seals and fire-rated door options.",
  },
];

export const TRUST_STATS = [
  { value: "5.0", label: "Google Rating", img: "/images/ic-google.png" },
  { value: "5.0", label: "Yelp Rating", img: "/images/ic-yelp.png" },
  { value: "20 yrs", label: "Experience", img: "/images/ic-experience.png" },
  { value: "#1077353", label: "CSLB Licensed", img: "/images/ic-cslb.png" },
  { value: "$2M", label: "Liability Coverage", img: "/images/ic-liability.png" },
  { value: "100%", label: "Satisfaction Guarantee", img: "/images/ic-satisfaction.png" },
];

export const REVIEWS = [
  {
    name: "Marisol R.",
    avatar: "/images/avatar-marisol.jpg",
    city: "Long Beach, CA",
    rating: 5,
    source: "Google",
    job: "Spring replacement",
    text: "My garage door slammed shut on a Sunday morning and CGR had a technician out within the hour. Replaced both springs, tested everything and the price matched the estimate exactly. (Replace with verified review)",
  },
  {
    name: "Andrew P.",
    avatar: "/images/avatar-andrew.jpg",
    city: "San Jose, CA",
    rating: 5,
    source: "Yelp",
    job: "Opener installation",
    text: "Upgraded us to a quiet Wi-Fi opener. Clean install, walked us through the app, no upsell pressure at all. Genuinely the most professional home-service visit we've had. (Replace with verified review)",
  },
  {
    name: "Denise K.",
    avatar: "/images/avatar-denise.jpg",
    city: "Fresno, CA",
    rating: 5,
    source: "Google",
    job: "Full door replacement",
    text: "Our old door was warped from the valley heat. The new insulated door looks incredible and the garage stays noticeably cooler. Fair, fast and tidy. (Replace with verified review)",
  },
  {
    name: "Robert M.",
    avatar: "/images/avatar-robert.jpg",
    city: "San Diego, CA",
    rating: 5,
    source: "Yelp",
    job: "Track repair",
    text: "Salt air had rusted our rollers and the door was grinding. They swapped to sealed rollers and galvanized hardware and explained how to keep it that way. Highly recommend. (Replace with verified review)",
  },
  {
    name: "Priya S.",
    avatar: "/images/avatar-priya.jpg",
    city: "Oakland, CA",
    rating: 5,
    source: "Google",
    job: "Sensor & maintenance",
    text: "Door wouldn't close after a foggy week. Turned out to be misaligned sensors and damp wiring. Fixed in 30 minutes and did a full tune-up. Transparent the whole time. (Replace with verified review)",
  },
  {
    name: "Chris & Dana T.",
    avatar: "/images/avatar-chris.jpg",
    city: "Sacramento, CA",
    rating: 5,
    source: "Google",
    job: "Commercial door",
    text: "We run an auto shop and a stuck bay door costs us money. CGR got it moving same day and set us up on a maintenance plan. Reliable and responsive. (Replace with verified review)",
  },
];

export const VIDEO_TESTIMONIALS = [
  { name: "The Alvarez Family", city: "Pasadena, CA", duration: "1:24", poster: "/images/project-carriage.jpg" },
  { name: "Marina B.", city: "San Francisco, CA", duration: "0:58", poster: "/images/region-bay.jpg" },
  { name: "Highland Auto", city: "Riverside, CA", duration: "2:06", poster: "/images/project-commercial.jpg" },
];

export const WHY_CHOOSE = [
  "20 years of garage door experience since 2006",
  "California CSLB license #1077353",
  "Service for all major garage door brands",
  "$2M general liability insurance",
  "Full workers' compensation coverage",
  "Limited lifetime warranty on new installations",
  "100% satisfaction guarantee",
  "DASMA and ANSI-aligned service standards",
  "Background-checked technicians",
  "Factory-trained professionals",
  "Service vehicles stocked with OEM-quality parts",
  "Same-visit repair capability",
];

export const TECHNICIANS = [
  { name: "Dante Ayala", role: "Garage Door Technician", region: "Los Angeles Metro", image: "/images/tech-dante.jpg", badge: "Background Checked" },
  { name: "David Kipperman", role: "Gate Installation Specialist", region: "Bay Area", image: "/images/tech-david.jpg", badge: "Factory Trained" },
  { name: "Keith Brandon", role: "Gate Installation Specialist", region: "San Diego", image: "/images/tech-keith.jpg", badge: "Background Checked" },
  { name: "Dillon Figueroa", role: "Garage Door Technician", region: "Central Valley", image: "/images/tech-dillon.jpg", badge: "Factory Trained" },
  { name: "Reed Levy", role: "Technical Director", region: "Statewide", image: "/images/tech-reed.jpg", badge: "Factory Trained" },
];

export const PROJECTS = [
  { title: "Modern Steel & Glass Replacement", city: "Irvine, CA", service: "Full garage door replacement", door: "Modern aluminum & glass", result: "Complete curb-appeal transformation in one day.", category: "Installations", image: "/images/project-modern.jpg" },
  { title: "Automatic Driveway Gate & Motor", city: "Calabasas, CA", service: "Gate motor installation", door: "Swing gate operator", result: "Smooth, quiet automated entry with keypad access.", category: "Gates", image: "/images/project-gate.jpg" },
  { title: "Carriage-Style Door Install", city: "Pasadena, CA", service: "Garage door installation", door: "Insulated carriage-house", result: "Classic look with modern insulation and a quiet opener.", category: "Installations", image: "/images/project-carriage.jpg" },
  { title: "Commercial Bay Door Service", city: "Riverside, CA", service: "Commercial garage door repair", door: "Sectional commercial", result: "Business back up and running the same afternoon.", category: "Commercial", image: "/images/project-commercial.jpg" },
  { title: "Emergency Spring Repair", city: "Long Beach, CA", service: "Spring replacement", door: "Steel sectional", result: "Both torsion springs replaced within the hour.", category: "Repairs", image: "/images/svc-spring.jpg" },
  { title: "Opener Upgrade & Tracks", city: "San Jose, CA", service: "Opener installation", door: "Belt-drive Wi-Fi opener", result: "Quiet operation and smartphone control.", category: "Repairs", image: "/images/svc-opener.jpg" },
];

export const PROJECT_FILTERS = ["All", "Repairs", "Installations", "Commercial", "Gates"];

export const FAQS = [
  {
    q: "How much does garage door repair cost in California?",
    a: "Garage door repair costs in California typically range from $150 to $600, depending on the mechanical issue and required parts. Minor work such as sensor alignment or track cleaning may cost approximately $75–$150, while torsion spring or motor replacement may range from $300–$800.\n\nPricing can vary by location, parts and labor. Coastal markets such as Los Angeles and San Francisco may be 20–30% more expensive than inland areas.\n\nCalifornia Garage Door Repair provides a clear estimate before any work begins.",
    note: "Pricing is provided for general reference only. Final cost depends on inspection, parts and site conditions.",
  },
  {
    q: "Is it cheaper to repair or replace a garage door?",
    a: "In most cases a targeted repair — such as a spring, roller or opener fix — is far more cost-effective than replacement. We recommend full replacement only when a door is structurally damaged, badly corroded or beyond safe operation. Your written estimate will lay out both options so you can decide.",
  },
  {
    q: "What are your service hours?",
    a: "We operate 24 hours a day, 7 days a week, including weekends and holidays, across California. Emergency dispatch is always available at (818) 369-8144.",
  },
  {
    q: "Why is it dangerous to replace garage door springs yourself?",
    a: "Garage door springs are under extreme tension and store enough energy to cause serious injury if they release unexpectedly. Proper replacement requires winding bars, correctly rated springs and trained technique. Our technicians are factory-trained and fully insured to do this safely.",
  },
  {
    q: "Does homeowner's insurance cover garage door repairs?",
    a: "It depends on the cause. Damage from a covered event such as a storm, vehicle impact or vandalism is often eligible, while normal wear and tear typically is not. We can provide detailed documentation and photos to support an insurance claim.",
  },
  {
    q: "Which garage door brands do you service?",
    a: "We service all major brands, including C.H.I., Clopay, LiftMaster, Amarr, Craftsman, Genie, Sommer, Marantec and Hörmann, along with most opener and gate systems.",
  },
  {
    q: "How long does a garage door repair usually take?",
    a: "Most common repairs are completed within 45 minutes to 2 hours on the same visit, thanks to our fully stocked service trucks. Larger installations may be scheduled for a dedicated appointment.",
  },
  {
    q: "Where can I find garage door service near me?",
    a: "We serve homes and businesses statewide — from Los Angeles, San Diego and Orange County to the Bay Area, Sacramento and the Central Valley. Enter your ZIP code above to confirm availability and find your nearest technician.",
  },
];

export const FOOTER_LINKS = {
  Company: ["About Us", "Reviews", "Our Technicians", "Recent Projects", "Contact"],
  Services: ["Emergency Repair", "Spring Repair", "Opener Repair", "Garage Door Installation", "Commercial Repair", "Gate Services"],
  "Service Areas": ["Los Angeles", "San Diego", "San Francisco", "San Jose", "Sacramento", "Fresno", "Oakland", "View All Cities"],
};

export const SERVICE_OPTIONS = [
  "Emergency Repair",
  "Spring Repair or Replacement",
  "Opener Repair or Installation",
  "New Door Installation",
  "Commercial Door Service",
  "Gate Service",
  "Maintenance / Tune-Up",
  "Not Sure — Need Diagnosis",
];
