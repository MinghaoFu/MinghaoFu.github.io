// Single source of truth for the Spotify-style site.
// To add a paper: push to papers[]. Mark its albumId to slot into an album.
// To add an album: push to albums[]. Tracks are pulled by albumId.

export const me = {
  name: "Minghao Fu",
  handle: "MinghaoFu",
  role: "Ph.D. · UC San Diego · HDSI",
  verified: true,
  photo: "images/profile.png",
  banner: "images/hero-blueprint.png",
  // Base count + a live hit counter add to this on the homepage.
  // Edit base any time; the counter (counterapi.dev) handles the deltas.
  monthlyReadersBase: 12847,
  tagline: "I work on representation learning.",
  // Shown obfuscated ([at]/[dot]) in the About card to deter scrapers.
  contact: "isminghaofu [at] gmail [dot] com",
  bio: [
    'Ph.D. student at the Halıcıoğlu Data Science Institute, <a href="https://www.ucsd.edu/">UC San Diego</a>, advised by <a href="https://biweihuang.com/">Biwei Huang</a>.',
    'Earlier, I earned my M.S. in the Machine Learning Department at <a href="https://mbzuai.ac.ae/">MBZUAI</a>, advised by <a href="https://www.andrew.cmu.edu/user/kunz1/index.html">Kun Zhang</a>, and was a visiting student at the CLeaR Lab at <a href="https://www.cmu.edu/">CMU</a>, where I worked with <a href="https://www.cmu.edu/dietrich/philosophy/people/faculty/spirtes.html">Peter Spirtes</a>, Clark Glymour, and Kun Zhang. I received my B.S. in Software Engineering from <a href="https://en.uestc.edu.cn/">UESTC</a> and interned with the Ark NLP Group at Shanghai AI Lab.',
    'My research pursues (1) the theoretical foundations of representation learning, which highlight the importance of (2) collecting diverse data in a principled way — <em>no data diversity, no model intelligence</em>; and (3) how to marry the data diversity to model intelligence, scaling physical world models from first principles.'
  ],
  socials: [
    { label: "Email",   href: "mailto:isminghaofu@gmail.com" },
    { label: "GitHub",  href: "https://github.com/MinghaoFu" },
    { label: "Scholar", href: "https://scholar.google.com/citations?user=e-ShHX0AAAAJ&hl=en" },
    { label: "LinkedIn",href: "https://www.linkedin.com/in/minghao-fu-80254a270/" },
    { label: "Twitter", href: "https://twitter.com/Minghao__Fu" },
    { label: "CV",      href: "cv.pdf" },
  ],
};

// Two-album structure. Each paper's albumId routes it here.
// `cover` is a path to a square image (paper figures work well). If null, falls back
// to a 2-color gradient from `coverHex`.
export const albums = [
  {
    id: "latent-space",
    title: "Back to Latent Space",
    year: 2026,
    coverHex: ["#2a4f8b", "#0c1830"],
    cover: "images/papers/child.png",
    tag: "album",
    blurb: "Identifying latent causal variables and structures behind observed data.",
  },
  {
    id: "world-models",
    title: "What is Physical Language?",
    year: 2026,
    coverHex: ["#1c5d4e", "#0a1f1a"],
    cover: "images/papers/tcwm.png",
    tag: "album",
    blurb: "What representation is the \"language\" of physical agents? When will we have the \"GPT Moment\" of physical world models?",
  },
];

