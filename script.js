/**
 * CampusBazaar — High-Performance Student-to-Student Marketplace
 * Optimized for Instant Response, Zero-Lag Scrolling & 60+ FPS
 */

// ==================== INITIAL SEED DATA (OPTIMIZED IMAGE DIMENSIONS) ====================
const INITIAL_ITEMS = [
  {
    id: "item-1",
    title: "Calculus: Early Transcendentals (8th Edition)",
    author: "James Stewart",
    category: "books",
    dealType: "sale",
    priceINR: 480,
    retailINR: 1850,
    priceUSD: 18,
    retailUSD: 85,
    condition: "Like New",
    courseCode: "MATH-201",
    department: "engineering",
    campus: "main",
    pickupLocation: "Central Library 2nd Floor",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=70",
    description: "Hardcover 8th Edition. Absolutely clean pages with zero pen marks or highlighter stains. Comes with clean single-variable & multivariable problem sets. Perfect for 1st & 2nd year engineering and math majors.",
    seller: {
      name: "Arjun Venkat",
      major: "3rd Year Mechanical",
      campus: "Main Campus",
      rating: 4.9,
      reviewsCount: 18,
      verifiedId: true,
      phone: "+91 98451 22340",
      avatar: "👨‍🎓",
      responseTime: "under 5 mins"
    },
    featured: true,
    tags: ["Calculus", "Stewart", "Math", "Engineering", "Semester 3"],
    createdAt: Date.now() - 3600000 * 2
  },
  {
    id: "item-2",
    title: "Casio fx-991EX ClassWiz Scientific Calculator",
    author: "Casio Japan",
    category: "calculators",
    dealType: "sale",
    priceINR: 850,
    retailINR: 1695,
    priceUSD: 32,
    retailUSD: 65,
    condition: "Like New",
    courseCode: "ENGG-101",
    department: "engineering",
    campus: "engineering",
    pickupLocation: "Student Union / Nescafe Kiosk",
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=400&q=70",
    description: "Legendary high-resolution natural textbook display with 552 functions, matrix, equation solver, and QR code visualization. Includes original hard slide cover. Dual power (solar + battery) working at 100%. Exam syllabus legal for all university and GATE exams.",
    seller: {
      name: "Rhea Sen",
      major: "4th Year Electrical",
      campus: "College of Engineering",
      rating: 5.0,
      reviewsCount: 31,
      verifiedId: true,
      phone: "+91 98112 34981",
      avatar: "👩‍🔬",
      responseTime: "under 3 mins"
    },
    featured: true,
    tags: ["Casio", "fx-991EX", "Scientific Calculator", "ClassWiz", "Exam Approved"],
    createdAt: Date.now() - 3600000 * 4
  },
  {
    id: "item-3",
    title: "Staedtler Architectural Complete Drafting Set + T-Square",
    author: "Staedtler Mars",
    category: "stationery",
    dealType: "exchange",
    priceINR: 0,
    retailINR: 1750,
    priceUSD: 0,
    retailUSD: 60,
    condition: "Very Good",
    courseCode: "ARCH-101",
    department: "architecture",
    campus: "main",
    pickupLocation: "Architecture Studio Block C",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=70",
    description: "Full precision drawing set: Master compass with extension bar, dividers, 24-inch wooden acrylic edge T-Square, set squares (45° and 60°), and drafting tape. Open for direct exchange for an Organic Chemistry Molecular Model Kit or good technical fineliners!",
    seller: {
      name: "Kabir Malhotra",
      major: "2nd Year Architecture",
      campus: "Main Campus",
      rating: 4.8,
      reviewsCount: 12,
      verifiedId: true,
      phone: "+91 97120 44821",
      avatar: "👨‍🎨",
      responseTime: "under 15 mins"
    },
    featured: true,
    tags: ["Stationery", "Drafting Kit", "T-Square", "Architecture", "Exchange", "Barter"],
    createdAt: Date.now() - 3600000 * 8
  },
  {
    id: "item-4",
    title: "Texas Instruments TI-84 Plus CE Color Graphing Calculator",
    author: "Texas Instruments",
    category: "calculators",
    dealType: "sale",
    priceINR: 2800,
    retailINR: 9500,
    priceUSD: 95,
    retailUSD: 150,
    condition: "Like New",
    courseCode: "STAT-302",
    department: "business",
    campus: "business",
    pickupLocation: "Business School Atrium",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=70",
    description: "High-resolution backlit color screen with rechargeable battery that holds charge for weeks. Includes original USB charging cable and snap-on protective cover. Approved for AP, SAT, ACT, and university business finance/statistics courses.",
    seller: {
      name: "Aditya Roy",
      major: "MBA Finance (2nd Yr)",
      campus: "Business School",
      rating: 4.9,
      reviewsCount: 15,
      verifiedId: true,
      phone: "+91 99001 88720",
      avatar: "👨‍💼",
      responseTime: "under 10 mins"
    },
    featured: false,
    tags: ["TI-84", "Graphing Calculator", "Texas Instruments", "Statistics", "Finance"],
    createdAt: Date.now() - 3600000 * 12
  },
  {
    id: "item-5",
    title: "Gray's Anatomy for Students (South Asia 4th Edition)",
    author: "Richard Drake & Wayne Vogl",
    category: "books",
    dealType: "sale",
    priceINR: 1150,
    retailINR: 3800,
    priceUSD: 42,
    retailUSD: 140,
    condition: "Very Good",
    courseCode: "MED-101",
    department: "medical",
    campus: "medical",
    pickupLocation: "Medical College Gate / Cafeteria",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=70",
    description: "Gold-standard anatomy text. Clean binding with all neurovascular and osteology color diagrams in pristine shape. Light yellow highlighters on only 2 thorax chapters. Saved me during 1st professional MBBS exams!",
    seller: {
      name: "Dr. Neil Khosla",
      major: "MBBS Intern",
      campus: "Medical Campus",
      rating: 5.0,
      reviewsCount: 27,
      verifiedId: true,
      phone: "+91 98109 77651",
      avatar: "🩺",
      responseTime: "under 20 mins"
    },
    featured: false,
    tags: ["Medical", "Anatomy", "Grays Anatomy", "MBBS", "Textbook"],
    createdAt: Date.now() - 3600000 * 18
  },
  {
    id: "item-6",
    title: "Organic Chemistry (3rd Edition) - Klein",
    author: "David R. Klein",
    category: "books",
    dealType: "sale",
    priceINR: 590,
    retailINR: 2400,
    priceUSD: 24,
    retailUSD: 110,
    condition: "Good",
    courseCode: "CHEM-201",
    department: "engineering",
    campus: "main",
    pickupLocation: "Science Block Quadrangle",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=70",
    description: "Famous for 'Organic Chemistry as a Second Language' style explanations. Reaction mechanisms clearly broken down. Has neat margin notes explaining resonance and electrophilic aromatic substitution.",
    seller: {
      name: "Pooja Deshmukh",
      major: "3rd Year Chemical Eng",
      campus: "Main Campus",
      rating: 4.8,
      reviewsCount: 19,
      verifiedId: true,
      phone: "+91 97654 32190",
      avatar: "👩‍🎓",
      responseTime: "under 8 mins"
    },
    featured: false,
    tags: ["Chemistry", "Organic", "Klein", "STEM", "Reaction Mechanisms"],
    createdAt: Date.now() - 3600000 * 24
  },
  {
    id: "item-7",
    title: "Rotring Isograph Technical Pens Master Set (0.2, 0.3, 0.5)",
    author: "Rotring Germany",
    category: "stationery",
    dealType: "sale",
    priceINR: 750,
    retailINR: 2600,
    priceUSD: 28,
    retailUSD: 90,
    condition: "Like New",
    courseCode: "CIVIL-102",
    department: "engineering",
    campus: "engineering",
    pickupLocation: "Civil Engineering Workshop Entrance",
    image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=400&q=70",
    description: "German high-precision capillary refill technical drawing pens. Completely ultrasonic cleaned nibs with zero dried ink clogging. Comes with original case and 23ml black waterproof drawing ink bottle.",
    seller: {
      name: "Samarth Nair",
      major: "4th Year Civil Eng",
      campus: "College of Engineering",
      rating: 4.9,
      reviewsCount: 14,
      verifiedId: true,
      phone: "+91 98220 11984",
      avatar: "👨‍🔧",
      responseTime: "under 10 mins"
    },
    featured: false,
    tags: ["Rotring", "Technical Pens", "Drafting", "Civil", "Stationery"],
    createdAt: Date.now() - 3600000 * 30
  },
  {
    id: "item-8",
    title: "Casio fx-82MS 2nd Gen Scientific Calculator",
    author: "Casio",
    category: "calculators",
    dealType: "sale",
    priceINR: 290,
    retailINR: 650,
    priceUSD: 11,
    retailUSD: 25,
    condition: "Good",
    courseCode: "GEN-101",
    department: "general",
    campus: "north",
    pickupLocation: "North Campus Hostel 4 Common Room",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=400&q=70",
    description: "Reliable 2-line display scientific calculator with 240 functions. Brand new Duracell battery inserted last week. Sliding plastic case in good condition. Standard model permitted in strict non-programmable exam halls.",
    seller: {
      name: "Tanmay Rao",
      major: "2nd Year Computer Science",
      campus: "North Campus",
      rating: 4.7,
      reviewsCount: 9,
      verifiedId: true,
      phone: "+91 99118 76543",
      avatar: "👨‍💻",
      responseTime: "under 5 mins"
    },
    featured: false,
    tags: ["Casio", "fx-82MS", "Budget Calculator", "Exams", "North Campus"],
    createdAt: Date.now() - 3600000 * 36
  },
  {
    id: "item-9",
    title: "Molecular Model Kit for Organic & Inorganic Chemistry (240 Pcs)",
    author: "Oldham Scientific",
    category: "stationery",
    dealType: "exchange",
    priceINR: 0,
    retailINR: 950,
    priceUSD: 0,
    retailUSD: 35,
    condition: "Like New",
    courseCode: "CHEM-102",
    department: "engineering",
    campus: "main",
    pickupLocation: "Chemistry Dept Lobby",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=70",
    description: "Complete 240-piece ball-and-stick ball model kit with bond removal tool. All carbon, oxygen, nitrogen, and hydrogen atoms accounted for. Will swap for semester 4 algorithms notes or a Casio scientific calculator!",
    seller: {
      name: "Sana Farooqui",
      major: "2nd Year BioTech",
      campus: "Main Campus",
      rating: 4.9,
      reviewsCount: 16,
      verifiedId: true,
      phone: "+91 98114 99012",
      avatar: "👩‍🔬",
      responseTime: "under 6 mins"
    },
    featured: false,
    tags: ["Chemistry", "Molecular Kit", "Lab Tools", "Exchange", "Barter"],
    createdAt: Date.now() - 3600000 * 42
  },
  {
    id: "item-10",
    title: "Cracking the Coding Interview (6th Edition - 189 Problems)",
    author: "Gayle Laakmann McDowell",
    category: "books",
    dealType: "sale",
    priceINR: 390,
    retailINR: 1100,
    priceUSD: 15,
    retailUSD: 40,
    condition: "Like New",
    courseCode: "CS-304",
    department: "engineering",
    campus: "engineering",
    pickupLocation: "Computer Science Dept Lab 3",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=400&q=70",
    description: "The bible for tech placement prep & FAANG coding interviews. Covers Big-O, Data Structures, Algorithms, Dynamic Programming, and System Design. Crisp pages, no highlights.",
    seller: {
      name: "Varun Shenoy",
      major: "4th Year Computer Science",
      campus: "College of Engineering",
      rating: 5.0,
      reviewsCount: 42,
      verifiedId: true,
      phone: "+91 98450 11234",
      avatar: "👨‍💻",
      responseTime: "under 2 mins"
    },
    featured: true,
    tags: ["Coding", "Algorithms", "CS", "Placement Prep", "Tech Interview"],
    createdAt: Date.now() - 3600000 * 48
  },
  {
    id: "item-11",
    title: "HP 10bII+ Financial Calculator (TVM, IRR, Bond Amortization)",
    author: "Hewlett Packard",
    category: "calculators",
    dealType: "sale",
    priceINR: 1100,
    retailINR: 3200,
    priceUSD: 42,
    retailUSD: 110,
    condition: "Like New",
    courseCode: "FIN-201",
    department: "business",
    campus: "business",
    pickupLocation: "Business School Library",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=70",
    description: "Essential for corporate finance, MBA, and CFA candidates. Fast Time Value of Money (TVM), net present value (NPV), cash flows, and loan schedules. Clear screen, comes with padded leatherette slip case.",
    seller: {
      name: "Meera Krishnan",
      major: "2nd Year MBA",
      campus: "Business School",
      rating: 4.9,
      reviewsCount: 22,
      verifiedId: true,
      phone: "+91 97890 55432",
      avatar: "👩‍💼",
      responseTime: "under 12 mins"
    },
    featured: false,
    tags: ["HP", "Financial Calculator", "Finance", "MBA", "CFA"],
    createdAt: Date.now() - 3600000 * 54
  },
  {
    id: "item-12",
    title: "A3 Portable Drawing Board with Parallel Ruler & Clips",
    author: "Omega Drafting Supplies",
    category: "stationery",
    dealType: "sale",
    priceINR: 550,
    retailINR: 1800,
    priceUSD: 20,
    retailUSD: 65,
    condition: "Good",
    courseCode: "MECH-102",
    department: "engineering",
    campus: "main",
    pickupLocation: "Engineering Central Lawn",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=70",
    description: "Smooth magnetic drafting board with lockable parallel sliding straightedge ruler, paper clamp strip, and adjustable tilt feet. Indispensable for Engineering Graphics & CAD foundation.",
    seller: {
      name: "Rohan Mittal",
      major: "3rd Year Mechanical",
      campus: "Main Campus",
      rating: 4.8,
      reviewsCount: 11,
      verifiedId: true,
      phone: "+91 98111 67890",
      avatar: "👨‍🎓",
      responseTime: "under 15 mins"
    },
    featured: false,
    tags: ["Drawing Board", "Drafting", "Engineering Graphics", "Stationery"],
    createdAt: Date.now() - 3600000 * 60
  },
  {
    id: "item-13",
    title: "Kokuyo Campus Notebooks + Zebra Gel Pens (Senior Freebie)",
    author: "Kokuyo Japan",
    category: "stationery",
    dealType: "free",
    priceINR: 0,
    retailINR: 450,
    priceUSD: 0,
    retailUSD: 15,
    condition: "Like New",
    courseCode: "GEN-001",
    department: "general",
    campus: "north",
    pickupLocation: "North Campus Library Lawn",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=70",
    description: "Graduating senior giveaway! 3 unused Kokuyo dot-grid notebooks and a pack of 4 black Zebra Sarasa 0.5mm gel pens. Completely free to any fresher who needs stationery for midterm tests.",
    seller: {
      name: "Deepika Raman",
      major: "Graduating Senior (English Hons)",
      campus: "North Campus",
      rating: 5.0,
      reviewsCount: 38,
      verifiedId: true,
      phone: "+91 99887 66554",
      avatar: "👩‍🎓",
      responseTime: "under 5 mins"
    },
    featured: false,
    tags: ["Free", "Giveaway", "Stationery", "Notebooks", "Fresher"],
    createdAt: Date.now() - 3600000 * 70
  },
  {
    id: "item-14",
    title: "Sakura Pigma Micron Technical Fineliner Pens (Set of 8 - 0.05 to 0.8mm + Brush)",
    author: "Sakura Japan",
    category: "stationery",
    dealType: "sale",
    priceINR: 420,
    retailINR: 950,
    priceUSD: 15,
    retailUSD: 35,
    condition: "Like New",
    courseCode: "BIO-101",
    department: "medical",
    campus: "medical",
    pickupLocation: "Biology / Anatomy Lab Porch",
    image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=400&q=70",
    description: "Archival pigment ink fineliners. Completely waterproof, smudge-proof, and chemical-resistant. Mandatory in universities for biology microscope record diagrams, histological sketches, and architecture line weights. All nibs sharp.",
    seller: {
      name: "Shruti Hegde",
      major: "3rd Year Biotechnology",
      campus: "Medical Campus",
      rating: 4.9,
      reviewsCount: 20,
      verifiedId: true,
      phone: "+91 98440 33219",
      avatar: "👩‍🔬",
      responseTime: "under 6 mins"
    },
    featured: true,
    tags: ["Pens", "Sakura Micron", "Fineliners", "Biology Diagrams", "Stationery"],
    createdAt: Date.now() - 3600000 * 5
  },
  {
    id: "item-15",
    title: "Rotring 600 Full Metal Drafting Mechanical Pencil (0.5mm Matte Black)",
    author: "Rotring Germany",
    category: "stationery",
    dealType: "sale",
    priceINR: 650,
    retailINR: 1850,
    priceUSD: 24,
    retailUSD: 55,
    condition: "Like New",
    courseCode: "MECH-101",
    department: "engineering",
    campus: "engineering",
    pickupLocation: "Mechanical Workshop Quad",
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=400&q=70",
    description: "The gold standard engineering drafting pencil. Solid knurled brass grip, hexagonal non-roll barrel, and fixed 4mm lead sleeve for ruler work without breaking lead. Includes 2 full packs of Pentel Ain Stein 2B leads.",
    seller: {
      name: "Karan Joharwal",
      major: "4th Year Mechanical",
      campus: "College of Engineering",
      rating: 5.0,
      reviewsCount: 34,
      verifiedId: true,
      phone: "+91 97110 88231",
      avatar: "👨‍🔧",
      responseTime: "under 4 mins"
    },
    featured: true,
    tags: ["Pencil", "Rotring 600", "Mechanical Pencil", "Drafting", "Engineering"],
    createdAt: Date.now() - 3600000 * 7
  },
  {
    id: "item-16",
    title: "Pentel GraphGear 1000 Drafting Pencil Trio (0.3mm, 0.5mm, 0.7mm Set)",
    author: "Pentel",
    category: "stationery",
    dealType: "exchange",
    priceINR: 0,
    retailINR: 2400,
    priceUSD: 0,
    retailUSD: 65,
    condition: "Very Good",
    courseCode: "CIVIL-201",
    department: "engineering",
    campus: "main",
    pickupLocation: "Central Library Steps",
    image: "https://images.unsplash.com/photo-1585336261026-77882269c36d?auto=format&fit=crop&w=400&q=70",
    description: "Dual-action pocket safe retractor mechanism with chiseled metallic grip inlaid with soft latex-free pads. Complete set of 3 sizes with built-in lead grade indicators (B, HB, H, 2H). Open for exchange with a Casio scientific calculator or Stewart Calculus!",
    seller: {
      name: "Pranav Nair",
      major: "3rd Year Civil Engineering",
      campus: "Main Campus",
      rating: 4.8,
      reviewsCount: 17,
      verifiedId: true,
      phone: "+91 98115 66723",
      avatar: "👨‍🎓",
      responseTime: "under 10 mins"
    },
    featured: false,
    tags: ["Pencils", "GraphGear 1000", "Drafting Pencil", "Exchange", "Barter"],
    createdAt: Date.now() - 3600000 * 14
  },
  {
    id: "item-17",
    title: "Uni-ball Eye (UB-150 Micro 0.5mm) Exam Pens (Box of 12 - Blue & Black)",
    author: "Uni-ball Mitsubishi",
    category: "stationery",
    dealType: "sale",
    priceINR: 290,
    retailINR: 660,
    priceUSD: 10,
    retailUSD: 22,
    condition: "Like New",
    courseCode: "UNIV-EXAMS",
    department: "general",
    campus: "main",
    pickupLocation: "Student Center Stationery Desk",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=70",
    description: "The undisputed champion for university written exams. Super Ink pigment is waterproof, tamper-proof, and guarantees zero bleed-through on porous college exam paper during 3-hour tests. 8 Blue + 4 Black brand new sealed pens.",
    seller: {
      name: "Ananya Iyer",
      major: "2nd Year Economics",
      campus: "Main Campus",
      rating: 4.9,
      reviewsCount: 25,
      verifiedId: true,
      phone: "+91 99201 44556",
      avatar: "👩‍💼",
      responseTime: "under 5 mins"
    },
    featured: true,
    tags: ["Pens", "Uni-ball Eye", "Exam Pens", "Waterproof Ink", "Stationery"],
    createdAt: Date.now() - 3600000 * 16
  },
  {
    id: "item-18",
    title: "Staedtler Mars 780 Technical 2mm Lead Holder Clutch Pencil + Mars 502 Rotary Tub Sharpener",
    author: "Staedtler Mars",
    category: "stationery",
    dealType: "sale",
    priceINR: 480,
    retailINR: 1250,
    priceUSD: 18,
    retailUSD: 42,
    condition: "Like New",
    courseCode: "ARCH-102",
    department: "architecture",
    campus: "main",
    pickupLocation: "Architecture Studio Lobby",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=400&q=70",
    description: "Classic drafting lead holder with ribbed metal finger grip and push-button drop clutch. Comes with the desk rotary Mars 502 lead pointer tub for sharpening 2mm leads to needle points with automatic measurement stops.",
    seller: {
      name: "Dhruv Saxena",
      major: "3rd Year Architecture",
      campus: "Main Campus",
      rating: 4.9,
      reviewsCount: 13,
      verifiedId: true,
      phone: "+91 98332 11094",
      avatar: "👨‍🎨",
      responseTime: "under 8 mins"
    },
    featured: false,
    tags: ["Pencil", "Staedtler Mars 780", "Lead Holder", "Clutch Pencil", "Architecture"],
    createdAt: Date.now() - 3600000 * 22
  },
  {
    id: "item-19",
    title: "Pilot G2 Premium Retractable Gel Pens (Pack of 10 - 0.7mm) + 6 Extra Refills",
    author: "Pilot Japan",
    category: "stationery",
    dealType: "sale",
    priceINR: 320,
    retailINR: 750,
    priceUSD: 11,
    retailUSD: 25,
    condition: "Like New",
    courseCode: "GEN-200",
    department: "general",
    campus: "north",
    pickupLocation: "North Campus Nescafe",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=70",
    description: "Top-rated comfort grip gel pens for continuous lecture note taking without hand cramps. 6 Deep Blue and 4 Black pens plus 6 genuine Pilot G2 refills. Smooth ink flow with zero skipping.",
    seller: {
      name: "Tanya Kapoor",
      major: "2nd Year Psychology",
      campus: "North Campus",
      rating: 4.8,
      reviewsCount: 14,
      verifiedId: true,
      phone: "+91 98119 22345",
      avatar: "👩‍🎓",
      responseTime: "under 10 mins"
    },
    featured: false,
    tags: ["Pens", "Pilot G2", "Gel Pens", "Note Taking", "Stationery"],
    createdAt: Date.now() - 3600000 * 26
  },
  {
    id: "item-20",
    title: "Stabilo Boss Original Pastel Highlighters (Set of 8) + 3 Index Tab Flags",
    author: "Stabilo Germany",
    category: "stationery",
    dealType: "sale",
    priceINR: 220,
    retailINR: 580,
    priceUSD: 8,
    retailUSD: 20,
    condition: "Like New",
    courseCode: "LAW-101",
    department: "business",
    campus: "business",
    pickupLocation: "Law & Business Faculty Canteen",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=70",
    description: "Gentle pastel shades (Milky Yellow, Touch of Turquoise, Lilac Haze, Hint of Mint, Creamy Peach) that don't bleed through thin law casebook pages or textbook sheets. Anti-dry-out technology. Includes 3 clear sticky index marker pads.",
    seller: {
      name: "Ishaan Mehta",
      major: "4th Year BA LLB (Law)",
      campus: "Business School",
      rating: 4.9,
      reviewsCount: 21,
      verifiedId: true,
      phone: "+91 98200 77612",
      avatar: "👨‍⚖️",
      responseTime: "under 7 mins"
    },
    featured: false,
    tags: ["Highlighters", "Stabilo Boss", "Pastel", "Law", "Study Kit"],
    createdAt: Date.now() - 3600000 * 32
  },
  {
    id: "item-21",
    title: "12-Inch Solid Anodized Aluminum Triangular Engineering Scale Ruler",
    author: "Pacific Drafting",
    category: "stationery",
    dealType: "sale",
    priceINR: 250,
    retailINR: 750,
    priceUSD: 9,
    retailUSD: 26,
    condition: "Like New",
    courseCode: "CIVIL-101",
    department: "engineering",
    campus: "engineering",
    pickupLocation: "Civil Engineering Department Lawn",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=70",
    description: "Solid matte aluminum three-sided architect scale ruler with laser-etched metric imperial ratios (1:100, 1:200, 1:250, 1:300, 1:400, 1:500). Color coded grooves. Won't warp or dent like plastic rulers.",
    seller: {
      name: "Rajesh Soni",
      major: "2nd Year Civil Engineering",
      campus: "College of Engineering",
      rating: 4.8,
      reviewsCount: 10,
      verifiedId: true,
      phone: "+91 98451 99088",
      avatar: "👨‍🔧",
      responseTime: "under 12 mins"
    },
    featured: false,
    tags: ["Scale Ruler", "Triangular Scale", "Drafting", "Civil", "Engineering Tools"],
    createdAt: Date.now() - 3600000 * 38
  },
  {
    id: "item-22",
    title: "Helix French Curves (3-Piece) & 40cm Flexible Vinyl Spline Curve Ruler",
    author: "Helix Oxford",
    category: "stationery",
    dealType: "exchange",
    priceINR: 0,
    retailINR: 650,
    priceUSD: 0,
    retailUSD: 22,
    condition: "Like New",
    courseCode: "MATH-102",
    department: "engineering",
    campus: "main",
    pickupLocation: "Math Dept Atrium",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=70",
    description: "Set of 3 smoke-tinted optical acrylic French curves with double-sided inking bevels, plus an adjustable metal-core flexible spline curve ruler for plotting calculus graphs, machine cams, and stream lines. Open for exchange with mechanical pencils or fineliners!",
    seller: {
      name: "Saurabh Tyagi",
      major: "2nd Year Aerospace Eng",
      campus: "Main Campus",
      rating: 4.7,
      reviewsCount: 8,
      verifiedId: true,
      phone: "+91 97118 33412",
      avatar: "👨‍🎓",
      responseTime: "under 15 mins"
    },
    featured: false,
    tags: ["French Curves", "Flexible Ruler", "Calculus Graphs", "Exchange", "Barter"],
    createdAt: Date.now() - 3600000 * 45
  },
  {
    id: "item-23",
    title: "Clinical 4-Color Charting Pens (2x) + Medical Diagnostic LED Penlight with Pupil Gauge",
    author: "ADC Medical",
    category: "stationery",
    dealType: "sale",
    priceINR: 190,
    retailINR: 550,
    priceUSD: 7,
    retailUSD: 18,
    condition: "Like New",
    courseCode: "NURS-201",
    department: "medical",
    campus: "medical",
    pickupLocation: "Teaching Hospital Nursing Lounge",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=70",
    description: "Hospital rotation essential: 2 four-color click pens (Black, Blue, Red, Green) for patient vitals, medication sheets and nurse charting, paired with an aluminum diagnostic medical penlight with millimeter pupil gauge and pocket clip.",
    seller: {
      name: "Aparna Nair",
      major: "B.Sc Nursing (3rd Yr)",
      campus: "Medical Campus",
      rating: 5.0,
      reviewsCount: 29,
      verifiedId: true,
      phone: "+91 98108 55410",
      avatar: "🩺",
      responseTime: "under 5 mins"
    },
    featured: false,
    tags: ["Pens", "Medical Penlight", "4 Color Pen", "Clinical Charting", "Nursing"],
    createdAt: Date.now() - 3600000 * 50
  },
  {
    id: "item-24",
    title: "University Exam Clear Pouch Kit (Pencils, Erasers, Sharpener, Steel Ruler)",
    author: "Faber-Castell & Apsara",
    category: "stationery",
    dealType: "free",
    priceINR: 0,
    retailINR: 350,
    priceUSD: 0,
    retailUSD: 12,
    condition: "Brand New",
    courseCode: "GEN-100",
    department: "general",
    campus: "north",
    pickupLocation: "North Campus Main Gate Security Office",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=400&q=70",
    description: "Free senior donation kit for freshers! Clear transparent zipper pouch (strictly required in university exam halls), 6 sharpened 2B drawing pencils, 2 dust-free erasers, metal sharpener, and a 30cm shatterproof steel ruler.",
    seller: {
      name: "Divya Goswami",
      major: "Final Year Chemistry (Hostel 2)",
      campus: "North Campus",
      rating: 5.0,
      reviewsCount: 45,
      verifiedId: true,
      phone: "+91 99112 33445",
      avatar: "👩‍🎓",
      responseTime: "under 3 mins"
    },
    featured: false,
    tags: ["Free", "Pencils", "Exam Kit", "Senior Donation", "Fresher"],
    createdAt: Date.now() - 3600000 * 58
  },
  {
    id: "item-25",
    title: "Carbon-Copy Duplicate Engineering & Chemistry Lab Notebook (100 Numbered Grid Pages)",
    author: "Hayden-McNeil",
    category: "stationery",
    dealType: "sale",
    priceINR: 180,
    retailINR: 420,
    priceUSD: 6,
    retailUSD: 14,
    condition: "Like New",
    courseCode: "CHEM-LAB",
    department: "engineering",
    campus: "main",
    pickupLocation: "Chemistry Lab Ground Floor",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=400&q=70",
    description: "Official laboratory spiral notebook with alternating yellow carbonless duplicate sheets that tear out for professor grading while keeping the bound original for your portfolio. 96 clean grid pages remaining.",
    seller: {
      name: "Abhishek Pandey",
      major: "2nd Year Chemical Eng",
      campus: "Main Campus",
      rating: 4.8,
      reviewsCount: 15,
      verifiedId: true,
      phone: "+91 98450 77123",
      avatar: "👨‍🔬",
      responseTime: "under 8 mins"
    },
    featured: false,
    tags: ["Lab Notebook", "Carbon Copy", "Chemistry", "Engineering", "Stationery"],
    createdAt: Date.now() - 3600000 * 64
  }
];

