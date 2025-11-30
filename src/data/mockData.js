export const serviceCategories = [
  {
    id: "housekeeping",
    name: "Housekeeping",
    description: "Deep cleaning, recurring visits, and move-in readiness.",
    icon: "Sparkles",
  },
  {
    id: "nursing",
    name: "Nursing",
    description: "Nurses for post-operation care, injections, and monitoring.",
    icon: "HeartPulse",
  },
  {
    id: "elderly",
    name: "Elderly Care",
    description: "Companionship, medication reminders, and light assistance.",
    icon: "HelpingHand",
  },
  {
    id: "carpets",
    name: "Carpets",
    description: "On-site carpet, sofa, and mattress cleaning.",
    icon: "Feather",
  },
];

export const services = [
  {
    id: "svc-deep-clean",
    name: "Deep Cleaning",
    categoryId: "housekeeping",
    price: 320,
    duration: "3h",
    rating: 4.8,
    reviewsCount: 124,
    highlights: ["Eco-friendly products", "Includes kitchen and bathrooms", "Team of two"],
  },
  {
    id: "svc-quick-visit",
    name: "Quick Visit",
    categoryId: "housekeeping",
    price: 180,
    duration: "90m",
    rating: 4.6,
    reviewsCount: 98,
    highlights: ["Weekly recurring option", "Focus on high-traffic areas"],
  },
  {
    id: "svc-post-op",
    name: "Post-Op Nursing",
    categoryId: "nursing",
    price: 520,
    duration: "4h",
    rating: 4.9,
    reviewsCount: 61,
    highlights: ["Wound care", "Vitals monitoring", "Doctor liaison"],
  },
  {
    id: "svc-daily-check",
    name: "Daily Health Check",
    categoryId: "nursing",
    price: 260,
    duration: "2h",
    rating: 4.7,
    reviewsCount: 74,
    highlights: ["Medication reminders", "Blood pressure and sugar tracking"],
  },
  {
    id: "svc-elderly-day",
    name: "Day Companion",
    categoryId: "elderly",
    price: 300,
    duration: "6h",
    rating: 4.8,
    reviewsCount: 55,
    highlights: ["Light movement assistance", "Meal preparation", "Family updates"],
  },
  {
    id: "svc-elderly-night",
    name: "Night Companion",
    categoryId: "elderly",
    price: 420,
    duration: "10h",
    rating: 4.9,
    reviewsCount: 43,
    highlights: ["Overnight observation", "Sleep safety checks"],
  },
  {
    id: "svc-carpet",
    name: "Carpet Steam Clean",
    categoryId: "carpets",
    price: 230,
    duration: "2h",
    rating: 4.5,
    reviewsCount: 91,
    highlights: ["Industrial steam", "Anti-bacterial treatment"],
  },
  {
    id: "svc-sofa",
    name: "Sofa & Mattress Refresh",
    categoryId: "carpets",
    price: 260,
    duration: "2.5h",
    rating: 4.6,
    reviewsCount: 72,
    highlights: ["Dry in 2 hours", "Stain pre-treatment"],
  },
];

export const workers = [
  {
    id: "worker-lina",
    name: "Lina Mansour",
    phone: "+20 122 222 1020",
    area: "New Cairo",
    services: ["Deep Cleaning", "Quick Visit"],
    level: "Gold",
    rating: 4.9,
    totalEarned: 182000,
  },
  {
    id: "worker-samir",
    name: "Samir Fouad",
    phone: "+20 101 881 7733",
    area: "Nasr City",
    services: ["Post-Op Nursing", "Daily Health Check"],
    level: "Silver",
    rating: 4.7,
    totalEarned: 154000,
  },
  {
    id: "worker-noura",
    name: "Noura Helmy",
    phone: "+20 109 445 9912",
    area: "Heliopolis",
    services: ["Day Companion", "Night Companion"],
    level: "Gold",
    rating: 4.8,
    totalEarned: 201000,
  },
  {
    id: "worker-amgad",
    name: "Amgad Salem",
    phone: "+20 111 224 3111",
    area: "Maadi",
    services: ["Carpet Steam Clean", "Sofa & Mattress Refresh"],
    level: "Bronze",
    rating: 4.5,
    totalEarned: 121000,
  },
];

export const clients = [
  {
    id: "client-102",
    name: "Maya Hassan",
    phone: "+20 109 111 8899",
    email: "maya@example.com",
    addresses: [
      { label: "Primary", location: "New Cairo - Fifth Settlement", notes: "Gate 3, Villa 12" },
      { label: "Office", location: "Maadi - Corniche", notes: "Floor 5, reception" },
    ],
  },
  {
    id: "client-103",
    name: "Ali Tarek",
    phone: "+20 120 440 1101",
    email: "ali@example.com",
    addresses: [{ label: "Primary", location: "Heliopolis - Merghany", notes: "Building 7" }],
  },
  {
    id: "client-104",
    name: "Farah Nabil",
    phone: "+20 101 202 5500",
    email: "farah@example.com",
    addresses: [{ label: "Primary", location: "Zayed - Beverly Hills", notes: "Villa 18" }],
  },
];