// Author homepages — single source of truth. linkifyAuthors() in app.js wraps
// any author name found here in a link to their site; names not listed render
// as plain text. Only personal homepages that were identity-verified are kept
// here (no Google Scholar / LinkedIn / directory-only entries, by design).
export const authorLinks = {
  "Biwei Huang": "https://biweihuang.com",
  "Kun Zhang": "https://www.andrew.cmu.edu/user/kunz1/index.html",
  "Nicklas Hansen": "https://www.nicklashansen.com",
  "Kevin Murphy": "https://www.cs.ubc.ca/~murphyk/",
  "Yingyao Hu": "https://econ.jhu.edu/directory/yingyao-hu/",
  "Peter Spirtes": "https://www.cmu.edu/dietrich/philosophy/people/faculty/spirtes.html",
  "Ruichu Cai": "https://ruichucai.github.io/",
  "Salman Khan": "https://salman-h-khan.github.io/",
  "Keze Wang": "https://kezewang.com/",
  "Fan Feng": "https://fan-feng.com/",
  "Ignavier Ng": "https://ignavierng.github.io/",
  "Yujia Zheng": "https://yjzheng.com/",
  "Guangyi Chen": "https://chengy12.github.io/",
  "Zijian Li": "https://jozerozero.github.io/",
  "Yongqiang Chen": "https://lfhase.github.io/",
  "Zeyu Tang": "https://zeyu.one/",
  "Yuewen Sun": "https://yuewen-sun.github.io/",
  "Yifan Shen": "https://sanshuiii.github.io/",
  "Loka Li": "https://lokali.github.io/",
  "Xinyue Wang": "https://www.charonwangg.com/",
  "Jinzhou Tang": "https://tangjzh.github.io/",
  "Selena Ge": "https://selenageruiqi.github.io/",
  "Zhenhao Chen": "https://zhenhaochenofficial.github.io/",
};