// ==================== APPLICATION STATE ====================
class AppState {
  constructor() {
    this.currency = localStorage.getItem("cb_currency") || "INR";
    this.theme = localStorage.getItem("cb_theme") || "light";
    this.wishlist = JSON.parse(localStorage.getItem("cb_wishlist") || "[]");
    
    // Load custom user posted items merged with seed data
    const localItems = JSON.parse(localStorage.getItem("cb_custom_items") || "[]");
    this.items = [...localItems, ...INITIAL_ITEMS];

    this.filters = {
      search: "",
      category: "all",
      condition: "all",
      dealType: "all",
      department: "all",
      campus: "all",
      maxPrice: 3000,
      sortBy: "featured"
    };

    this.activeChat = null;
    this.chatHistory = JSON.parse(localStorage.getItem("cb_chat_history") || "{}");
  }

  saveCustomItem(item) {
    const localItems = JSON.parse(localStorage.getItem("cb_custom_items") || "[]");
    localItems.unshift(item);
    localStorage.setItem("cb_custom_items", JSON.stringify(localItems));
    this.items.unshift(item);
  }

  toggleWishlist(itemId) {
    const index = this.wishlist.indexOf(itemId);
    let added = false;
    if (index > -1) {
      this.wishlist.splice(index, 1);
      added = false;
    } else {
      this.wishlist.push(itemId);
      added = true;
    }
    localStorage.setItem("cb_wishlist", JSON.stringify(this.wishlist));
    return added;
  }

