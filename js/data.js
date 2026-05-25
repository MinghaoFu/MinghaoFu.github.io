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
  bio: [
    'Ph.D. student at the Halıcıoğlu Data Science Institute, <a href="https://www.ucsd.edu/">UC San Diego</a>, advised by <a href="https://biweihuang.com/">Biwei Huang</a>.',
    'Previously M.S. at <a href="https://mbzuai.ac.ae/">MBZUAI</a>, visiting student at <a href="https://www.cmu.edu/">CMU</a> with <a href="https://www.andrew.cmu.edu/user/kunz1/index.html">Kun Zhang</a>, <a href="https://www.cmu.edu/dietrich/philosophy/people/faculty/spirtes.html">Peter Spirtes</a>, and <a href="https://econ.jhu.edu/directory/yingyao-hu/">Yingyao Hu</a>. B.S. from <a href="https://en.uestc.edu.cn/">UESTC</a>, time at Shanghai AI Lab.',
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
    blurb: "Identifying latent causal variables and structures behind observed data — most of the Kun Zhang collaboration.",
  },
  {
    id: "world-models",
    title: "World Models",
    year: 2026,
    coverHex: ["#1c5d4e", "#0a1f1a"],
    cover: "images/papers/tcwm.png",
    tag: "album",
    blurb: "Task-centric and embodied world models for decision-making.",
  },
];

// Each paper has an albumId pointing into albums[]. Edit to regroup.
// Order here = display order. Popular section shows the first `popular: true`
// papers in this order — keep them roughly by citation count (most cited first).
export const papers = [
{
    id: "tcwm",
    title: "Learning Task-Centric World Models from Visual Foundations",
    authors: '<em>Minghao Fu</em>, Fan Feng, Nicklas Hansen, Biwei Huang',
    venue: "Manuscript",
    year: 2026,
    thumb: "images/papers/tcwm.png",
    albumId: "world-models",
    popular: true,
    links: { project: "tc-wm/index.html", code: "https://github.com/MinghaoFu/TCWM" },
  },
{
    id: "climate",
    title: "Learning General Causal Structures with Hidden Dynamic Process for Climate Analysis",
    authors: '<em>Minghao Fu</em>, Biwei Huang, Zijian Li, Yujia Zheng, Ignavier Ng, Guangyi Chen, Yingyao Hu†, Kun Zhang†',
    venue: "ICML 2026",
    year: 2026,
    thumb: "images/papers/climate.png",
    albumId: "latent-space",
    popular: true,
    links: { arxiv: "https://arxiv.org/pdf/2501.12500" },
  },
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
{
    id: "child",
    title: "Towards Identifiability of Hierarchical Temporal Causal Representation Learning",
    authors: 'Zijian Li*, <em>Minghao Fu*</em>, Junxian Huang, Yifan Shen, Ruichu Cai, Yuewen Sun, Guangyi Chen, Kun Zhang',
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
    authors: 'Zijian Li, Changze Zhou, <em>Minghao Fu</em>, Sanjay Manjunath, Fan Feng, Guangyi Chen, Yingyao Hu, Ruichu Cai, Kun Zhang',
    venue: "NeurIPS 2025",
    year: 2025,
    thumb: "images/papers/online.png",
    albumId: "latent-space",
    popular: true,
    links: { arxiv: "https://arxiv.org/pdf/2510.18281" },
  },
{
    id: "task-sufficient-wams",
    title: "Learning Task-Sufficient World Models by Synergizing Agentic Exploration and Structured Modeling",
    authors: 'Fan Feng, Yujia Zheng, <em>Minghao Fu</em>, Yongqiang Chen, Guangyi Chen, Kevin Murphy, Biwei Huang, Kun Zhang',
    venue: "ICML 2026",
    year: 2026,
    thumb: null,
    albumId: "world-models",
    popular: false,
    links: {},
  },
{
    id: "dreamsac",
    title: "DreamSAC: Learning Hamiltonian World Models via Symmetry Exploration",
    authors: 'Jinzhou Tang, Fan Feng, <em>Minghao Fu</em>, Wenkai Lin, Biwei Huang, Kuan Wang',
    venue: "CVPR 2026",
    year: 2026,
    thumb: null,
    albumId: "world-models",
    popular: false,
    links: {},
  },
{
    id: "rebuttal",
    title: "How Effective is Your Rebuttal? Identifying Causal Models from the OpenReview System",
    authors: 'Loka Li, Ibrahim Aldarmaki, <em>Minghao Fu</em>, Wong Yu Kang, Yu Deng, Qiuhao Huang, Jianliang Yang, Jin Tian, et al.',
    venue: "Preprint",
    year: 2025,
    thumb: null,
    albumId: "latent-space",
    popular: false,
    links: {},
  }

];

// Blog posts. Add newest-first. Each blog still lives at blogs/<slug>/index.html.
export const blogs = [
  {
    slug: "cg-ica",
    date: "Oct 2024",
    title: "Stable Causal Graph ⇔ Complete Nonlinear ICA: Even in Your Cyclic Graph / Dense Generation!",
    desc: "Computation drafts showing the equivalence between stable causal graphs and complete nonlinear ICA via LUP decomposition.",
    href: "blogs/cg-ica/index.html",
    coverHex: ["#3a1c5a", "#7a3da8"],
  },
];

export const news = [
  { date: "Jan 2026", html: 'Two papers on <strong>Reinforcement Learning</strong> and <strong>Multi-modality</strong> were accepted to ICLR 2026.' },
  { date: "Dec 2025", html: 'Attended <strong>NeurIPS 2025</strong> in San Diego, CA, USA.' },
  { date: "Nov 2025", html: 'Presented our work at <strong>The 5th Measurement Errors and Latent Variables Workshop</strong> at JHU. Thanks to <a href="https://econ.jhu.edu/directory/yingyao-hu/">Dean Hu</a> for invitation.' },
  { date: "Sep 2025", html: 'Two papers on <strong>Temporal State-Space Models</strong> were accepted to NeurIPS 2025.' },
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
    where: "Carnegie Mellon",
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
    advisor: '<a href="https://cfm.uestc.edu.cn/~shaojie/">Jie Shao</a>',
  },
];

export const experience = [
  { where: "Cradle AI",       what: "Cofounder & CTO",                    when: "Jun 2024 – Jun 2025", logo: "images/schools/cradle.png" },
  { where: "Shanghai AI Lab", what: "Research Intern, Ark NLP Group",     when: "Nov 2022 – Mar 2023", logo: "images/schools/shanghai-ai-lab.png" },
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
