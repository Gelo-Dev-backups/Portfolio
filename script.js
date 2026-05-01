/* =================================================================
   DATABASE  — edit everything here
================================================================= */

const DB = {

  roles: [
    'Web Developer',
    'System Developer',
    'Digital Creator',
    'Video Editor',
  ],

  services: [
    { icon: 'fa-code',        title: 'Web Development',   desc: 'Modern, responsive websites and web apps built with cutting-edge tech.' },
    { icon: 'fa-database',    title: 'System Development', desc: 'Scalable backend systems, dashboards, and enterprise solutions.' },
    { icon: 'fa-palette',     title: 'Digital Design',     desc: 'Brand identities, UI/UX design, and visual systems that stand out.' },
    { icon: 'fa-film',        title: 'Video Editing',      desc: 'Cinematic brand films, social content, and motion graphics.' },
  ],

  projects: [
    {
      id: 1,
      title:      'ISCC Guidance System',
      desc:       'Student record-keeping and document issuance management system for a college guidance office.',
      rating:     5,
      image:      'ISCCg.jpg',
      systemImg:  'ISCCg2.jpg',
      problem:    'Manual, paper-based administrative filing at the college guidance office caused frequent data loss, slow document retrieval, and inefficient student record management.',
      solution:   'Built a web-based platform that fully digitizes student records and document issuance, eliminating manual paperwork and data loss through a centralized, searchable database system.',
      details:    'A web-based management system that streamlines student record-keeping and document issuance. Features include student profile management, digital document generation, record search, and data archiving — replacing the old paper filing system entirely.',
      tech:       ['PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS3'],
    },
    {
      id: 2,
      title:      'ISCC ID System',
      desc:       'Automated student ID management system with direct Photoshop integration for card production.',
      rating:     5,
      image:      'ISCC.jpg',
      systemImg:  'ISCC2.jpg',
      problem:    'Manual ID card production caused long delays, data entry errors, and inconsistent output during enrollment periods at Ilocos Sur Community College.',
      solution:   'Developed a web system that manages student registration through ID generation, integrating directly with Adobe Photoshop via automated ExtendScript (JSX) to produce finished ID cards without manual data entry.',
      details:    'A full-cycle Student ID Management System handling enrollment registration, record keeping, and automated ID card production. The system communicates with Adobe Photoshop through a custom JSX automation script, pulling student data and photo directly into a Photoshop template to generate print-ready IDs — dramatically cutting processing time per student.',
      tech:       ['PHP', 'MySQL', 'JavaScript', 'Adobe Photoshop', 'ExtendScript (JSX)'],
    },
    {
      id: 3,
      title:      'Flavor X Vapor POS System',
      desc:       'Point-of-sale and inventory management system with FEFO logic and ABC classification for vape retail.',
      rating:     5,
      image:      'Vape1.jpg',
      systemImg:  'Vape.jpg',
      problem:    'A high-volume vape shop suffered from inaccurate stock tracking, inconsistent pricing, and manual record-keeping that caused stock discrepancies and revenue loss.',
      solution:   'Built a web-based POS platform that digitizes sales transactions, implements First-Expired First-Out (FEFO) inventory logic with ABC classification, and automates store credit issuance through a dedicated return module.',
      details:    'A comprehensive retail management system featuring sales transaction processing, product catalog management, variant-level stock control, FEFO expiry tracking, ABC inventory prioritization, a customer return and store credit module, and sales analytics dashboards.',
      tech:       ['PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS3'],
    },
    {
      id: 4,
      title:      'TMF System',
      desc:       'QR code-driven agricultural supply distribution and inventory management platform.',
      rating:     5,
      image:      'TMF1.jpg',
      systemImg:  'TMF.jpg',
      problem:    'Agricultural supply distribution suffered from manual recording errors, slow queues during issuance, and undocumented equipment returns — making accountability nearly impossible.',
      solution:   'Developed a QR code-driven web platform that instantly verifies farmer identities via barcode scan, automatically deducts inventory, logs every transaction, and generates printable receipts in real time.',
      details:    'A real-time agricultural distribution system built with HTML5-QRCode for instant barcode scanning at the point of issuance. Features include farmer identity verification, automatic stock deduction, transaction logging, return tracking, printable receipt generation, and inventory summary reporting — ensuring full accountability of supply distribution.',
      tech:       ['PHP', 'MySQL', 'JavaScript', 'HTML5-QRCode', 'SweetAlert2'],
    },
    {
      id: 5,
      title:      'VetCare System',
      desc:       'Full-stack veterinary clinic management platform with automated appointment workflows and email notifications.',
      rating:     5,
      image:      'VET1.jpg',
      systemImg:  'VET.jpg',
      problem:    'A veterinary clinic dealt with manual scheduling delays, inefficient client communication, and fragmented pet medical records spread across physical files.',
      solution:   'Created a full-stack web platform that automates appointment workflows, sends real-time email status updates to clients via PHPMailer, and centralizes all medical histories and clinic analytics in one dashboard.',
      details:    'A complete clinic management solution covering client and pet registration, appointment booking and status management, automated email notifications for confirmations and reminders, centralized medical record histories per patient, and an analytics dashboard for clinic performance tracking.',
      tech:       ['PHP', 'MySQL', 'AJAX', 'PHPMailer', 'Bootstrap 5'],
    },
    {
      id: 6,
      title:      'Bantay PNP IMS',
      desc:       'Web-based police logistics and asset tracking system for equipment, vehicles, and firearms.',
      rating:     5,
      image:      'pnp1.jpg',
      systemImg:  'pnp.jpg',
      problem:    'Manual logbook-based tracking of police equipment, vehicles, and firearms caused frequent recording errors, undocumented issuances, and missed asset expiration dates.',
      solution:   'Built a web-based inventory platform that automatically tracks item issuances, monitors vehicle mobility conditions, logs full repair histories, and generates automated analytics and printable reports for accountability.',
      details:    'A comprehensive asset management system for law enforcement logistics. Features include equipment issuance and return tracking, vehicle status and mobility monitoring, firearm registry, repair and maintenance logging, automated expiration alerts, printable reports, and a real-time analytics dashboard built on Material Dashboard.',
      tech:       ['PHP', 'MySQL', 'JavaScript', 'Material Dashboard', 'Chart.js'],
    },
    {
      id: 7,
      title:      'KickZone',
      desc:       'API-driven premium sneaker e-commerce platform with variant pricing and hybrid cart synchronization.',
      rating:     5,
      image:      'Kickzone.jpg',
      systemImg:  'Kickzone2.jpg',
      problem:    'A premium sneaker retailer struggled with inconsistent pricing across shoe variants, inaccurate stock tracking, and a disjointed customer order management experience.',
      solution:   'Developed a high-performance e-commerce platform with strict variant-specific filtering and pricing, and a hybrid cart system that synchronizes local storage with database records upon user login for a seamless experience.',
      details:    'A feature-rich sneaker store with product catalog management, variant-level pricing (size/colorway), strict availability filtering, hybrid cart (guest local storage + authenticated DB sync), order management, email order confirmations via PHPMailer, and a seller-side inventory dashboard.',
      tech:       ['PHP', 'MySQL', 'JavaScript', 'PHPMailer', 'Bootstrap 5'],
    },
    {
      id: 8,
      title:      'Brgy. Napo BHW IMS',
      desc:       'Centralized barangay health records and automated immunization monitoring system.',
      rating:     5,
      image:      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      systemImg:  'barangay.jpg',
      problem:    'Barangay health workers managed resident health data through manual paper-based records, making immunization tracking, health categorization, and reporting highly inefficient.',
      solution:   'Developed an admin-only web platform that digitizes resident health records, dynamically categorizes residents by health status, and manages specialized maternal and child immunization records — all in a secure offline-capable local server environment.',
      details:    'A health information system for barangay-level use. Features include resident registration and health profiling, dynamic health status categorization, maternal health record tracking, child immunization scheduling and monitoring, automated email reports via PHPMailer, and an offline-capable local deployment using MySQLi for reliable performance without internet dependency.',
      tech:       ['PHP', 'MySQLi', 'AJAX', 'Bootstrap 5', 'PHPMailer'],
    },
    {
      id: 9,
      title:      'Mood Notes System',
      desc:       'Personal emotional tracking and daily journaling platform with mood pattern analysis.',
      rating:     4,
      image:      'mood1.jpg',
      systemImg:  'mood.jpg',
      problem:    'Users lacked a structured and consistent way to track their emotional health and personal reflections over time in an organized digital format.',
      solution:   'Built an interactive web platform where users select daily moods, write journal notes, and store entries in a centralized database — with automated email notifications and summaries to encourage consistent engagement.',
      details:    'A personal wellness tracking app featuring a mood selector, daily journaling with timestamped entries, mood history visualization, emotional pattern summaries, secure per-user data storage, and automated email reminders and weekly recap notifications to promote healthy self-reflection habits.',
      tech:       ['PHP', 'MySQL', 'Bootstrap 5', 'PHPMailer', 'Chart.js'],
    },
    {
      id: 10,
      title:      'Med-Core HIS',
      desc:       'Hospital information and diagnostic management system with real-time analytics and secure email workflows.',
      rating:     5,
      image:      'med.jpg',
      systemImg:  'med2.jpg',
      problem:    'A hospital faced inefficiencies in manual patient tracking, appointment scheduling, and disconnected laboratory reporting — impacting both staff productivity and patient care quality.',
      solution:   'Developed an admin and doctor-focused web platform that automates patient workflows, integrates real-time diagnostic data visualization, and sends secure email notifications to ensure seamless, accurate communication across departments.',
      details:    'A comprehensive hospital information system featuring patient registration and profile management, appointment scheduling and queue management, laboratory result entry and reporting, real-time diagnostic charts via Chart.js, doctor and admin dashboards, secure inter-department email notifications, and a responsive modern UI for both desktop and tablet use.',
      tech:       ['PHP', 'MySQL', 'Bootstrap 5', 'Chart.js', 'PHPMailer'],
    },
  ],

  testimonials: [
    {
      id: 1,
      name:     'Marc Oandasan',
      role:     'IT Graduate & Digital Creator, ISCC',
      feedback: 'Absolutely phenomenal work. The website exceeded every expectation — the animations alone left our clients in awe. Our capstone project has been successfully completed, and our stakeholders are genuinely happy with the results. Everything is polished, clean, and professionally done. On top of that, he is incredibly kind, easy to talk to, and always on time. Truly a cut above.',
      rating:   5,
      avatar:   'MO',
    },
    {
      id: 2,
      name:     ' Jhaydel Fernandez',
      role:     'IT employeee, Flavor X Vapor',
      feedback: 'Outstanding work that exceeded expectations, with impressive animations and strong technical quality. Despite working as a cashier, he demonstrated high-level skills, professionalism, and attention to detail. He is also kind, easy to work with, and consistently on time',
      rating:   5,
      avatar:   'JF',
    },
    {
      id: 3,
      name:     'Winnie',
      role:     'IT Student, ISCC',
      feedback: 'Excellent work that exceeded expectations, with stunning results across all activities. He is easy to talk to, consistently on time, and delivers with impressive quality and attention to detail — truly reliable and professional.',
      rating:   5,
      avatar:   'WA',
    },
    {
      id: 5,
      name:     'Edward Chua',
      role:     'IT Student, ISCC',
      feedback: 'Working with him saved me countless hours — every part of the project was polished and thoughtfully done. All my activities turned out stunning, and the attention to detail really shows. Communication was smooth since he’s easy to talk to, and he’s always on time. 10/10 recommend..',
      rating:   4,
      avatar:   'EC',
    },
    {
      id: 5,
      name:     'Michael Raganit',
      role:     'IT Student, ISCC',
      feedback: 'He is a great web developer, very professional and kind. He is also very easy to talk to and always on time. I highly recommend him for any web development needs.',
      rating:   4,
      avatar:   'EC',
    },
    
    {
      id: 6,
      name:     'Anonymous',
      role:     'ISCC Instructor',
      feedback: 'He consistently demonstrates strong skills in web development and contributes positively to the school tech team. His work is reliable, well-structured, and delivered with professionalism. He is collaborative, approachable, and a valuable member of the team.',
      rating:   4,
      avatar:   'A',
    },
  ],

  socials: [
    { icon: 'fa-brands fa-github',    href: 'https://github.com/Gelo-Dev-backups', label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin',  href: 'https://www.linkedin.com/in/angelo-james-de-gracia-271a1b36b/', label: 'LinkedIn' },
    { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/_geloinnovates/', label: 'Instagram' },
    { icon: 'fa-brands fa-facebook', href: 'https://www.facebook.com/profile.php?id=61578994923386', label: 'Facebook' },
  ],

};

/* =================================================================
   RENDER HELPERS
================================================================= */

function stars(n) {
  let s = '';
  for (let i = 1; i <= 5; i++) s += `<i class="fa fa-star${i > n ? '-o' : ''}" ${i > n ? 'style="opacity:0.3"' : ''}></i> `;
  return s;
}

/* =================================================================
   SERVICES
================================================================= */
const servicesEl = document.getElementById('services-grid');
DB.services.forEach((s, i) => {
  const div = document.createElement('div');
  div.className = 'service-card';
  div.setAttribute('data-aos', 'fade-up');
  div.setAttribute('data-aos-delay', i * 80);
  div.innerHTML = `
    <div class="service-icon"><i class="fa ${s.icon}"></i></div>
    <div class="service-title">${s.title}</div>
    <div class="service-desc">${s.desc}</div>`;
  servicesEl.appendChild(div);
});

/* =================================================================
   PROJECTS  (no filter — show all)
================================================================= */
const projectsEl = document.getElementById('projects-grid');

function renderProjects() {
  projectsEl.innerHTML = '';
  DB.projects.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.setAttribute('data-aos', 'fade-up');
    div.setAttribute('data-aos-delay', i * 60);
    div.innerHTML = `
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="project-thumb-overlay"><span>View Project →</span></div>
      </div>
      <div class="project-info">
        <div class="project-meta">
          <span class="stars">${stars(p.rating)}</span>
        </div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
      </div>`;
    div.onclick = () => openModal(p);
    projectsEl.appendChild(div);
  });
  AOS.refresh();
}