  isWishlisted(itemId) {
    return this.wishlist.includes(itemId);
  }

  setCurrency(curr) {
    this.currency = curr;
    localStorage.setItem("cb_currency", curr);
  }

  setTheme(th) {
    this.theme = th;
    localStorage.setItem("cb_theme", th);
  }

  formatPrice(item) {
    if (item.dealType === "free") {
      return `<span class="deal-pill text-emerald">Free Giveaway (₹0 / $0)</span>`;
    }
    if (item.dealType === "exchange") {
      return `<span class="deal-pill text-emerald">Open for Exchange / Swap</span>`;
    }

    if (this.currency === "USD") {
      const price = item.priceUSD || Math.round(item.priceINR / 83);
      const retail = item.retailUSD || Math.round(item.retailINR / 83);
      return `$${price} <del>$${retail}</del>`;
    } else {
      return `₹${item.priceINR.toLocaleString('en-IN')} <del>₹${item.retailINR.toLocaleString('en-IN')}</del>`;
    }
  }

  formatRawPrice(inr, usd) {
    if (this.currency === "USD") {
      return `$${usd || Math.round(inr / 83)}`;
    }
    return `₹${inr.toLocaleString('en-IN')}`;
  }
}

const state = new AppState();

// ==================== DOM ELEMENTS CACHE ====================
const DOM = {
  themeToggleBtn: document.getElementById("theme-toggle-btn"),
  currencyBtns: document.querySelectorAll(".currency-btn"),
  campusSelect: document.getElementById("campus-select"),
  headerSearchInput: document.getElementById("header-search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  mobileSearchInput: document.getElementById("mobile-search-input"),
  heroCategoryFilter: document.getElementById("hero-category-filter"),
  heroKeywordInput: document.getElementById("hero-keyword-input"),
  heroSearchSubmit: document.getElementById("hero-search-submit"),
  trendTags: document.querySelectorAll(".trend-tag"),
  
  // Catalog & Filters
  tabBtns: document.querySelectorAll(".tab-btn"),
  filterCondition: document.getElementById("filter-condition"),
  filterDealType: document.getElementById("filter-deal-type"),
  filterDept: document.getElementById("filter-dept"),
  priceSlider: document.getElementById("price-slider"),
  priceSliderDisplay: document.getElementById("price-slider-display"),
  sortSelect: document.getElementById("sort-select"),
  activeFiltersBar: document.getElementById("active-filters-bar"),
  activeTagsList: document.getElementById("active-tags-list"),
  resetFiltersBtn: document.getElementById("reset-filters-btn"),
  listingsGrid: document.getElementById("listings-grid"),
  emptyState: document.getElementById("empty-state"),
  emptyResetBtn: document.getElementById("empty-reset-btn"),
  emptyPostBtn: document.getElementById("empty-post-btn"),
  itemCountBadge: document.getElementById("item-count-badge"),
  booksTabCount: document.getElementById("books-tab-count"),
  stationeryTabCount: document.getElementById("stationery-tab-count"),
  calculatorsTabCount: document.getElementById("calculators-tab-count"),
  exchangeTabCount: document.getElementById("exchange-tab-count"),
  loadMoreBtn: document.getElementById("load-more-btn"),

  // Modals & Drawers
  itemDetailModal: document.getElementById("item-detail-modal"),
  itemModalClose: document.getElementById("item-modal-close"),
  itemModalBody: document.getElementById("item-modal-body"),

  contactSellerModal: document.getElementById("contact-seller-modal"),
  contactModalClose: document.getElementById("contact-modal-close"),
  cSellerAvatar: document.getElementById("c-seller-avatar"),
  cSellerName: document.getElementById("c-seller-name"),
  cItemTitleRef: document.getElementById("c-item-title-ref"),
  cWhatsappBtn: document.getElementById("c-whatsapp-btn"),
  cCallBtn: document.getElementById("c-call-btn"),
  cSellerPhonePreview: document.getElementById("c-seller-phone-preview"),
  cChatThread: document.getElementById("c-chat-thread"),
  chatSendForm: document.getElementById("chat-send-form"),
  chatMsgInput: document.getElementById("chat-msg-input"),
  presetBubbles: document.getElementById("preset-bubbles"),

  postListingModal: document.getElementById("post-listing-modal"),
  openPostModalBtn: document.getElementById("open-post-modal-btn"),
  postModalClose: document.getElementById("post-modal-close"),
  postItemForm: document.getElementById("post-item-form"),
  postCancelBtn: document.getElementById("post-cancel-btn"),
  bottomPostBtn: document.getElementById("bottom-post-btn"),
  browseAllCta: document.getElementById("browse-all-cta"),
  postCategory: document.getElementById("post-category"),
  postDealType: document.getElementById("post-deal-type"),
  postPriceGroup: document.getElementById("post-price-group"),
  postOriginalPriceGroup: document.getElementById("post-original-price-group"),
  postTitleInput: document.getElementById("post-title"),
  postPriceInput: document.getElementById("post-price"),
  postOriginalPriceInput: document.getElementById("post-original-price"),
  postConditionInput: document.getElementById("post-condition"),
  postCourseInput: document.getElementById("post-course"),
  postCampusInput: document.getElementById("post-campus"),
  postDescriptionInput: document.getElementById("post-description"),
  postSellerNameInput: document.getElementById("post-seller-name"),
  postImageFile: document.getElementById("post-image-file"),
  imageUploadZone: document.getElementById("image-upload-zone"),
  presetPhotoChips: document.getElementById("preset-photo-chips"),
  livePreviewCard: document.getElementById("live-preview-card"),

  // Exchange Modal
  exchangeModal: document.getElementById("exchange-modal"),
  exchangeModalClose: document.getElementById("exchange-modal-close"),
  exchangeProposalForm: document.getElementById("exchange-proposal-form"),
  exchangeCancelBtn: document.getElementById("exchange-cancel-btn"),
  exchangeTargetTitle: document.getElementById("exchange-target-title"),
  postExchangeCtaBtn: document.getElementById("post-exchange-cta-btn"),
  filterExchangeOnlyBtn: document.getElementById("filter-exchange-only-btn"),

  // Wishlist Drawer
  wishlistDrawer: document.getElementById("wishlist-drawer"),
  wishlistDrawerTrigger: document.getElementById("wishlist-drawer-trigger"),
  wishlistDrawerClose: document.getElementById("wishlist-drawer-close"),
  wishlistItemsContainer: document.getElementById("wishlist-items-container"),
  wishlistCount: document.getElementById("wishlist-count"),
  drawerWishlistCount: document.getElementById("drawer-wishlist-count"),
  clearWishlistBtn: document.getElementById("clear-wishlist-btn"),

  // Messages Drawer
  messagesDrawer: document.getElementById("messages-drawer"),
  messagesDrawerTrigger: document.getElementById("messages-drawer-trigger"),
  messagesDrawerClose: document.getElementById("messages-drawer-close"),
  openDemoChatBtn: document.getElementById("open-demo-chat-btn"),

  // Safety Guide Modal
  safetyModal: document.getElementById("safety-modal"),
  safetyModalTrigger: document.getElementById("safety-modal-trigger"),
  safetyModalClose: document.getElementById("safety-modal-close"),
  safetyAgreeBtn: document.getElementById("safety-agree-btn"),
  featureSafetyBtn: document.getElementById("feature-safety-btn"),
  fSafetyLink: document.getElementById("f-safety-link"),

  // Category Cards
  catCards: document.querySelectorAll(".cat-card"),
  footerCatLinks: document.querySelectorAll(".footer-cat-link"),

  toastContainer: document.getElementById("toast-container")
};

let currentPostImage = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=70";

// ==================== CORE INITIALIZATION ====================
function init() {
  applyTheme(state.theme);
  applyCurrency(state.currency);
  updateWishlistUI();
  updateCategoryCounts();
  renderListings();
  updateLivePreview();
  setupEventListeners();
}

// ==================== THEME & CURRENCY ====================
function applyTheme(theme) {
  state.setTheme(theme);
  if (theme === "dark") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    DOM.themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    DOM.themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

function applyCurrency(curr) {
  state.setCurrency(curr);
  DOM.currencyBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.currency === curr);
  });
  
  if (curr === "USD") {
    DOM.priceSlider.max = 120;
    DOM.priceSlider.value = Math.min(DOM.priceSlider.value, 120) || 120;
    DOM.priceSliderDisplay.textContent = `$${DOM.priceSlider.value}`;
  } else {
    DOM.priceSlider.max = 3000;
    DOM.priceSlider.value = Math.min(DOM.priceSlider.value * 25, 3000) || 3000;
    DOM.priceSliderDisplay.textContent = `₹${parseInt(DOM.priceSlider.value).toLocaleString('en-IN')}`;
  }
  renderListings();
  updateLivePreview();
}

