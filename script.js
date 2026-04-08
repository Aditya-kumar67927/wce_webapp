/* ══════════════════════════════════════════════════
   Walchand College of Engineering — script.js
   ══════════════════════════════════════════════════ */

/* ── TRANSLATIONS ────────────────────────────────── */
const translations = {
  en: {
    announceTitle: "Important Announcements",
    announceIntro: "Welcome to Walchand College of Engineering, Sangli. Please note the following:",
    ann1: "📌 Admissions 2025–26 are now open for UG, PG & PhD programs",
    ann2: "📅 End Semester Examinations scheduled — check notice board",
    ann3: "🏆 WCE ranked in NIRF 2024 — Engineering category",
    ann4: "📋 NAAC A+ Accredited Institution",
    navHome: "Home",
    navAcademics: "Academics",
    navAdmissions: "Admissions",
    navDepts: "Departments",
    navResearch: "Research",
    navPlacements: "Placements",
    navContact: "Contact",
    collegeName: "Walchand College of Engineering",
    motto: "Saraswati Award, NAAC A+ | An Autonomous Institution",
    naac: "NAAC Grade",
    nirf: "NIRF Rank",
    years: "Years",
    departments: "Depts",
    quickLinks: "Quick Links",
    admissions: "Admissions",
    academics: "Academics",
    placements: "Placements",
    research: "Research",
    studentLife: "Student Life",
    latestNotices: "Latest Notices",
    newsEvents: "News & Events",
    viewAll: "View All",
    ug: "UG",
    pg: "PG",
    phd: "PhD",
    placed: "Placed",
    highestPkg: "Highest CTC",
    avgPkg: "Avg CTC",
    topRecruiters: "Top Recruiters",
    campusContact: "Campus & Contact",
    applyNow: "Apply",
    brochure: "Info",
    studentPortal: "Student",
    facultyPortal: "Faculty",
    alumni: "Alumni"
  },
  hi: {
    announceTitle: "महत्वपूर्ण घोषणाएं",
    announceIntro: "वालचंद कॉलेज ऑफ इंजीनियरिंग, सांगली में आपका स्वागत है।",
    ann1: "📌 2025-26 के लिए प्रवेश खुले हैं – UG, PG और PhD",
    ann2: "📅 अंत सत्र परीक्षाएं – नोटिस बोर्ड देखें",
    ann3: "🏆 WCE NIRF 2024 में रैंक – इंजीनियरिंग श्रेणी",
    ann4: "📋 NAAC A+ मान्यता प्राप्त संस्था",
    navHome: "होम",
    navAcademics: "शिक्षा",
    navAdmissions: "प्रवेश",
    navDepts: "विभाग",
    navResearch: "अनुसंधान",
    navPlacements: "प्लेसमेंट",
    navContact: "संपर्क",
    collegeName: "वालचंद कॉलेज ऑफ इंजीनियरिंग",
    motto: "सरस्वती पुरस्कार, NAAC A+ | एक स्वायत्त संस्था",
    naac: "NAAC ग्रेड",
    nirf: "NIRF रैंक",
    years: "वर्ष",
    departments: "विभाग",
    quickLinks: "त्वरित लिंक",
    admissions: "प्रवेश",
    academics: "शिक्षा",
    placements: "प्लेसमेंट",
    research: "अनुसंधान",
    studentLife: "छात्र जीवन",
    latestNotices: "नवीनतम सूचनाएं",
    newsEvents: "समाचार और आयोजन",
    viewAll: "सभी देखें",
    ug: "स्नातक",
    pg: "स्नातकोत्तर",
    phd: "पीएचडी",
    placed: "नियुक्त",
    highestPkg: "सर्वोच्च पैकेज",
    avgPkg: "औसत पैकेज",
    topRecruiters: "शीर्ष भर्तीकर्ता",
    campusContact: "परिसर और संपर्क",
    applyNow: "आवेदन",
    brochure: "जानकारी",
    studentPortal: "छात्र",
    facultyPortal: "शिक्षक",
    alumni: "पूर्व छात्र"
  },
  mr: {
    announceTitle: "महत्त्वाच्या घोषणा",
    announceIntro: "वालचंद कॉलेज ऑफ इंजिनिअरिंग, सांगली येथे आपले स्वागत आहे।",
    ann1: "📌 2025-26 साठी प्रवेश सुरू – UG, PG आणि PhD",
    ann2: "📅 सत्रांत परीक्षा – नोटीस बोर्ड पहा",
    ann3: "🏆 WCE NIRF 2024 मध्ये क्रमांकित – अभियांत्रिकी श्रेणी",
    ann4: "📋 NAAC A+ मान्यताप्राप्त संस्था",
    navHome: "मुखपृष्ठ",
    navAcademics: "शिक्षण",
    navAdmissions: "प्रवेश",
    navDepts: "विभाग",
    navResearch: "संशोधन",
    navPlacements: "नियुक्ती",
    navContact: "संपर्क",
    collegeName: "वालचंद कॉलेज ऑफ इंजिनिअरिंग",
    motto: "सरस्वती पुरस्कार, NAAC A+ | एक स्वायत्त संस्था",
    naac: "NAAC श्रेणी",
    nirf: "NIRF क्रमांक",
    years: "वर्षे",
    departments: "विभाग",
    quickLinks: "जलद दुवे",
    admissions: "प्रवेश",
    academics: "शिक्षण",
    placements: "नियुक्ती",
    research: "संशोधन",
    studentLife: "विद्यार्थी जीवन",
    latestNotices: "नवीन सूचना",
    newsEvents: "बातम्या व कार्यक्रम",
    viewAll: "सर्व पहा",
    ug: "पदवी",
    pg: "पदव्युत्तर",
    phd: "पीएचडी",
    placed: "नियुक्त",
    highestPkg: "सर्वोच्च पॅकेज",
    avgPkg: "सरासरी पॅकेज",
    topRecruiters: "शीर्ष भर्तीकर्ते",
    campusContact: "कॅम्पस आणि संपर्क",
    applyNow: "अर्ज",
    brochure: "माहिती",
    studentPortal: "विद्यार्थी",
    facultyPortal: "शिक्षक",
    alumni: "माजी विद्यार्थी"
  }
};

