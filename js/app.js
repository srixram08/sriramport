/**
 * SRIRAM S — Portfolio Application Logic & Interactivity
 * Light Mode (White Background & Dark Typography)
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Render Content
  renderProjects('all');
  renderSkills();
  renderHackathons();
  renderCertifications();
  initTerminal();
  initAudioSynthesizer();
  initNavigation();
  initContactForm();
  initAutoVoiceOverview();

  // Re-run Lucide icons after dynamic DOM insertions
  setTimeout(() => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 100);
});

/* ==========================================================================
   1. Dynamic Render Functions
   ========================================================================== */

function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(project => {
    const techTags = project.techStack.slice(0, 4).map(t => `<span class="work-tag">${t}</span>`).join('');
    
    return `
      <div class="work-card" data-id="${project.id}">
        <div class="work-card-header">
          <div class="work-icon-box">
            <i data-lucide="${project.heroIcon || 'box'}"></i>
          </div>
          <span class="work-badge">${project.badge.split('•')[0]}</span>
        </div>
        
        <h3 class="work-title">${project.title}</h3>
        <div class="work-domain">${project.domain}</div>
        <p class="work-summary">${project.subtitle}</p>
        
        <div class="work-tags-row">
          ${techTags}
          ${project.techStack.length > 4 ? `<span class="work-tag">+${project.techStack.length - 4} more</span>` : ''}
        </div>
        
        <div class="work-card-foot">
          <button class="btn-open-arch" onclick="openProjectModal('${project.id}')">
            Explore Architecture <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
          </button>
          <div style="display: flex; gap: 10px; align-items: center;">
            ${project.links.github ? `
              <a href="${project.links.github}" target="_blank" style="color: #000; display: flex; align-items: center;" title="Source Code">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>` : ''}
            ${project.links.demo ? `
              <a href="${project.links.demo}" target="_blank" style="color: #000; display: flex; align-items: center;" title="Live System">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

window.filterProjects = function(category, btnElement) {
  playCyberTone(440, 'sine', 0.05);
  document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderProjects(category);
};

function renderSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container || !PORTFOLIO_DATA.skills) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
    <div class="skill-category-box">
      <div class="skill-box-head">
        <div class="skill-cat-icon">
          <i data-lucide="${cat.icon}"></i>
        </div>
        <h3 class="skill-cat-name">${cat.category}</h3>
      </div>
      <div class="skill-pill-tags">
        ${cat.items.map(item => `
          <span class="skill-chip">${item}</span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderHackathons() {
  const container = document.getElementById('hackathons-timeline-container');
  if (!container || !PORTFOLIO_DATA.hackathons) return;

  container.innerHTML = PORTFOLIO_DATA.hackathons.map(h => `
    <div class="timeline-step">
      <div class="timeline-node-pin"></div>
      <div class="timeline-card-box">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
          <h3 style="font-size: 1.2rem; font-weight: 700; color: #000;">${h.title}</h3>
          <span style="font-family: var(--font-mono); font-size: 0.78rem; background: #000000; color: #ffffff; padding: 4px 10px; border-radius: 6px; font-weight: 600;">${h.role}</span>
        </div>
        <div style="color: var(--text-muted); font-size: 0.88rem; font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
          <i data-lucide="award" style="width: 16px; height: 16px; color: #000;"></i> ${h.organization} • <span style="color: #000;">Project: ${h.project}</span>
        </div>
        <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">${h.summary}</p>
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certs-grid-container');
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(c => `
    <div class="cert-pill-card">
      <div class="cert-icon-frame">
        <i data-lucide="${c.icon}"></i>
      </div>
      <div>
        <h4 style="font-size: 0.95rem; font-weight: 700; color: #000; margin-bottom: 4px;">${c.title}</h4>
        <div style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">${c.issuer}</div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. Project Modal Handler (Light Mode)
   ========================================================================== */

window.openProjectModal = function (projectId) {
  playCyberTone(660, 'triangle', 0.08);
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalContent = document.getElementById('project-modal-content');
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <button onclick="closeProjectModal()" style="position: absolute; top: 22px; right: 22px; background: #f4f4f5; border: 1px solid var(--border-light); color: #000; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;">
      <i data-lucide="x"></i>
    </button>
    
    <div style="margin-bottom: 22px;">
      <span style="display: inline-block; font-family: var(--font-mono); font-size: 0.82rem; background: #000000; color: #fff; padding: 4px 14px; border-radius: 100px; margin-bottom: 12px; font-weight: 600;">${project.badge}</span>
      <h2 style="font-size: 2.2rem; font-weight: 800; color: #000; margin-bottom: 6px;">${project.title}</h2>
      <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.9rem; margin-bottom: 14px; font-weight: 600;">${project.domain}</div>
      <p style="color: var(--text-secondary); font-size: 1.02rem; line-height: 1.6;">${project.subtitle}</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 22px;">
      <div style="background: #f4f4f5; border-left: 3px solid #71717a; padding: 14px 18px; border-radius: 0 10px 10px 0;">
        <strong style="color: #000; display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <i data-lucide="alert-triangle"></i> Mission Problem
        </strong>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${project.problem}</p>
      </div>

      <div style="background: #fafafa; border-left: 3px solid #000000; padding: 14px 18px; border-radius: 0 10px 10px 0; border: 1px solid var(--border-light); border-left-width: 3px;">
        <strong style="color: #000000; display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <i data-lucide="check-circle-2"></i> Engineered Solution
        </strong>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${project.solution}</p>
      </div>
    </div>

    ${project.innovation ? `
      <div style="background: #f8fafc; border: 1px solid var(--border-light); border-radius: 12px; padding: 16px 18px; margin-bottom: 22px;">
        <div style="color: #000000; font-weight: 700; margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="sparkles"></i> Core Architectural Innovation
        </div>
        <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55;">${project.innovation}</div>
      </div>
    ` : ''}

    <div style="background: #f4f4f5; border: 1px solid var(--border-light); border-radius: 12px; padding: 18px; margin-bottom: 22px;">
      <div style="color: #000000; font-family: var(--font-mono); font-size: 0.82rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; font-weight: 700;">
        <i data-lucide="git-branch"></i> Execution Architecture Pipeline
      </div>
      <div style="font-family: var(--font-mono); font-size: 0.84rem; color: #000; line-height: 1.7; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px dashed rgba(0, 0, 0, 0.2);">
        ${project.architecture}
      </div>
    </div>

    <div style="margin-bottom: 22px;">
      <h4 style="font-size: 1.05rem; color: #000; margin-bottom: 12px; font-weight: 700;">Key Capabilities</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 8px;">
        ${project.features.map(f => `
          <div style="background: #ffffff; border: 1px solid var(--border-light); padding: 8px 12px; border-radius: 6px; font-size: 0.84rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
            <i data-lucide="check" style="color: #000; width: 14px; height: 14px; flex-shrink: 0;"></i> <span>${f}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 1.05rem; color: #000; margin-bottom: 10px; font-weight: 700;">Tech Stack</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${project.techStack.map(t => `
          <span style="font-family: var(--font-mono); font-size: 0.78rem; background: #f1f5f9; border: 1px solid var(--border-light); color: #000; padding: 4px 10px; border-radius: 6px; font-weight: 500;">
            ${t}
          </span>
        `).join('')}
      </div>
    </div>

    <div style="display: flex; align-items: center; gap: 14px; border-top: 1px solid var(--border-light); padding-top: 18px;">
      ${project.links.github ? `<a href="${project.links.github}" target="_blank" class="filter-pill" style="font-size: 0.85rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> View GitHub Repo</a>` : ''}
      ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" class="btn-pill-white" style="font-size: 0.82rem; padding: 10px 22px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> Launch Live</a>` : ''}
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
};

window.closeProjectModal = function () {
  playCyberTone(300, 'sine', 0.05);
  const modalOverlay = document.getElementById('project-modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});
document.addEventListener('click', (e) => {
  const modalOverlay = document.getElementById('project-modal-overlay');
  if (e.target === modalOverlay) closeProjectModal();
});

/* ==========================================================================
   3. Interactive Terminal (REPL)
   ========================================================================== */
function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  if (!input || !output) return;

  output.textContent = `[SRIRAM-CLI v4.2.0-ONLINE]
Telemetry link active. Type 'help' or click quick commands below.
`;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      if (cmd) {
        processCommand(cmd);
        input.value = '';
      }
    }
  });
}

window.runTerminalCommand = function (commandText) {
  playCyberTone(550, 'square', 0.04);
  const input = document.getElementById('terminal-input');
  if (input) {
    input.value = commandText;
    processCommand(commandText.toLowerCase());
    input.value = '';
  }
};

function processCommand(cmd) {
  playCyberTone(520, 'sine', 0.05);
  const output = document.getElementById('terminal-output');
  if (!output) return;

  let response = '';

  switch (cmd) {
    case 'help':
      response = `COMMANDS: tracex, trustforge, revivex, ocean-sim, skills, projects, hackathons, certs, bio, hire, clear`;
      break;
    case 'bio':
    case 'whoami':
      response = `Candidate: ${PORTFOLIO_DATA.profile.name} | ${PORTFOLIO_DATA.profile.degree} (${PORTFOLIO_DATA.profile.year}) | ${PORTFOLIO_DATA.profile.college} | 🟢 ${PORTFOLIO_DATA.profile.status}`;
      break;
    case 'tracex':
      response = `[TraceX — SIH 2026] Domain: Space Tech/AI | NTRO SIH26143 | "Rewind the Ocean" Hydrodynamic Origin Attribution`;
      break;
    case 'trustforge':
      response = `[TrustForge] Enterprise AI Agent Red Teaming | Tool-Call Security & Dynamic DNA Guardrails`;
      break;
    case 'revivex':
      response = `[ReviveX] AI Self-Healing Exam Platform | 100Hz Telemetry & Shadow Session Rollbacks`;
      break;
    case 'ocean-sim':
      response = `[SIMULATION: REWIND THE OCEAN]
Ingesting SAR Sentinel-1 imagery... [DONE]
Detected slick area: 14.8 km² at Lat 12.48°N, Lon 80.24°E
Computing backward drift: T minus 18.5 hours
Correlating AIS vessel corridors... [MATCH: Bulk Carrier 'MV Poseidon-IV' Risk: 94.2%]`;
      break;
    case 'skills':
      response = `Skills: AI/ML, IoT Embedded, Space Tech/GIS, React, Node.js, Postgres, Bitcask Storage, ESP32, Python, C++`;
      break;
    case 'projects':
      response = `12 Projects: TraceX, TrustForge, ReviveX, SENTINELX, CrimeVision AI, Inventra ERP, ForgeDB, Lumora, Smart Energy, Smart Patient, Smart Waste, Copymate`;
      break;
    case 'hire':
      response = `Email: ${PORTFOLIO_DATA.profile.links.email} | GitHub: ${PORTFOLIO_DATA.profile.links.github} | LinkedIn: ${PORTFOLIO_DATA.profile.links.linkedin}`;
      break;
    case 'clear':
      output.textContent = '';
      return;
    default:
      response = `Unknown command: '${cmd}'. Type 'help' for commands.`;
      break;
  }

  output.textContent += `\n> ${cmd}\n${response}\n`;
  const body = document.querySelector('.terminal-console-body');
  if (body) body.scrollTop = body.scrollHeight;
}

/* ==========================================================================
   4. Audio Synthesizer
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioSynthesizer() {
  const toggleBtn = document.getElementById('sfx-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      toggleBtn.innerHTML = soundEnabled 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
    });
  }
}

function playCyberTone(frequency = 440, type = 'sine', duration = 0.06) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

/* ==========================================================================
   5. Navigation Scroll Spy
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 150;
      if (window.scrollY >= top && window.scrollY < top + sec.offsetHeight) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   6. Contact Form & Clipboard
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      playCyberTone(800, 'sine', 0.1);
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const msg = document.getElementById('contact-message').value;
      window.location.href = `mailto:${PORTFOLIO_DATA.profile.links.email}?subject=Internship Opportunity from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + name + ' (' + email + ')')}`;
    });
  }
}

window.copyToClipboard = function (text, label) {
  playCyberTone(600, 'sine', 0.05);
  navigator.clipboard.writeText(text).then(() => {
    alert(`${label || 'Copied'} to clipboard: ${text}`);
  });
};

/* ==========================================================================
   7. AI Voice Overview (SpeechSynthesis)
   ========================================================================== */
let isVoicePlaying = false;

window.toggleVoiceOverview = function () {
  if (!('speechSynthesis' in window)) {
    alert('Speech synthesis is not supported in this browser.');
    return;
  }

  const btnText = document.getElementById('voice-btn-text');
  const btnIcon = document.getElementById('voice-btn-icon');
  const waveAnim = document.getElementById('voice-wave-anim');

  function resetUI() {
    isVoicePlaying = false;
    if (btnText) btnText.textContent = 'Listen to AI Voice Bio';
    if (btnIcon) btnIcon.setAttribute('data-lucide', 'volume-2');
    if (waveAnim) waveAnim.style.display = 'none';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  if (isVoicePlaying) {
    window.speechSynthesis.cancel();
    resetUI();
    return;
  }

  window.speechSynthesis.cancel(); // Clear queue

  const introScript = "Hi, I am Sriram S! I am a 2nd year Computer Science and Engineering student at Sri Ramakrishna Institute of Technology. I specialize in architecting resilient AI systems, geospatial intelligence platforms, and high-performance full-stack architectures. Welcome to my portfolio! Explore my flagship project TraceX for Smart India Hackathon 2026, my TrustForge AI agent security platform, ReviveX self-healing examination system, and my IoT energy telemetry solutions. Feel free to connect or reach out for internships and collaborations!";

  const utterance = new SpeechSynthesisUtterance(introScript);
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Karen') || v.name.includes('Alex'))) || voices.find(v => v.lang.startsWith('en'));

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.onstart = () => {
    isVoicePlaying = true;
    if (btnText) btnText.textContent = 'Pause AI Voice';
    if (btnIcon) btnIcon.setAttribute('data-lucide', 'pause');
    if (waveAnim) waveAnim.style.display = 'inline-flex';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  utterance.onend = resetUI;
  utterance.onerror = resetUI;

  playCyberTone(700, 'sine', 0.08);
  window.speechSynthesis.speak(utterance);
};

/* ==========================================================================
   8. Autoplay AI Voice Overview on Visit
   ========================================================================== */
function initAutoVoiceOverview() {
  let hasStarted = false;

  function attemptPlay() {
    if (hasStarted || isVoicePlaying) return;
    hasStarted = true;
    window.toggleVoiceOverview();
  }

  // Attempt auto-play after 10 seconds (10000ms)
  setTimeout(() => {
    if (!hasStarted) {
      attemptPlay();
    }
  }, 10000);

  // Fallback: If browser blocks audio autoplay before gesture, start on first user interaction
  const userGestureHandler = () => {
    if (!hasStarted) {
      attemptPlay();
    }
    window.removeEventListener('click', userGestureHandler);
    window.removeEventListener('scroll', userGestureHandler);
    window.removeEventListener('keydown', userGestureHandler);
    window.removeEventListener('touchstart', userGestureHandler);
  };

  window.addEventListener('click', userGestureHandler, { once: true });
  window.addEventListener('scroll', userGestureHandler, { once: true });
  window.addEventListener('keydown', userGestureHandler, { once: true });
  window.addEventListener('touchstart', userGestureHandler, { once: true });
}