// ==================== HIGH PERFORMANCE FILTERING & RENDERING ====================
function getFilteredItems() {
  const searchQ = state.filters.search ? state.filters.search.toLowerCase() : "";
  const catFilter = state.filters.category;
  const campusFilter = state.filters.campus;
  const condFilter = state.filters.condition;
  const dealFilter = state.filters.dealType;
  const deptFilter = state.filters.department;
  const maxPrice = state.filters.maxPrice;
  const isUSD = state.currency === "USD";

  return state.items.filter(item => {
    if (searchQ) {
      const match = item.title.toLowerCase().includes(searchQ) ||
                    (item.author && item.author.toLowerCase().includes(searchQ)) ||
                    (item.courseCode && item.courseCode.toLowerCase().includes(searchQ)) ||
                    item.description.toLowerCase().includes(searchQ) ||
                    (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQ)));
      if (!match) return false;
    }

    if (catFilter !== "all") {
      if (catFilter === "exchange") {
        if (item.dealType !== "exchange") return false;
      } else if (catFilter === "free") {
        if (item.dealType !== "free") return false;
      } else if (item.category !== catFilter) {
        return false;
      }
    }

    if (campusFilter !== "all" && item.campus !== campusFilter && item.campus !== "all") {
      return false;
    }

    if (condFilter !== "all" && item.condition !== condFilter) {
      return false;
    }

    if (dealFilter !== "all" && item.dealType !== dealFilter) {
      return false;
    }

    if (deptFilter !== "all" && item.department !== deptFilter) {
      return false;
    }

    if (item.dealType === "sale") {
      const price = isUSD ? (item.priceUSD || Math.round(item.priceINR / 83)) : item.priceINR;
      if (price > maxPrice) return false;
    }

    return true;
  }).sort((a, b) => {
    switch (state.filters.sortBy) {
      case "price-asc": return (a.priceINR || 0) - (b.priceINR || 0);
      case "price-desc": return (b.priceINR || 0) - (a.priceINR || 0);
      case "newest": return (b.createdAt || 0) - (a.createdAt || 0);
      case "rating": return (b.seller.rating || 0) - (a.seller.rating || 0);
      default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });
}