/* ── LANGUAGE SWITCHER ───────────────────────────── */
function setLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  document.documentElement.setAttribute('data-lang', lang);
}

/* ── DARK MODE ───────────────────────────────────── */
function toggleDark() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.querySelector('#dark-toggle i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
}

/* ── MOBILE NAV ──────────────────────────────────── */
function toggleNav() {
  document.getElementById('nav-links').classList.toggle('open');
}

/* ── MODALS ──────────────────────────────────────── */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  if (id === 'notices-modal') populateAllNotices();
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Close modal on overlay background click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function (e) {
      if (e.target === this) this.classList.remove('open');
    });
  });

  // Ensure alumni carousel loops infinitely by duplicating images
  const track = document.getElementById('wce-alumni-carousel-track');
  if (track && track.children.length) {
    const slides = Array.from(track.children);
    slides.forEach(img => track.appendChild(img.cloneNode(true)));
  }
});

/* ── NOTICES DATA ────────────────────────────────── */
const allNoticesData = [
  { tag: 'admit', label: 'Admissions', text: 'B.Tech Admissions 2025-26 through JEE/MHT-CET. Online applications open.', date: '23 Mar 2025' },
  { tag: 'exam',  label: 'Exam',       text: 'End Semester Examination April-May 2025 Timetable Published.', date: '20 Mar 2025' },
  { tag: 'event', label: 'Event',      text: 'YANTRA 2025 – National Technical Fest. Registration open till 10 April.', date: '15 Mar 2025' },
  { tag: 'new',   label: 'New',        text: 'Ph.D. Admissions 2025: Applications invited for all departments.', date: '10 Mar 2025' },
  { tag: 'exam',  label: 'Exam',       text: 'Mid-Semester Examination results declared. Check ERP portal.', date: '05 Mar 2025' },
  { tag: 'event', label: 'Event',      text: 'Campus Placement Drive: TCS, Infosys & L&T on-campus visits scheduled.', date: '01 Mar 2025' },
  { tag: 'new',   label: 'New',        text: 'New Research Lab inaugurated in Dept. of Computer Engineering.', date: '25 Feb 2025' },
  { tag: 'admit', label: 'Admissions', text: 'Direct Second Year (DSY) Admissions 2025-26 for Diploma holders open.', date: '20 Feb 2025' },
  { tag: 'exam',  label: 'Exam',       text: 'Practical Examination Schedule Announced for April 2025.', date: '15 Feb 2025' },
  { tag: 'event', label: 'Event',      text: 'SPANDAN 2025 – Annual Cultural Fest registrations now open.', date: '10 Feb 2025' },
];