// Each paper has an albumId pointing into albums[]. Edit to regroup.
// Order here = display order (newest-first along the conference cycle:
// NeurIPS → ICLR → ICML → NeurIPS …). Popular section shows the first N
// `popular: true` entries — keep "frontier" papers at the top.
export const papers = [
  // ===== Frontier (just submitted) =====
  {
    id: "tcwm",
    title: "Back to Parsimonious Latents: Learning Task-Centric World Models from Visual Foundations",
    authors: '<em>Minghao Fu</em>, Fan Feng, Nicklas Hansen, Biwei Huang',
    venue: "arXiv 2026",
    year: 2026,
    thumb: "images/papers/tcwm.png",
    albumId: "world-models",
    popular: true,
    links: {
      arxiv:   "https://arxiv.org/pdf/2605.25620",
      project: "tc-wm/index.html",
      code:    "https://github.com/MinghaoFu/TC-WM",
    },
  },
  {
    id: "scar",
    title: "SCAR: Self-Supervised Continuous Action Representation Learning",
    authors: 'Hongjia Liu, Fan Feng, <em>Minghao Fu</em>, Xinyue Wang, Haofei Lu, Biwei Huang',
    venue: "arXiv 2026",
    year: 2026,
    thumb: "images/papers/scar.png",
    albumId: "world-models",
    popular: true,
    links: { arxiv: "https://arxiv.org/pdf/2605.16412" },
  },
  // ===== ICML 2026 (July 2026) =====
  {
    id: "climate",
    // Displayed title is intentionally shortened (drops "for Climate Analysis")
    // to position me as a representation-learning researcher, not a climate
    // expert. Canonical title on arxiv/ICML stays the full version:
    //   "Learning General Causal Structures with Hidden Dynamic Process for Climate Analysis"
    title: "Learning General Causal Structures with Hidden Dynamic Process",
    authors: '<em>Minghao Fu</em>, Biwei Huang, Zijian Li, Yujia Zheng, Ignavier Ng, Guangyi Chen, Yingyao Hu†, Kun Zhang†',
    venue: "ICML 2026",
    year: 2026,
    thumb: "images/papers/climate.png",
    albumId: "latent-space",
    popular: true,
    links: { arxiv: "https://arxiv.org/pdf/2501.12500" },
  },
  {
    id: "task-sufficient-wams",
    title: "Learning Task-Sufficient World Models by Synergizing Agentic Exploration and Structured Modeling",
    authors: 'Fan Feng, Yujia Zheng, <em>Minghao Fu</em>, Yongqiang Chen, Guangyi Chen, Kevin Murphy, Biwei Huang, Kun Zhang',
    venue: "ICML 2026",
    year: 2026,
    thumb: "images/papers/task-sufficient.png",
    albumId: "world-models",
    popular: true,
    links: {},
  },
  // ===== CVPR 2026 (June 2026) =====
  {
    id: "dreamsac",
    title: "DreamSAC: Learning Hamiltonian World Models via Symmetry Exploration",
    authors: 'Jinzhou Tang, Fan Feng, <em>Minghao Fu</em>, Wenjun Lin, Biwei Huang, Keze Wang',
    venue: "CVPR 2026",
    year: 2026,
    thumb: "images/papers/dreamsac.png",
    albumId: "world-models",
    popular: true,
    links: {
      arxiv: "https://arxiv.org/pdf/2603.07545",
      code:  "https://github.com/tangjzh/DreamSAC",
    },
  },
  // ===== ICLR 2026 (May 2026) =====
  {
    id: "adadiff",
    title: "Ada-Diffuser: Latent-Aware Adaptive Diffusion for Decision-Making",
    authors: 'Fan Feng, Selena Ge, <em>Minghao Fu</em>, Zijian Li, Yujia Zheng, Zeyu Tang, Yingyao Hu, Biwei Huang, Kun Zhang',
    venue: "ICLR 2026",
    year: 2026,
    thumb: "images/papers/adadiff.png",
    albumId: "latent-space",
    popular: true,
    links: { arxiv: "https://openreview.net/pdf?id=lZ2iSl8ihf" },
  },
  {
    id: "personax",
    title: "PersonaX: Multimodal Datasets with LLM-Inferred Behavior Traits",
    authors: 'Loka Li*, Wong Yu Kang*, <em>Minghao Fu</em>, Guangyi Chen, Zhenhao Chen, Gongxu Luo, Yuewen Sun, Salman Khan, Peter Spirtes, Kun Zhang',
    venue: "ICLR 2026",
    year: 2026,
    thumb: "images/papers/personaX.png",
    albumId: "latent-space",
    popular: true,
    links: {
      arxiv:   "https://arxiv.org/pdf/2509.11362",
      project: "webpages/PersonaX/index.html",
      code:    "https://github.com/lokali/PersonaX",
      dataset: "https://huggingface.co/Persona-X/datasets",
    },
  },
  // ===== NeurIPS 2025 (Dec 2025) =====
  {
    id: "child",
    title: "Towards Identifiability of Hierarchical Temporal Causal Representation Learning",
    authors: 'Zijian Li*, <em>Minghao Fu*</em>, Junxian Huang, Yifan Shen, Ruichu Cai†, Yuewen Sun, Guangyi Chen, Kun Zhang†',
    venue: "NeurIPS 2025",
    year: 2025,
    thumb: "images/papers/child.png",
    albumId: "latent-space",
    popular: true,
    links: {
      arxiv: "https://arxiv.org/pdf/2510.18310",
      code:  "https://github.com/MinghaoFu/CHiLD",
    },
  },
  {
    id: "online-ts",
    title: "Online Time Series Forecasting with Theoretical Guarantees",
    authors: 'Zijian Li, Changze Zhou, <em>Minghao Fu</em>, Sanjay Manjunath, Fan Feng, Guangyi Chen, Yingyao Hu*, Ruichu Cai, Kun Zhang*',
    venue: "NeurIPS 2025",
    year: 2025,
    thumb: "images/papers/online.png",
    albumId: "latent-space",
    popular: true,
    links: { arxiv: "https://arxiv.org/pdf/2510.18281" },
  },
];

// Blog posts. Add newest-first. Each blog still lives at blogs/<slug>/index.html.
export const blogs = [
  {
    slug: "anti-diversity-latent-space",
    date: "May 2026",
    title: "Anti-Diversity is All You Need to Get a Unified Latent Space",
    desc: "Identifiability theory runs on the diversity of an auxiliary variable. But when that variable is a nuisance, you flip the sign — maximize cross-entropy via gradient reversal — and recover the invariant latent instead. Intuition + proof sketch, with SCAR as a worked example.",
    href: "blogs/anti-diversity-latent-space/index.html",
    coverHex: ["#1a3a5a", "#0f6d5f"],
  },
  {
    slug: "cg-ica",
    date: "Oct 2024",
    title: "Stable Causal Graph ⇔ Complete Nonlinear ICA: Even in Your Cyclic Graph / Dense Generation!",
    desc: "Computation drafts showing the equivalence between stable causal graphs and complete nonlinear ICA via LUP decomposition.",
    href: "blogs/cg-ica/index.html",
    coverHex: ["#3a1c5a", "#7a3da8"],
  },
];