function renderListings() {
  const filtered = getFilteredItems();
  DOM.itemCountBadge.textContent = filtered.length;

  if (filtered.length === 0) {
    DOM.listingsGrid.innerHTML = "";
    DOM.emptyState.classList.remove("hidden");
  } else {
    DOM.emptyState.classList.add("hidden");
    // Single atomic DOM replacement using DocumentFragment (zero layout thrashing)
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < filtered.length; i++) {
      fragment.appendChild(createItemCard(filtered[i]));
    }
    DOM.listingsGrid.replaceChildren(fragment);
  }

  renderActiveFilters();
}

function createItemCard(item) {
  const card = document.createElement("article");
  card.className = "listing-card";
  card.dataset.id = item.id;

  const isLiked = state.isWishlisted(item.id);

  let categoryIcon = "fa-book";
  let categoryLabel = "Used Book";
  if (item.category === "stationery") {
    categoryIcon = "fa-pen-ruler";
    categoryLabel = "Stationery";
  } else if (item.category === "calculators") {
    categoryIcon = "fa-calculator";
    categoryLabel = "Calculator";
  }

  let dealBadgeHtml = "";
  if (item.dealType === "exchange") {
    dealBadgeHtml = `<span class="card-deal-badge deal-exchange"><i class="fa-solid fa-arrows-rotate"></i> Swap</span>`;
  } else if (item.dealType === "free") {
    dealBadgeHtml = `<span class="card-deal-badge deal-free"><i class="fa-solid fa-gift"></i> 100% Free</span>`;
  }

  const discountPercent = item.retailINR > item.priceINR 
    ? Math.round(((item.retailINR - item.priceINR) / item.retailINR) * 100) 
    : 0;

  card.innerHTML = `
    <div class="card-media-wrapper" data-action="quick-view">
      <img src="${item.image}" alt="${escapeHtml(item.title)}" class="card-img" loading="lazy" decoding="async">
      <span class="card-category-chip">
        <i class="fa-solid ${categoryIcon}"></i> ${categoryLabel}
      </span>
      <button class="card-like-btn ${isLiked ? 'liked' : ''}" data-action="like" title="Save" aria-label="Save">
        <i class="fa-heart ${isLiked ? 'fa-solid' : 'fa-regular'}"></i>
      </button>
      ${dealBadgeHtml}
    </div>

    <div class="card-content">
      <div class="card-meta-top">
        <span class="card-course-code"><i class="fa-solid fa-graduation-cap"></i> ${escapeHtml(item.courseCode || 'General')}</span>
        <span class="card-condition-tag">${escapeHtml(item.condition)}</span>
      </div>

      <h3 class="card-title" data-action="quick-view" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</h3>
      <p class="card-desc-snippet">${escapeHtml(item.description)}</p>

      <div class="card-price-row">
        <div class="card-price">
          ${state.formatPrice(item)}
        </div>
        ${discountPercent > 0 && item.dealType === 'sale' ? `<span class="card-discount-tag">${discountPercent}% OFF</span>` : ''}
      </div>

      <div class="card-seller-row">
        <div class="seller-profile-mini">
          <div class="seller-avatar-small">${item.seller.avatar || '👨‍🎓'}</div>
          <div class="seller-details-mini">
            <span class="seller-name-text">
              ${escapeHtml(item.seller.name)}
              ${item.seller.verifiedId ? '<i class="fa-solid fa-circle-check verified-icon"></i>' : ''}
            </span>
            <span class="seller-campus-text"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(item.pickupLocation)}</span>
          </div>
        </div>
        <span class="seller-rating-pill">⭐ ${item.seller.rating || 5.0}</span>
      </div>

      <div class="card-actions-row">
        ${item.dealType === 'exchange' 
          ? `<button class="btn btn-emerald card-contact-btn" data-action="propose-swap"><i class="fa-solid fa-arrow-right-arrow-left"></i> Swap Offer</button>` 
          : `<button class="btn btn-primary card-contact-btn" data-action="contact"><i class="fa-solid fa-comment"></i> Contact</button>`}
        <button class="card-quick-view-btn" data-action="quick-view">Details</button>
      </div>
    </div>
  `;

  return card;
}

function updateCategoryCounts() {
  let books = 0, stationery = 0, calcs = 0, exchange = 0;
  for (let i = 0; i < state.items.length; i++) {
    const item = state.items[i];
    if (item.category === "books") books++;
    else if (item.category === "stationery") stationery++;
    else if (item.category === "calculators") calcs++;
    if (item.dealType === "exchange") exchange++;
  }

  DOM.booksTabCount.textContent = books;
  DOM.stationeryTabCount.textContent = stationery;
  DOM.calculatorsTabCount.textContent = calcs;
  DOM.exchangeTabCount.textContent = exchange;
}

function renderActiveFilters() {
  const activeTags = [];
  if (state.filters.search) activeTags.push({ label: `"${state.filters.search}"`, key: "search" });
  if (state.filters.category !== "all") activeTags.push({ label: `Category: ${state.filters.category}`, key: "category" });
  if (state.filters.campus !== "all") activeTags.push({ label: `Campus: ${state.filters.campus}`, key: "campus" });
  if (state.filters.condition !== "all") activeTags.push({ label: `Condition: ${state.filters.condition}`, key: "condition" });
  if (state.filters.dealType !== "all") activeTags.push({ label: `Type: ${state.filters.dealType}`, key: "dealType" });
  if (state.filters.department !== "all") activeTags.push({ label: `Major: ${state.filters.department}`, key: "department" });

  if (activeTags.length > 0) {
    DOM.activeFiltersBar.classList.remove("hidden");
    DOM.activeTagsList.innerHTML = activeTags.map(tag => 
      `<span class="filter-tag-pill">${escapeHtml(tag.label)} <i class="fa-solid fa-xmark remove-filter-tag" data-key="${tag.key}"></i></span>`
    ).join('');
  } else {
    DOM.activeFiltersBar.classList.add("hidden");
  }
}