renderProjects();

/* =================================================================
   MODAL
================================================================= */
function openModal(p) {
  document.getElementById('modal-img').src          = p.image;
  document.getElementById('modal-category').textContent = '';
  document.getElementById('modal-title').textContent    = p.title;
  document.getElementById('modal-stars').innerHTML      = `<span class="stars">${stars(p.rating)}</span>`;
  document.getElementById('modal-problem').textContent  = p.problem;
  document.getElementById('modal-solution').textContent = p.solution;
  document.getElementById('modal-details').textContent  = p.details;

  // System image
  document.getElementById('modal-system-img').src = p.systemImg || p.image;

  // Tech
  const techEl = document.getElementById('modal-tech');
  techEl.innerHTML = '';
  p.tech.forEach(t => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = t;
    techEl.appendChild(span);
  });

  // Demo link
  const demoWrap = document.getElementById('modal-demo-wrap');
  demoWrap.innerHTML = p.demo && p.demo !== '#'
    ? `<a href="${p.demo}" target="_blank" class="btn btn-dark">Live Demo &nbsp;<i class="fa fa-arrow-up-right-from-square fa-sm"></i></a>`
    : '';

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal').scrollTop = 0;
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay') && !e.currentTarget.classList.contains('modal-close')) return;
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal({}); });