// News is curated to read as one focused direction: representation /
// self-supervised learning and world models (RL included as it is tightly
// coupled to world models). Avoid naming scattered sub-areas.
export const news = [
  { date: "May 2026", html: 'New preprint on <strong>world models</strong>: <strong>Back to Parsimonious Latents: Learning Task-Centric World Models from Visual Foundations</strong>.' },
  { date: "May 2026", html: 'Two papers on <strong>representation learning</strong> and <strong>world models</strong> were accepted to <strong>ICML 2026</strong>.' },
  { date: "Mar 2026", html: 'Our paper on <strong>world models</strong> was accepted to <strong>CVPR 2026</strong>.' },
  { date: "Jan 2026", html: 'Two papers on <strong>representation learning</strong> and <strong>reinforcement learning</strong> were accepted to <strong>ICLR 2026</strong>.' },
  { date: "Dec 2025", html: 'Attended <strong>NeurIPS 2025</strong> in San Diego, CA, USA.' },
  { date: "Nov 2025", html: 'Presented our work at <strong>The 5th Measurement Errors and Latent Variables Workshop</strong> at JHU. Thanks to <a href="https://econ.jhu.edu/directory/yingyao-hu/">Dean Hu</a> for the invitation.' },
  { date: "Sep 2025", html: 'Two papers on <strong>representation learning</strong> were accepted to <strong>NeurIPS 2025</strong>.' },
];

export const education = [
  {
    where: "UC San Diego",
    what: "Ph.D., Halıcıoğlu Data Science Institute",
    when: "Aug 2025 – Present",
    logo: "images/schools/ucsd.png",
    advisor: '<a href="https://biweihuang.com/">Biwei Huang</a>',
  },
  {
    where: "Carnegie Mellon University",
    what: "Visiting Student, CLeaR",
    when: "Jun 2024 – Nov 2024",
    logo: "images/schools/cmu.png",
    advisor: '<a href="https://www.cmu.edu/dietrich/philosophy/people/faculty/spirtes.html">Peter Spirtes</a> &amp; <a href="https://www.andrew.cmu.edu/user/kunz1/index.html">Kun Zhang</a>',
  },
  {
    where: "MBZUAI",
    what: "M.S., Machine Learning",
    when: "Aug 2023 – Jun 2025",
    logo: "images/schools/mbzuai.png",
    advisor: '<a href="https://www.andrew.cmu.edu/user/kunz1/index.html">Kun Zhang</a>',
  },
  {
    where: "UESTC",
    what: "B.S., Software Engineering",
    when: "Sep 2019 – Jun 2023",
    logo: "images/schools/uestc.png",
  },
];

export const experience = [
  { where: "ByteDance",       what: "Research Scientist Intern, Foundation Team", when: "Jun 2026 – Sep 2026", location: "San Jose, CA", logo: "images/schools/bytedance.png" },
  { where: "Cradle AI",       what: "Cofounder & CTO",                            when: "Jun 2024 – Jun 2025", location: "Abu Dhabi, UAE", logo: "images/schools/cradle.png" },
  { where: "Shanghai AI Lab", what: "Research Intern, Ark NLP Group",             when: "Nov 2022 – Mar 2023", location: "Shanghai, China", logo: "images/schools/shanghai-ai-lab.png" },
];

export const service = [
  { label: "Conference Reviewer", value: "ICML, NeurIPS, ICLR, CVPR, ECCV, BMVC, ICASSP, WMW." },
  { label: "Journal Reviewer",    value: "IEEE Transactions on Image Processing (TIP) 2024." },
];

// ---- helpers ----
export function papersByAlbum(albumId){
  return papers.filter(p => p.albumId === albumId);
}
export function albumById(id){
  return albums.find(a => a.id === id);
}
export function paperById(id){
  return papers.find(p => p.id === id);
}
export function popularPapers(n = 5){
  return papers.filter(p => p.popular).slice(0, n);
}