function clearSpecificFilter(key) {
  if (key === "search") {
    state.filters.search = "";
    DOM.headerSearchInput.value = "";
    DOM.mobileSearchInput.value = "";
    DOM.clearSearchBtn.classList.add("hidden");
  } else if (key === "category") {
    state.filters.category = "all";
    DOM.tabBtns.forEach(t => t.classList.toggle("active", t.dataset.tab === "all"));
    DOM.heroCategoryFilter.value = "all";
  } else if (key === "campus") {
    state.filters.campus = "all";
    DOM.campusSelect.value = "all";
  } else if (key === "condition") {
    state.filters.condition = "all";
    DOM.filterCondition.value = "all";
  } else if (key === "dealType") {
    state.filters.dealType = "all";
    DOM.filterDealType.value = "all";
  } else if (key === "department") {
    state.filters.department = "all";
    DOM.filterDept.value = "all";
  }
  renderListings();
}

function resetAllFilters() {
  state.filters.search = "";
  state.filters.category = "all";
  state.filters.condition = "all";
  state.filters.dealType = "all";
  state.filters.department = "all";
  state.filters.campus = "all";
  state.filters.sortBy = "featured";

  DOM.headerSearchInput.value = "";
  DOM.mobileSearchInput.value = "";
  DOM.heroKeywordInput.value = "";
  DOM.heroCategoryFilter.value = "all";
  DOM.campusSelect.value = "all";
  DOM.filterCondition.value = "all";
  DOM.filterDealType.value = "all";
  DOM.filterDept.value = "all";
  DOM.sortSelect.value = "featured";
  DOM.clearSearchBtn.classList.add("hidden");

  DOM.tabBtns.forEach(b => b.classList.toggle("active", b.dataset.tab === "all"));

  const defaultMax = state.currency === "USD" ? 120 : 3000;
  state.filters.maxPrice = defaultMax;
  DOM.priceSlider.value = defaultMax;
  DOM.priceSliderDisplay.textContent = state.currency === "USD" ? `$120` : `₹3,000`;

  renderListings();
  showToast("Filters reset", "info");
}

// ==================== ITEM DETAIL MODAL ====================
function openItemDetailModal(item) {
  const discountPercent = item.retailINR > item.priceINR 
    ? Math.round(((item.retailINR - item.priceINR) / item.retailINR) * 100) 
    : 0;

  const isLiked = state.isWishlisted(item.id);

  let categoryLabel = item.category === "books" ? "📚 Used Textbook" 
                    : item.category === "calculators" ? "🧮 Calculator & Tech" 
                    : "📐 Stationery & Kit";

  DOM.itemModalBody.innerHTML = `
    <div class="detail-modal-grid">
      <div class="detail-gallery">
        <div class="detail-main-img-wrap">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" class="detail-main-img" decoding="async">
        </div>
        <div class="detail-seller-box">
          <div class="detail-seller-left">
            <div class="detail-seller-avatar">${item.seller.avatar || '👨‍🎓'}</div>
            <div>
              <div class="detail-seller-name">
                ${escapeHtml(item.seller.name)}
                ${item.seller.verifiedId ? '<i class="fa-solid fa-circle-check text-emerald"></i>' : ''}
              </div>
              <div class="detail-seller-sub">${escapeHtml(item.seller.major)} • ⭐ ${item.seller.rating} (${item.seller.reviewsCount} trades)</div>
            </div>
          </div>
          <button class="btn btn-outline" id="detail-contact-seller-btn">
            <i class="fa-solid fa-comment-dots"></i> Message
          </button>
        </div>
      </div>

      <div class="detail-info">
        <div class="detail-meta-row">
          <span class="detail-category-badge">${categoryLabel}</span>
          <span class="detail-condition-badge"><i class="fa-solid fa-certificate"></i> Condition: ${escapeHtml(item.condition)}</span>
          ${item.dealType === 'exchange' ? '<span class="detail-condition-badge text-emerald font-bold">Open for Exchange</span>' : ''}
        </div>

        <h1 class="detail-title">${escapeHtml(item.title)}</h1>

        <div class="detail-price-box">
          <div class="detail-price">${state.formatPrice(item)}</div>
          ${discountPercent > 0 && item.dealType === 'sale' ? `<span class="card-discount-tag">${discountPercent}% Off Original Retail</span>` : ''}
        </div>

        <div class="detail-specs-grid">
          <div class="spec-item">
            <span class="spec-label">Course / Syllabus</span>
            <span class="spec-val">${escapeHtml(item.courseCode || 'General Campus')}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Meetup Spot</span>
            <span class="spec-val">${escapeHtml(item.pickupLocation)}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Department</span>
            <span class="spec-val">${escapeHtml(item.department ? item.department.toUpperCase() : 'GENERAL')}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Reply Speed</span>
            <span class="spec-val">${escapeHtml(item.seller.responseTime || 'Under 10 mins')}</span>
          </div>
        </div>

        <div class="detail-desc">
          <strong>Item Description:</strong>
          <p style="margin-top: 0.35rem;">${escapeHtml(item.description)}</p>
        </div>

        <div class="detail-actions-row">
          ${item.dealType === 'exchange' 
            ? `<button class="btn btn-emerald btn-lg flex-1" id="detail-swap-btn"><i class="fa-solid fa-arrow-right-arrow-left"></i> Propose Barter Swap</button>`
            : `<button class="btn btn-primary btn-lg flex-1" id="detail-buy-btn"><i class="fa-solid fa-comment"></i> Contact Seller</button>`}
          <button class="btn btn-secondary btn-lg" id="detail-whatsapp-btn" title="Chat on WhatsApp">
            <i class="fa-brands fa-whatsapp text-emerald font-bold" style="font-size: 1.25rem;"></i> WhatsApp
          </button>
          <button class="btn btn-secondary btn-lg" id="detail-like-btn" title="Save to wishlist">
            <i class="fa-heart ${isLiked ? 'fa-solid text-rose' : 'fa-regular'}"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach button events
  const contactBtn = document.getElementById("detail-contact-seller-btn");
  const buyBtn = document.getElementById("detail-buy-btn");
  const swapBtn = document.getElementById("detail-swap-btn");
  const whatsappBtn = document.getElementById("detail-whatsapp-btn");
  const likeBtn = document.getElementById("detail-like-btn");

  if (contactBtn) contactBtn.addEventListener("click", () => { closeItemModal(); openContactSellerModal(item); });
  if (buyBtn) buyBtn.addEventListener("click", () => { closeItemModal(); openContactSellerModal(item); });
  if (swapBtn) swapBtn.addEventListener("click", () => { closeItemModal(); openExchangeModal(item); });
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const msg = encodeURIComponent(`Hi ${item.seller.name}! I saw your listing for "${item.title}" on CampusBazaar. Is it still available to meet on campus?`);
      const phoneDigits = item.seller.phone.replace(/[^0-9]/g, '');
      window.open(`https://wa.me/${phoneDigits}?text=${msg}`, '_blank');
    });
  }
  if (likeBtn) {
    likeBtn.addEventListener("click", () => {
      const added = state.toggleWishlist(item.id);
      const icon = likeBtn.querySelector("i");
      if (added) {
        icon.className = "fa-solid fa-heart text-rose";
        showToast("Saved to wishlist!", "success");
      } else {
        icon.className = "fa-regular fa-heart";
        showToast("Removed from wishlist", "info");
      }
      updateWishlistUI();
      renderListings();
    });
  }

  DOM.itemDetailModal.classList.remove("hidden");
}

function closeItemModal() {
  DOM.itemDetailModal.classList.add("hidden");
}

// ==================== CONTACT SELLER MODAL & LIVE CHAT ====================
function openContactSellerModal(item) {
  state.activeChat = item;

  DOM.cSellerAvatar.textContent = item.seller.avatar || "👨‍🎓";
  DOM.cSellerName.textContent = item.seller.name;
  DOM.cItemTitleRef.textContent = `Inquiring about: ${item.title} (${state.formatRawPrice(item.priceINR, item.priceUSD)})`;

  const cleanPhone = item.seller.phone.replace(/[^0-9]/g, '');
  const waMessage = encodeURIComponent(`Hi ${item.seller.name}! I'm interested in your ${item.title} listed on CampusBazaar for ${state.formatRawPrice(item.priceINR, item.priceUSD)}. Are you free to meet near ${item.pickupLocation}?`);
  DOM.cWhatsappBtn.href = `https://wa.me/${cleanPhone}?text=${waMessage}`;

  DOM.cSellerPhonePreview.textContent = item.seller.phone;
  DOM.cCallBtn.onclick = () => { window.location.href = `tel:${cleanPhone}`; };

  renderChatThread(item);
  DOM.contactSellerModal.classList.remove("hidden");
}

function renderChatThread(item) {
  const threadId = item.id;
  if (!state.chatHistory[threadId]) {
    state.chatHistory[threadId] = [
      {
        sender: "seller",
        text: `Hey! Thanks for looking at my listing for "${item.title}". It's in ${item.condition} condition. Let me know if you want to meet up on campus or inspect it!`,
        time: "Just now"
      }
    ];
  }

  DOM.cChatThread.innerHTML = state.chatHistory[threadId].map(msg => `
    <div class="chat-bubble ${msg.sender === 'user' ? 'bubble-outgoing' : 'bubble-incoming'}">
      <p>${escapeHtml(msg.text)}</p>
      <span class="bubble-time">${msg.time}</span>
    </div>
  `).join('');

  DOM.cChatThread.scrollTop = DOM.cChatThread.scrollHeight;
}