export const reviews = [
  {
    id: "rev-1",
    client: "Maya Hassan",
    service: "Deep Cleaning",
    rating: 5,
    comment: "The team was punctual and meticulous. Great care with the kitchen appliances.",
    sentiment: "positive",
  },
  {
    id: "rev-2",
    client: "Ali Tarek",
    service: "Post-Op Nursing",
    rating: 4,
    comment: "Nurse Samir followed the doctor's plan perfectly. Minor delay in arrival.",
    sentiment: "positive",
  },
  {
    id: "rev-3",
    client: "Farah Nabil",
    service: "Carpet Steam Clean",
    rating: 4,
    comment: "Removed old stains and smelled fresh. Would book again.",
    sentiment: "positive",
  },
];

export const orders = [
  {
    id: "ORD-1201",
    clientName: "Maya Hassan",
    categoryId: "housekeeping",
    serviceId: "svc-deep-clean",
    status: "awaitingPayment",
    date: "2025-01-17",
    address: "New Cairo - Fifth Settlement",
    total: 320,
    paymentMethod: "instapay",
    notes: "Focus on kitchen and balcony",
    workerId: null,
    timeline: [
      { status: "submitted", timestamp: "2025-01-17 09:10" },
      { status: "awaitingPayment", timestamp: "2025-01-17 09:12" },
    ],
  },
  {
    id: "ORD-1202",
    clientName: "Ali Tarek",
    categoryId: "nursing",
    serviceId: "svc-post-op",
    status: "assigned",
    date: "2025-01-15",
    address: "Heliopolis - Merghany",
    total: 520,
    paymentMethod: "online",
    notes: "Post knee surgery follow-up",
    workerId: "worker-samir",
    timeline: [
      { status: "submitted", timestamp: "2025-01-15 11:00" },
      { status: "paymentConfirmed", timestamp: "2025-01-15 11:02" },
      { status: "assigned", timestamp: "2025-01-15 11:30" },
    ],
  },
  {
    id: "ORD-1203",
    clientName: "Farah Nabil",
    categoryId: "carpets",
    serviceId: "svc-carpet",
    status: "inProgress",
    date: "2025-01-10",
    address: "Zayed - Beverly Hills",
    total: 230,
    paymentMethod: "online",
    notes: "Living room and guest room",
    workerId: "worker-amgad",
    timeline: [
      { status: "submitted", timestamp: "2025-01-10 08:30" },
      { status: "paymentConfirmed", timestamp: "2025-01-10 08:31" },
      { status: "assigned", timestamp: "2025-01-10 08:45" },
      { status: "inProgress", timestamp: "2025-01-10 09:00" },
    ],
  },
  {
    id: "ORD-1204",
    clientName: "Maya Hassan",
    categoryId: "elderly",
    serviceId: "svc-elderly-day",
    status: "completed",
    date: "2025-01-05",
    address: "New Cairo - Fifth Settlement",
    total: 300,
    paymentMethod: "instapay",
    notes: "Daily companion for mother",
    workerId: "worker-noura",
    timeline: [
      { status: "submitted", timestamp: "2025-01-05 07:30" },
      { status: "awaitingPayment", timestamp: "2025-01-05 07:32" },
      { status: "paymentConfirmed", timestamp: "2025-01-05 08:00" },
      { status: "assigned", timestamp: "2025-01-05 08:05" },
      { status: "inProgress", timestamp: "2025-01-05 09:00" },
      { status: "completed", timestamp: "2025-01-05 15:00" },
    ],
  },
];

export const faqItems = [
  {
    question: "How are workers vetted?",
    answer:
      "All workers are identity-verified, background-checked, and trained on client safety, service quality, and customer care standards.",
  },
  {
    question: "How is payment handled?",
    answer:
      "Pay online or via Instapay. Instapay uploads are reviewed by customer support before assigning a worker.",
  },
  {
    question: "Can I book recurring services?",
    answer:
      "Yes, create a recurring booking for weekly or monthly visits. Schedules can be paused or updated anytime from your dashboard.",
  },
];

export const analytics = {
  revenue: 184000,
  platformShare: 0.25,
  workersShare: 0.75,
  mostRequested: [
    { name: "Deep Cleaning", count: 212 },
    { name: "Post-Op Nursing", count: 144 },
    { name: "Carpet Steam Clean", count: 133 },
  ],
  statusBreakdown: [
    { status: "awaitingPayment", value: 18 },
    { status: "paymentConfirmed", value: 32 },
    { status: "assigned", value: 44 },
    { status: "inProgress", value: 21 },
    { status: "completed", value: 260 },
    { status: "cancelled", value: 9 },
  ],
};

export const aiInsights = {
  suggestions: [
    {
      orderId: "ORD-1201",
      suggestedWorker: "Lina Mansour",
      confidence: 0.86,
      reason: "Proximity to New Cairo and recent 5-star streak in housekeeping.",
    },
    {
      orderId: "ORD-1202",
      suggestedWorker: "Samir Fouad",
      confidence: 0.91,
      reason: "Certified nurse, handled 12 similar post-op orders this month.",
    },
  ],
  sentiment: {
    positive: 78,
    neutral: 15,
    negative: 7,
  },
};