function populateAllNotices() {
  const container = document.getElementById('all-notices-list');
  if (!container) return;
  container.innerHTML = allNoticesData.map(n => `
    <div style="padding:8px 0;border-bottom:1px solid var(--border)">
      <span class="notice-tag tag-${n.tag}">${n.label}</span>
      <div style="font-size:12px;color:var(--text2);margin:3px 0">${n.text}</div>
      <div style="font-size:10px;color:var(--text3);font-family:var(--mono)">${n.date}</div>
    </div>
  `).join('');
}

/* ── PROGRAMME TABS ──────────────────────────────── */
function switchTab(tab, el) {
  document.querySelectorAll('.prog-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.prog-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tab + '-content').classList.add('active');
  el.classList.add('active');
}

/* ── DEPARTMENT FILTER ───────────────────────────── */
const deptKeywordMap = {
  civil: 'Civil',
  mech: 'Mechanical',
  elec: 'Electrical',
  comp: 'Computer',
  it: 'Information',
  etrx: 'Electronics',
  instru: 'Instrumentation',
  chem: 'Chemical',
  prod: 'Production',
  mba: 'MBA'
};

function filterDept(val) {
  const items = document.querySelectorAll('.prog-list li');
  if (val === 'all') {
    items.forEach(i => i.style.display = '');
    return;
  }
  const keyword = deptKeywordMap[val] || '';
  items.forEach(i => {
    i.style.display = (i.textContent.includes(keyword)) ? '' : 'none';
  });
}

/* ── SEARCH ──────────────────────────────────────── */
const searchData = [
  { text: 'Admissions 2025-26',    action: () => openModal('admissions-modal') },
  { text: 'Departments',           action: () => openModal('departments-modal') },
  { text: 'Placements & Recruiters', action: () => openModal('placement-modal') },
  { text: 'Research',              action: () => openModal('research-modal') },
  { text: 'Events & News',         action: () => openModal('events-modal') },
  { text: 'Contact Us',            action: () => openModal('contact-modal') },
  { text: 'Campus Map',            action: () => openModal('map-modal') },
  { text: 'Notices & Circulars',   action: () => openModal('notices-modal') },
  { text: 'Gallery',               action: () => openModal('gallery-modal') },
  { text: 'Academics',             action: () => document.getElementById('section2').scrollIntoView({ behavior: 'smooth' }) },
];

function doSearch(q) {
  const el = document.getElementById('search-results');
  if (!q.trim()) { el.style.display = 'none'; return; }
  const results = searchData.filter(d => d.text.toLowerCase().includes(q.toLowerCase()));
  if (!results.length) { el.style.display = 'none'; return; }
  el.style.display = 'block';
  el.innerHTML = results.map((r, i) =>
    `<a href="#" onclick="searchGo(${i});return false">${r.text}</a>`
  ).join('');
  window._searchResults = results;
}

function searchGo(i) {
  window._searchResults[i].action();
  document.getElementById('search-results').style.display = 'none';
  document.getElementById('search-input').value = '';
}

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) {
    const sr = document.getElementById('search-results');
    if (sr) sr.style.display = 'none';
  }
});

/* ── CHATBOT KNOWLEDGE BASE ──────────────────────── */
const chatKB = {
  admissions:  'WCE offers admissions via MHT-CET/JEE Main for B.E., GATE for M.E., and entrance test for Ph.D. Admissions 2025-26 are now open!',
  fees:        'Approximate annual fees: B.E. ₹60,000–₹80,000/year (Govt. aided), M.E. ₹70,000–₹90,000/year. Exact fees at the Accounts section.',
  placement:   'Placement 2024 stats: 95% placed, Highest CTC ₹42 LPA, Average CTC ₹6.8 LPA. Top recruiters: TCS, Infosys, L&T, Wipro, and 100+ companies.',
  departments: 'WCE has 10 departments: Civil, Mechanical, Computer, Electrical, Electronics, IT, Instrumentation, Chemical, Production Engineering, and MBA.',
  hostel:      'WCE provides separate hostel facilities for boys and girls on campus. Contact the hostel warden for availability and fees.',
  naac:        'WCE is NAAC A+ Accredited, ranked in NIRF 2024, and is a Government Aided Autonomous Institution affiliated to Shivaji University.',
  contact:     'Phone: +91 233 2700 170 | Email: principal@walchandsangli.ac.in | Web: www.walchandsangli.ac.in',
  location:    'WCE is located at Vishrambag, Sangli – 416415, Maharashtra. Near Sangli Railway Station.',
  research:    'WCE has 200+ publications per year, 50+ Ph.D. scholars, 30+ patents. Research funded by DST, AICTE, and industry.',
};