function sendChatMessage(text) {
  if (!text || !state.activeChat) return;
  const threadId = state.activeChat.id;

  state.chatHistory[threadId].push({
    sender: "user",
    text: text,
    time: "Just now"
  });
  renderChatThread(state.activeChat);

  setTimeout(() => {
    let replyText = "Sounds good! I can meet you at " + (state.activeChat.pickupLocation || "the Central Library") + " this afternoon. Let me know what time works best!";
    const lower = text.toLowerCase();
    if (lower.includes("available")) {
      replyText = `Yes, the ${state.activeChat.title} is definitely available! I have it right here in my backpack.`;
    } else if (lower.includes("price") || lower.includes("negotiable")) {
      replyText = `I already discounted it a lot, but I can shave off a little if we meet today near the library! 😊`;
    } else if (lower.includes("test") || lower.includes("condition")) {
      replyText = `100%! You can test all functions, buttons, and check pages thoroughly before paying anything.`;
    }

    state.chatHistory[threadId].push({
      sender: "seller",
      text: replyText,
      time: "Just now"
    });
    renderChatThread(state.activeChat);
    localStorage.setItem("cb_chat_history", JSON.stringify(state.chatHistory));
  }, 600);

  localStorage.setItem("cb_chat_history", JSON.stringify(state.chatHistory));
}

// ==================== EXCHANGE MODAL ====================
function openExchangeModal(item) {
  state.activeChat = item;
  DOM.exchangeTargetTitle.textContent = `Trading for: ${item.title} (Seller: ${item.seller.name})`;
  DOM.exchangeModal.classList.remove("hidden");
}

// ==================== LIVE PREVIEW ====================
function updateLivePreview() {
  const title = DOM.postTitleInput.value.trim() || "Calculus: Early Transcendentals (8th Ed)";
  const category = DOM.postCategory.value;
  const dealType = DOM.postDealType.value;
  const priceINR = parseInt(DOM.postPriceInput.value) || 450;
  const originalPriceINR = parseInt(DOM.postOriginalPriceInput.value) || 1200;
  const condition = DOM.postConditionInput.value;
  const course = DOM.postCourseInput.value.trim() || "MATH-101";
  const campus = DOM.postCampusInput.value;
  const desc = DOM.postDescriptionInput.value.trim() || "Clean textbook with all formula sheets intact. Great condition for semester exams.";
  const sellerName = DOM.postSellerNameInput.value.trim() || "You (Verified Student)";

  const dummyItem = {
    id: "preview-temp",
    title: title,
    category: category,
    dealType: dealType,
    priceINR: priceINR,
    retailINR: originalPriceINR,
    priceUSD: Math.round(priceINR / 83),
    retailUSD: Math.round(originalPriceINR / 83),
    condition: condition,
    courseCode: course,
    department: "engineering",
    pickupLocation: campus,
    image: currentPostImage,
    description: desc,
    seller: {
      name: sellerName,
      avatar: "👨‍🎓",
      rating: 5.0,
      verifiedId: true
    }
  };

  DOM.livePreviewCard.replaceChildren(createItemCard(dummyItem));
}

function handlePostFormSubmit(e) {
  e.preventDefault();

  const title = DOM.postTitleInput.value.trim();
  const category = DOM.postCategory.value;
  const dealType = DOM.postDealType.value;
  const priceINR = dealType === 'sale' ? (parseInt(DOM.postPriceInput.value) || 0) : 0;
  const retailINR = dealType === 'sale' ? (parseInt(DOM.postOriginalPriceInput.value) || priceINR * 2) : 0;
  const condition = DOM.postConditionInput.value;
  const courseCode = DOM.postCourseInput.value.trim() || "Campus";
  const pickupLocation = DOM.postCampusInput.value;
  const description = DOM.postDescriptionInput.value.trim();
  const sellerName = DOM.postSellerNameInput.value.trim();
  const sellerPhone = document.getElementById("post-seller-phone").value.trim() || "+91 98765 43210";

  const newItem = {
    id: "user-item-" + Date.now(),
    title: title,
    category: category,
    dealType: dealType,
    priceINR: priceINR,
    retailINR: retailINR,
    priceUSD: Math.round(priceINR / 83),
    retailUSD: Math.round(retailINR / 83),
    condition: condition,
    courseCode: courseCode,
    department: "general",
    campus: "main",
    pickupLocation: pickupLocation,
    image: currentPostImage,
    description: description,
    seller: {
      name: sellerName,
      major: "Verified Classmate",
      campus: "Main Campus",
      rating: 5.0,
      reviewsCount: 1,
      verifiedId: true,
      phone: sellerPhone,
      avatar: "🎓",
      responseTime: "under 5 mins"
    },
    featured: true,
    tags: [category, condition, courseCode],
    createdAt: Date.now()
  };

  state.saveCustomItem(newItem);
  updateCategoryCounts();
  renderListings();

  DOM.postListingModal.classList.add("hidden");
  DOM.postItemForm.reset();
  showToast(`🎉 "${title}" published to catalog!`, "success");

  document.getElementById("marketplace-catalog").scrollIntoView({ behavior: "smooth" });
}