/* =================================================================
   TESTIMONIALS CAROUSEL
================================================================= */
let tCurrent = 0;
const slidesEl = document.getElementById('testimonial-slides');
const dotsEl   = document.getElementById('carousel-dots');
const countEl  = document.getElementById('carousel-count');

DB.testimonials.forEach((t, i) => {
  slidesEl.innerHTML += `
    <div class="testimonial-slide ${i === 0 ? 'active' : ''}">
      <i class="fa fa-quote-left t-quote-icon"></i>
      <div class="t-stars">${stars(t.rating)}</div>
      <blockquote class="t-feedback">"${t.feedback}"</blockquote>
      <div class="t-author">
        <div class="t-avatar">${t.avatar}</div>
        <div>
          <div class="t-name">${t.name}</div>
          <div class="t-role">${t.role}</div>
        </div>
      </div>
    </div>`;

  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.style.width = i === 0 ? '24px' : '8px';
  dot.onclick = () => goToSlide(i);
  dotsEl.appendChild(dot);
});

function goToSlide(n) {
  document.querySelectorAll('.testimonial-slide')[tCurrent].classList.remove('active');
  document.querySelectorAll('.dot')[tCurrent].classList.remove('active');
  document.querySelectorAll('.dot')[tCurrent].style.width = '8px';
  tCurrent = (n + DB.testimonials.length) % DB.testimonials.length;
  document.querySelectorAll('.testimonial-slide')[tCurrent].classList.add('active');
  document.querySelectorAll('.dot')[tCurrent].classList.add('active');
  document.querySelectorAll('.dot')[tCurrent].style.width = '24px';
  countEl.textContent = String(tCurrent + 1).padStart(2,'0') + ' / ' + String(DB.testimonials.length).padStart(2,'0');
}