function toggleChat() {
  document.getElementById('chat-window').classList.toggle('open');
}

function sendChat() {
  const inp = document.getElementById('chat-input');
  const msg = inp.value.trim();
  if (!msg) return;
  addMsg(msg, 'user');
  inp.value = '';
  setTimeout(() => addMsg(getBotReply(msg), 'bot'), 600);
}

function sendSug(text) {
  addMsg(text, 'user');
  setTimeout(() => addMsg(getBotReply(text), 'bot'), 600);
}

function addMsg(text, role) {
  const el = document.createElement('div');
  el.className = 'chat-msg ' + role;
  el.textContent = text;
  const msgs = document.getElementById('chat-messages');
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

function getBotReply(q) {
  const ql = q.toLowerCase();
  for (const [key, val] of Object.entries(chatKB)) {
    if (ql.includes(key)) return val;
  }
  if (ql.includes('hello') || ql.includes('hi')) {
    return 'Hello! How can I help you today? Ask about admissions, placements, departments, hostel, or anything about WCE!';
  }
  if (ql.includes('thank')) {
    return 'You are welcome! Feel free to ask anything else. 😊';
  }
  return 'I\'ll help you with that! For detailed information, please contact:\n📧 info@walchandsangli.ac.in\n📞 +91 233 2700 170\nOr visit www.walchandsangli.ac.in';
}

/* ══════════════════════════════════════════════════
   PLACEMENT CAROUSEL
   ══════════════════════════════════════════════════ */
let carouselIndex = 0;
const CARDS_VISIBLE = 2;

function updateCarousel() {
  const track = document.getElementById('place-track');
  if (!track) return;
  const cards = track.querySelectorAll('.place-student-card');
  const totalCards = cards.length;
  const maxIndex = totalCards - CARDS_VISIBLE;
  if (carouselIndex < 0) carouselIndex = maxIndex;
  if (carouselIndex > maxIndex) carouselIndex = 0;

  // Card width + gap
  const card = cards[0];
  const viewport = track.parentElement;
  const gap = 10;
  const cardWidth = (viewport.offsetWidth - gap) / CARDS_VISIBLE;
  track.style.transform = `translateX(-${carouselIndex * (cardWidth + gap)}px)`;

  // Update dots
  const dots = document.querySelectorAll('.cdot');
  dots.forEach((d, i) => d.classList.toggle('active', i === carouselIndex));
}

function shiftCarousel(dir) {
  carouselIndex += dir;
  updateCarousel();
  resetAutoPlay();
}

function goToSlide(idx) {
  carouselIndex = idx;
  updateCarousel();
  resetAutoPlay();
}

let autoPlayTimer = null;
function startAutoPlay() {
  autoPlayTimer = setInterval(() => {
    carouselIndex++;
    updateCarousel();
  }, 3500);
}
function resetAutoPlay() {
  clearInterval(autoPlayTimer);
  startAutoPlay();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();
  startAutoPlay();
  window.addEventListener('resize', updateCarousel);
});

/* ══════════════════════════════════════════════════
   HERO SLIDESHOW
   ══════════════════════════════════════════════════ */
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-bg-slide');
  slides.forEach((slide, index) => {
    if (index === 0) slide.classList.add('active');
  });
}

function updateHeroSlide() {
  const slides = document.querySelectorAll('.hero-bg-slide');
  const active = document.querySelector('.hero-bg-slide.active');
  if (active) {
    active.classList.remove('active');
    const next = active.nextElementSibling || slides[0];
    next.classList.add('active');
  }
}

function startHeroAutoPlay() {
  setInterval(updateHeroSlide, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlideshow();
  startHeroAutoPlay();
});

/* ── Add missing translation keys ───────────────── */
(function patchTranslations() {
  if (typeof translations === 'undefined') return;
  const patches = {
    en: { navStudentLife: 'Student Life' },
    hi: { navStudentLife: 'छात्र जीवन' },
    mr: { navStudentLife: 'विद्यार्थी जीवन' }
  };
  ['en','hi','mr'].forEach(lang => {
    Object.assign(translations[lang], patches[lang]);
  });
})();