// ==================== WISHLIST UI ====================
function updateWishlistUI() {
  const count = state.wishlist.length;
  DOM.wishlistCount.textContent = count;
  DOM.drawerWishlistCount.textContent = count;

  if (count === 0) {
    DOM.wishlistItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <i class="fa-regular fa-heart" style="font-size: 2.5rem; margin-bottom: 0.75rem; color: var(--text-dim);"></i>
        <p><strong>Your wishlist is empty</strong></p>
        <span style="font-size: 0.8rem;">Tap the heart icon on any book or calculator to save it here for later.</span>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();
  state.wishlist.forEach(itemId => {
    const item = state.items.find(i => i.id === itemId);
    if (!item) return;

    const row = document.createElement("div");
    row.className = "wishlist-item-card";
    row.innerHTML = `
      <img src="${item.image}" alt="${escapeHtml(item.title)}" class="w-item-img" loading="lazy" decoding="async">
      <div class="w-item-info">
        <h4 class="w-item-title">${escapeHtml(item.title)}</h4>
        <div class="w-item-price">${state.formatPrice(item)}</div>
      </div>
      <button class="w-item-remove" data-id="${item.id}" title="Remove"><i class="fa-solid fa-trash-can"></i></button>
    `;
    fragment.appendChild(row);
  });
  DOM.wishlistItemsContainer.replaceChildren(fragment);
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "fa-circle-check";
  if (type === "error") icon = "fa-circle-xmark";
  if (type === "info") icon = "fa-circle-info";

  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-icon"></i>
    <span class="toast-msg">${escapeHtml(message)}</span>
  `;

  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 200);
  }, 2500);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==================== EVENT LISTENERS (DEBOUNCED & DELEGATED) ====================
function setupEventListeners() {
  DOM.themeToggleBtn.addEventListener("click", () => {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  });

  DOM.currencyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      applyCurrency(btn.dataset.currency);
    });
  });

  // Debounced Search Handling (100ms)
  let searchTimeout = null;
  const handleSearch = (val) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.filters.search = val.trim();
      DOM.clearSearchBtn.classList.toggle("hidden", val.length === 0);
      renderListings();
    }, 100);
  };

  DOM.headerSearchInput.addEventListener("input", (e) => handleSearch(e.target.value));
  DOM.mobileSearchInput.addEventListener("input", (e) => handleSearch(e.target.value));

  DOM.clearSearchBtn.addEventListener("click", () => {
    DOM.headerSearchInput.value = "";
    DOM.mobileSearchInput.value = "";
    state.filters.search = "";
    DOM.clearSearchBtn.classList.add("hidden");
    renderListings();
  });

  // Hero Search Submit
  DOM.heroSearchSubmit.addEventListener("click", () => {
    const keyword = DOM.heroKeywordInput.value.trim();
    const cat = DOM.heroCategoryFilter.value;
    state.filters.search = keyword;
    state.filters.category = cat;

    DOM.headerSearchInput.value = keyword;
    DOM.tabBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.tab === cat));

    renderListings();
    document.getElementById("marketplace-catalog").scrollIntoView({ behavior: "smooth" });
  });

  // Trend Tags
  DOM.trendTags.forEach(btn => {
    btn.addEventListener("click", () => {
      const tag = btn.dataset.tag;
      DOM.headerSearchInput.value = tag;
      DOM.heroKeywordInput.value = tag;
      state.filters.search = tag;
      DOM.clearSearchBtn.classList.remove("hidden");
      renderListings();
      document.getElementById("marketplace-catalog").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Category Tabs
  DOM.tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.filters.category = btn.dataset.tab;
      renderListings();
    });
  });

  // Facet Selects
  DOM.filterCondition.addEventListener("change", (e) => {
    state.filters.condition = e.target.value;
    renderListings();
  });

  DOM.filterDealType.addEventListener("change", (e) => {
    state.filters.dealType = e.target.value;
    renderListings();
  });

  DOM.filterDept.addEventListener("change", (e) => {
    state.filters.department = e.target.value;
    renderListings();
  });

  DOM.campusSelect.addEventListener("change", (e) => {
    state.filters.campus = e.target.value;
    renderListings();
  });

  // Throttled Price Slider with requestAnimationFrame
  let sliderRaf = null;
  DOM.priceSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    DOM.priceSliderDisplay.textContent = state.currency === "USD" ? `$${val}` : `₹${val.toLocaleString('en-IN')}`;
    if (!sliderRaf) {
      sliderRaf = requestAnimationFrame(() => {
        state.filters.maxPrice = val;
        renderListings();
        sliderRaf = null;
      });
    }
  });

  // Sort Select
  DOM.sortSelect.addEventListener("change", (e) => {
    state.filters.sortBy = e.target.value;
    renderListings();
  });

  // Reset Filters
  DOM.resetFiltersBtn.addEventListener("click", resetAllFilters);
  DOM.emptyResetBtn.addEventListener("click", resetAllFilters);

  // Active filters bar tag removal (delegated)
  DOM.activeTagsList.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".remove-filter-tag");
    if (removeBtn) {
      clearSpecificFilter(removeBtn.dataset.key);
    }
  });

  // HIGH-PERFORMANCE EVENT DELEGATION ON LISTINGS GRID (Only 1 Listener for all cards)
  DOM.listingsGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".listing-card");
    if (!card) return;

    const itemId = card.dataset.id;
    const item = state.items.find(i => i.id === itemId);
    if (!item) return;

    const actionEl = e.target.closest("[data-action]");
    if (!actionEl) return;

    const action = actionEl.dataset.action;
    if (action === "like") {
      e.stopPropagation();
      const added = state.toggleWishlist(item.id);
      actionEl.classList.toggle("liked", added);
      const icon = actionEl.querySelector("i");
      if (added) {
        icon.className = "fa-solid fa-heart";
        showToast(`Saved to wishlist!`, "success");
      } else {
        icon.className = "fa-regular fa-heart";
        showToast("Removed from wishlist", "info");
      }
      updateWishlistUI();
    } else if (action === "contact") {
      e.stopPropagation();
      openContactSellerModal(item);
    } else if (action === "propose-swap") {
      e.stopPropagation();
      openExchangeModal(item);
    } else if (action === "quick-view") {
      openItemDetailModal(item);
    }
  });

  // Wishlist item removal (delegated)
  DOM.wishlistItemsContainer.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".w-item-remove");
    if (removeBtn) {
      const itemId = removeBtn.dataset.id;
      state.toggleWishlist(itemId);
      updateWishlistUI();
      renderListings();
      showToast("Removed from wishlist", "info");
      return;
    }

    const card = e.target.closest(".wishlist-item-card");
    if (card) {
      const title = card.querySelector(".w-item-title").textContent;
      const item = state.items.find(i => i.title === title);
      if (item) {
        DOM.wishlistDrawer.classList.add("hidden");
        openItemDetailModal(item);
      }
    }
  });

  // Category Highlights Click
  DOM.catCards.forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      state.filters.category = cat;
      DOM.tabBtns.forEach(b => b.classList.toggle("active", b.dataset.tab === cat));
      renderListings();
      document.getElementById("marketplace-catalog").scrollIntoView({ behavior: "smooth" });
    });
  });

  DOM.footerCatLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.dataset.cat;
      state.filters.category = cat;
      DOM.tabBtns.forEach(b => b.classList.toggle("active", b.dataset.tab === cat));
      renderListings();
      document.getElementById("marketplace-catalog").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Post Listing Modal Triggers
  const openPostModal = () => {
    DOM.postListingModal.classList.remove("hidden");
    updateLivePreview();
  };
  DOM.openPostModalBtn.addEventListener("click", openPostModal);
  DOM.bottomPostBtn.addEventListener("click", openPostModal);
  DOM.emptyPostBtn.addEventListener("click", openPostModal);
  DOM.postExchangeCtaBtn.addEventListener("click", () => {
    DOM.postCategory.value = "stationery";
    DOM.postDealType.value = "exchange";
    DOM.postPriceGroup.style.display = "none";
    DOM.postOriginalPriceGroup.style.display = "none";
    openPostModal();
  });

  DOM.postDealType.addEventListener("change", (e) => {
    const val = e.target.value;
    if (val === "exchange" || val === "free") {
      DOM.postPriceGroup.style.display = "none";
      DOM.postOriginalPriceGroup.style.display = "none";
    } else {
      DOM.postPriceGroup.style.display = "block";
      DOM.postOriginalPriceGroup.style.display = "block";
    }
    updateLivePreview();
  });

  // Debounced live preview on form inputs
  let previewTimeout = null;
  const triggerPreview = () => {
    clearTimeout(previewTimeout);
    previewTimeout = setTimeout(updateLivePreview, 120);
  };

  [
    DOM.postTitleInput, DOM.postCategory, DOM.postDealType, DOM.postPriceInput,
    DOM.postOriginalPriceInput, DOM.postConditionInput, DOM.postCourseInput,
    DOM.postCampusInput, DOM.postDescriptionInput, DOM.postSellerNameInput
  ].forEach(input => {
    if (input) {
      input.addEventListener("input", triggerPreview);
      input.addEventListener("change", triggerPreview);
    }
  });

  // Preset image chips
  DOM.presetPhotoChips.querySelectorAll(".preset-img-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.presetPhotoChips.querySelectorAll(".preset-img-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentPostImage = btn.dataset.img;
      updateLivePreview();
    });
  });

  DOM.postImageFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        currentPostImage = uploadEvent.target.result;
        updateLivePreview();
        showToast("Photo loaded!", "info");
      };
      reader.readAsDataURL(file);
    }
  });

  DOM.postItemForm.addEventListener("submit", handlePostFormSubmit);
  DOM.postCancelBtn.addEventListener("click", () => DOM.postListingModal.classList.add("hidden"));
  DOM.postModalClose.addEventListener("click", () => DOM.postListingModal.classList.add("hidden"));

  // Contact Modal
  DOM.contactModalClose.addEventListener("click", () => DOM.contactSellerModal.classList.add("hidden"));
  DOM.chatSendForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = DOM.chatMsgInput.value.trim();
    if (text) {
      sendChatMessage(text);
      DOM.chatMsgInput.value = "";
    }
  });

  DOM.presetBubbles.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.chatMsgInput.value = btn.dataset.msg;
      sendChatMessage(btn.dataset.msg);
      DOM.chatMsgInput.value = "";
    });
  });

  DOM.itemModalClose.addEventListener("click", closeItemModal);

  // Exchange Modal
  DOM.exchangeModalClose.addEventListener("click", () => DOM.exchangeModal.classList.add("hidden"));
  DOM.exchangeCancelBtn.addEventListener("click", () => DOM.exchangeModal.classList.add("hidden"));
  DOM.exchangeProposalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const offerItem = document.getElementById("exchange-offer-item").value;
    DOM.exchangeModal.classList.add("hidden");
    DOM.exchangeProposalForm.reset();
    showToast(`Trade proposal for "${offerItem}" sent!`, "success");
  });

  DOM.filterExchangeOnlyBtn.addEventListener("click", () => {
    state.filters.category = "exchange";
    DOM.tabBtns.forEach(b => b.classList.toggle("active", b.dataset.tab === "exchange"));
    renderListings();
    document.getElementById("marketplace-catalog").scrollIntoView({ behavior: "smooth" });
  });

  DOM.wishlistDrawerTrigger.addEventListener("click", () => DOM.wishlistDrawer.classList.remove("hidden"));
  DOM.wishlistDrawerClose.addEventListener("click", () => DOM.wishlistDrawer.classList.add("hidden"));
  DOM.clearWishlistBtn.addEventListener("click", () => {
    state.wishlist = [];
    localStorage.removeItem("cb_wishlist");
    updateWishlistUI();
    renderListings();
    showToast("Wishlist cleared", "info");
  });

  DOM.messagesDrawerTrigger.addEventListener("click", () => DOM.messagesDrawer.classList.remove("hidden"));
  DOM.messagesDrawerClose.addEventListener("click", () => DOM.messagesDrawer.classList.add("hidden"));
  DOM.openDemoChatBtn.addEventListener("click", () => {
    openContactSellerModal(state.items[1]);
  });

  const openSafety = (e) => {
    if (e) e.preventDefault();
    DOM.safetyModal.classList.remove("hidden");
  };
  DOM.safetyModalTrigger.addEventListener("click", openSafety);
  DOM.safetyModalClose.addEventListener("click", () => DOM.safetyModal.classList.add("hidden"));
  DOM.safetyAgreeBtn.addEventListener("click", () => DOM.safetyModal.classList.add("hidden"));
  DOM.featureSafetyBtn.addEventListener("click", openSafety);
  DOM.fSafetyLink.addEventListener("click", openSafety);

  DOM.browseAllCta.addEventListener("click", () => {
    resetAllFilters();
    document.getElementById("marketplace-catalog").scrollIntoView({ behavior: "smooth" });
  });

  [
    DOM.itemDetailModal, DOM.contactSellerModal, DOM.postListingModal,
    DOM.exchangeModal, DOM.wishlistDrawer, DOM.messagesDrawer, DOM.safetyModal
  ].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      [
        DOM.itemDetailModal, DOM.contactSellerModal, DOM.postListingModal,
        DOM.exchangeModal, DOM.wishlistDrawer, DOM.messagesDrawer, DOM.safetyModal
      ].forEach(m => m.classList.add("hidden"));
    }
  });

  // Hero sample cards click
  const sampleBook = document.getElementById("hero-sample-book");
  const sampleCalc = document.getElementById("hero-sample-calc");
  const sampleStationery = document.getElementById("hero-sample-stationery");

  if (sampleBook) sampleBook.addEventListener("click", () => openItemDetailModal(state.items[0]));
  if (sampleCalc) sampleCalc.addEventListener("click", () => openItemDetailModal(state.items[1]));
  if (sampleStationery) sampleStationery.addEventListener("click", () => openItemDetailModal(state.items[2]));
}

// Start application
document.addEventListener("DOMContentLoaded", init);