function tSlide(dir) { goToSlide(tCurrent + dir); }

// Auto-play
setInterval(() => tSlide(1), 5000);

// Mini cards
const tCardsEl = document.getElementById('t-cards-grid');
DB.testimonials.forEach(t => {
  tCardsEl.innerHTML += `
    <div class="t-mini-card">
      <div class="t-mini-avatar">${t.avatar}</div>
      <div>
        <div class="t-mini-name">${t.name}</div>
        <div class="t-mini-stars">${stars(t.rating)}</div>
      </div>
    </div>`;
});

/* =================================================================
   SOCIALS
================================================================= */
const socialsEl = document.getElementById('social-links');
DB.socials.forEach(s => {
  socialsEl.innerHTML += `
    <a href="${s.href}" class="social-link" title="${s.label}" aria-label="${s.label}">
      <i class="${s.icon}"></i>
    </a>`;
});

/* =================================================================
   ROLE TYPEWRITER
================================================================= */
let rIdx = 0;
const roleEl = document.getElementById('hero-role');

function cycleRole() {
  roleEl.classList.remove('visible');
  setTimeout(() => {
    rIdx = (rIdx + 1) % DB.roles.length;
    roleEl.textContent = '— ' + DB.roles[rIdx];
    roleEl.classList.add('visible');
  }, 400);
}

setTimeout(() => {
  roleEl.classList.add('visible');
  setInterval(cycleRole, 2800);
}, 500);

/* =================================================================
   NAVBAR SCROLL
================================================================= */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* =================================================================
   DARK MODE
================================================================= */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');
let dark = localStorage.getItem('theme') === 'dark';

function applyTheme() {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeIcon.className = dark ? 'fa fa-sun' : 'fa fa-moon';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

applyTheme();
themeToggle.onclick = () => { dark = !dark; applyTheme(); };

/* =================================================================
   MOBILE MENU
================================================================= */
document.getElementById('hamburger-btn').onclick = () => {
  document.getElementById('mobile-menu').classList.add('open');
};
document.getElementById('mobile-close').onclick = closeMobile;
function closeMobile() {
  document.getElementById('mobile-menu').classList.remove('open');
}


/* =================================================================
   CONTACT FORM SUBMIT
================================================================= */
function submitForm(e) {
  e.preventDefault();

  const btn     = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');
  const form    = document.getElementById('contact-form');

  const name     = document.getElementById('cf-name').value.trim();
  const email    = document.getElementById('cf-email').value.trim();
  const phone    = document.getElementById('cf-phone').value.trim() || 'Not provided';
  const service  = document.getElementById('cf-service').value;
  const budget   = document.getElementById('cf-budget').value || 'Not specified';
  const timeline = document.getElementById('cf-timeline').value || 'Not specified';
  const message  = document.getElementById('cf-message').value.trim();

  const subject = `Portfolio Inquiry - ${service} | From ${name}`;

  const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Budget: ${budget}
Timeline: ${timeline}

Message:
${message}
`;

  // ✅ Gmail compose link
  const gmailURL =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=angelojamesdegracia100@gmail.com" +
    "&su=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  btn.disabled = true;
  btn.innerHTML = "Opening Gmail...";

  // ✅ open Gmail
  const win = window.open(gmailURL, "_blank");

  // fallback
  if (!win) {
    window.location.href = gmailURL;
  }

  setTimeout(() => {
    success.innerHTML = "Gmail opened. Click SEND to finish.";
    success.style.display = "block";

    form.reset();
    btn.disabled = false;
    btn.innerHTML = "Send Message";

    setTimeout(() => {
      success.style.display = "none";
    }, 5000);

  }, 800);
}

/* =================================================================
   AOS INIT
================================================================= */
AOS.init({ once: true, duration: 650, easing: 'ease-out', offset: 60 });