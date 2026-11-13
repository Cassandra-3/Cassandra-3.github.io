(function () {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));
  const published = data.projects.filter((project) => project.status === 'published');
  const planned = data.projects.filter((project) => project.status === 'planned');
  const projectById = new Map(data.projects.map((project) => [project.id, project]));

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const externalLabel = '<span aria-hidden="true">↗</span><span class="sr-only"> opens in a new tab</span>';

  const state = {
    domain: 'all',
    status: 'published',
    allExpanded: false
  };

  function renderFacts() {
    const facts = [
      { value: published.length, label: 'Published projects' },
      { value: data.domains.length, label: 'Evidence domains' },
      { value: data.experience.length, label: 'Professional contexts' },
      { value: planned.length, label: 'In progress / planned builds' }
    ];

    $('#fact-strip').innerHTML = facts.map((fact) => `
      <div class="fact">
        <strong data-counter="${fact.value}">0</strong>
        <span>${escapeHtml(fact.label)}</span>
      </div>
    `).join('');
    $('[data-status-count="published"]').textContent = published.length;
    $('[data-status-count="planned"]').textContent = planned.length;
  }

  function renderFilters() {
    const container = $('[data-filters]');
    const options = [{ id: 'all', label: 'All evidence' }, ...data.domains];

    container.innerHTML = options.map((option) => {
      const count = option.id === 'all'
        ? published.length
        : published.filter((project) => project.domains.includes(option.id)).length;
      return `
        <button class="filter-button" type="button" data-domain="${escapeHtml(option.id)}" aria-pressed="${option.id === 'all'}">
          ${escapeHtml(option.label)}<span class="filter-count">${count}</span>
        </button>
      `;
    }).join('');

    container.addEventListener('click', (event) => {
      const button = event.target.closest('[data-domain]');
      if (!button) return;
      state.domain = button.dataset.domain;
      $$('.filter-button', container).forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      updateProjectVisibility();
    });
  }

  function updateFilterCounts() {
    const projectsForStatus = data.projects.filter((project) => project.status === state.status);
    $$('.filter-button').forEach((button) => {
      const domain = button.dataset.domain;
      const count = domain === 'all'
        ? projectsForStatus.length
        : projectsForStatus.filter((project) => project.domains.includes(domain)).length;
      const countNode = $('.filter-count', button);
      if (countNode) countNode.textContent = count;
    });
  }

  function projectCard(project, index) {
    const isPlanned = project.status === 'planned';
    const statusText = isPlanned ? (project.phase === 'in-progress' ? 'In progress · prototype' : 'Planned · upcoming') : 'Completed project';
    const evidenceLabel = isPlanned ? (project.phase === 'in-progress' ? 'Current work & next steps' : 'Intended evidence') : 'Evidence artifacts';
    const linkText = isPlanned ? 'View roadmap source' : 'Open GitHub project';
    const projectLink = project.github ? `<a class="case-link" href="${escapeHtml(project.github)}" target="_blank" rel="noreferrer">${escapeHtml(linkText)} ${externalLabel}</a>` : '';
    const domains = project.domains.map((id) => data.domains.find((domain) => domain.id === id)?.label || id);

    return `
      <article class="project-card ${isPlanned ? 'is-planned' : ''}" id="project-${escapeHtml(project.id)}" data-project-id="${escapeHtml(project.id)}" data-status="${escapeHtml(project.status)}" data-domains="${escapeHtml(project.domains.join(' '))}" data-accent="${escapeHtml(project.accent)}">
        <details>
          <summary>
            <div class="card-meta">
              <span class="status-badge"><i aria-hidden="true"></i>${escapeHtml(statusText)}</span>
              <span class="card-index">${String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3>${escapeHtml(project.title)}</h3>
            <p class="project-summary">${escapeHtml(project.summary)}</p>
            <div class="card-bottom">
              <span class="type-label">${escapeHtml(project.type)} · ${escapeHtml(project.completed)}</span>
              <span class="expand-icon" aria-hidden="true"></span>
            </div>
          </summary>
          <div class="project-detail">
            <div class="detail-rule"></div>
            <div class="detail-block">
              <p class="detail-label">Contribution</p>
              <p>${escapeHtml(project.contribution)}</p>
            </div>
            <div class="detail-block">
              <p class="detail-label">${escapeHtml(evidenceLabel)}</p>
              <ul class="tag-list">${project.evidence.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
            </div>
            <div class="detail-block">
              <p class="detail-label">Tools & frameworks</p>
              <ul class="tag-list">${project.tools.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
            </div>
            <div class="detail-block">
              <p class="detail-label">Domains</p>
              <ul class="tag-list">${domains.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
            </div>
            <div class="detail-block scope-note"><strong>Scope boundary:</strong> ${escapeHtml(project.scope)}</div>
            ${projectLink}
          </div>
        </details>
      </article>
    `;
  }

  function renderProjects() {
    $('[data-project-grid]').innerHTML = data.projects.map(projectCard).join('');
    updateProjectVisibility();
  }

  function visibleCards() {
    return $$('.project-card').filter((card) => !card.hidden);
  }

  function updateProjectVisibility() {
    const cards = $$('.project-card');
    cards.forEach((card) => {
      const domainMatch = state.domain === 'all' || card.dataset.domains.split(' ').includes(state.domain);
      const statusMatch = card.dataset.status === state.status;
      card.hidden = !(domainMatch && statusMatch);
      if (card.hidden) $('details', card).open = false;
    });

    const count = visibleCards().length;
    const domainName = state.domain === 'all'
      ? 'all practice areas'
      : data.domains.find((domain) => domain.id === state.domain)?.label || state.domain;
    const statusName = state.status === 'published' ? 'completed' : 'in-progress or planned';
    $('[data-results-count]').textContent = `${count} ${statusName} ${count === 1 ? 'project' : 'projects'} · ${domainName}`;
    updateFilterCounts();
    state.allExpanded = false;
    $('[data-expand-all]').textContent = 'Expand all visible';
  }

  function setupProjectControls() {
    $$('[data-status-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        state.status = button.dataset.statusFilter;
        $$('[data-status-filter]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        updateProjectVisibility();
      });
    });

    $('[data-expand-all]').addEventListener('click', (event) => {
      state.allExpanded = !state.allExpanded;
      visibleCards().forEach((card) => { $('details', card).open = state.allExpanded; });
      event.currentTarget.textContent = state.allExpanded ? 'Collapse all visible' : 'Expand all visible';
    });
  }

  function renderDomainChart() {
    const counts = data.domains.map((domain) => ({
      ...domain,
      count: published.filter((project) => project.domains.includes(domain.id)).length
    }));
    const max = Math.max(...counts.map((item) => item.count));
    const chart = $('[data-domain-chart]');
    chart.innerHTML = counts.map((item) => `
      <div class="bar-row" aria-label="${escapeHtml(item.label)}: ${item.count} published ${item.count === 1 ? 'project' : 'projects'}">
        <span class="bar-label">${escapeHtml(item.label)}</span>
        <span class="bar-track" aria-hidden="true"><span class="bar-fill" style="--bar-width:${(item.count / max) * 100}%"></span></span>
        <span class="bar-value">${item.count}</span>
      </div>
    `).join('');
  }

  function renderStatusChart() {
    const total = published.length + planned.length;
    const publishedAngle = (published.length / total) * 360;
    $('[data-status-chart]').innerHTML = `
      <div class="donut" style="--published-angle:${publishedAngle}deg" role="img" aria-label="${published.length} completed projects and ${planned.length} in-progress or planned projects">
        <div class="donut-center"><strong>${total}</strong><span>tracked projects</span></div>
      </div>
      <div class="chart-legend" aria-hidden="true">
        <span><i class="legend-dot legend-published"></i>${published.length} completed</span>
        <span><i class="legend-dot legend-planned"></i>${planned.length} in progress / planned</span>
      </div>
    `;
  }

  function renderExperience() {
    $('[data-experience]').innerHTML = data.experience.map((role, index) => `
      <article class="experience-card reveal">
        <details ${index === 0 ? 'open' : ''}>
          <summary>
            <div>
              <h3>${escapeHtml(role.title)}</h3>
              <p class="experience-setting">${escapeHtml(role.setting)}</p>
            </div>
            <div>
              <p class="experience-summary">${escapeHtml(role.summary)}</p>
              <div class="experience-tags">${role.signals.map((signal) => `<span>${escapeHtml(signal)}</span>`).join('')}</div>
            </div>
            <span class="expand-icon" aria-hidden="true"></span>
          </summary>
          <div class="experience-detail">
            <ul>${role.details.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </div>
        </details>
      </article>
    `).join('');
  }

  function renderWorkPrinciples() {
    $('[data-work-principles]').innerHTML = `
      <div class="work-principles-heading">
        <p class="eyebrow">How I work</p>
        <p>Professional habits carried across security, service delivery, and technical support.</p>
      </div>
      <div class="work-principles-grid">
        ${data.workPrinciples.map((principle, index) => `
          <article>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <h3>${escapeHtml(principle.title)}</h3>
            <p>${escapeHtml(principle.text)}</p>
          </article>
        `).join('')}
      </div>
    `;
  }

  function renderSkills() {
    $('[data-skills]').innerHTML = data.skills.map((skill) => `
      <article class="skill-row">
        <h3>${escapeHtml(skill.area)}</h3>
        <div class="skill-proof">
          <p>${escapeHtml(skill.proof)}</p>
          <div class="skill-links">
            ${skill.projects.map((id) => {
              const project = projectById.get(id);
              return `<a class="skill-link" href="#project-${escapeHtml(id)}" data-skill-project="${escapeHtml(id)}">${escapeHtml(project.title)}</a>`;
            }).join('')}
          </div>
        </div>
      </article>
    `).join('');

    $('[data-skills]').addEventListener('click', (event) => {
      const link = event.target.closest('[data-skill-project]');
      if (!link) return;
      const project = projectById.get(link.dataset.skillProject);
      if (!project) return;
      state.domain = 'all';
      state.status = project.status;
      $$('.filter-button').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.domain === 'all')));
      $$('[data-status-filter]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.statusFilter === state.status)));
      updateProjectVisibility();
      const card = $(`#project-${CSS.escape(project.id)}`);
      $('details', card).open = true;
    });
  }

  function renderPersonality() {
    $('[data-personality]').innerHTML = `
      <blockquote class="personality-quote">
        <span aria-hidden="true">“</span>
        <p>${escapeHtml(data.personality.statement)}</p>
        <footer>Cassandra</footer>
      </blockquote>
      <div class="personality-grid">
        ${data.personality.traits.map((trait, index) => `
          <article>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <h3>${escapeHtml(trait.title)}</h3>
            <p>${escapeHtml(trait.text)}</p>
          </article>
        `).join('')}
      </div>
    `;
  }

  function renderPlanned() {
    $('[data-planned-grid]').innerHTML = planned.map((project, index) => `
      <article class="planned-card reveal">
        <span class="planned-step">${project.phase === 'in-progress' ? 'Active prototype · not completed' : `Roadmap ${String(index + 1).padStart(2, '0')} · not completed`}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <a href="#project-${escapeHtml(project.id)}" data-show-planned="${escapeHtml(project.id)}">Inspect project scope →</a>
      </article>
    `).join('');

    $('[data-planned-grid]').addEventListener('click', (event) => {
      const link = event.target.closest('[data-show-planned]');
      if (!link) return;
      state.status = 'planned';
      state.domain = 'all';
      $$('[data-status-filter]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.statusFilter === 'planned')));
      $$('.filter-button').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.domain === 'all')));
      updateProjectVisibility();
      const card = $(`#project-${CSS.escape(link.dataset.showPlanned)}`);
      $('details', card).open = true;
    });
  }

  function setupTheme() {
    const button = $('[data-theme-toggle]');
    const updateLabel = () => {
      const current = document.documentElement.dataset.theme;
      button.setAttribute('aria-label', `Switch to ${current === 'dark' ? 'light' : 'dark'} theme`);
      $('meta[name="theme-color"]').setAttribute('content', current === 'dark' ? '#0b0f18' : '#f4f3ef');
    };
    updateLabel();
    button.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme;
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('cassandra-theme', next); } catch (_) {}
      updateLabel();
    });
  }

  function setupNavigation() {
    const header = $('[data-header]');
    const button = $('[data-nav-toggle]');
    const nav = $('[data-nav]');
    const close = () => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    };

    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      if (open) close();
      else {
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('aria-label', 'Close navigation');
        nav.classList.add('is-open');
        document.body.classList.add('nav-open');
      }
    });
    nav.addEventListener('click', (event) => { if (event.target.matches('a')) close(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 780) close(); });
    const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  function setupReveals() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = $$('.reveal, .bar-chart');
    if (reducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      runCounters();
      return;
    }

    let countersRun = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        if (entry.target.id === 'fact-strip' && !countersRun) {
          countersRun = true;
          runCounters();
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.13 });
    items.forEach((item) => observer.observe(item));
  }

  function runCounters() {
    $$('[data-counter]').forEach((counter) => {
      const target = Number(counter.dataset.counter);
      const started = performance.now();
      const duration = 700;
      const tick = (now) => {
        const progress = Math.min((now - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = String(Math.round(target * eased)).padStart(2, '0');
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  function setupUntangle() {
    const board = $('[data-untangle-board]');
    const button = $('[data-untangle-button]');
    if (!board || !button) return;

    const label = $('[data-untangle-label]', button);
    const status = $('[data-untangle-status]', board);
    button.addEventListener('click', () => {
      const untangled = board.classList.toggle('is-untangled');
      button.setAttribute('aria-pressed', String(untangled));
      label.textContent = untangled ? 'Tangle it again' : 'Untangle the problem';
      if (status) status.textContent = untangled ? 'Problem untangled.' : '';
    });
  }

  function setupProblemExplorer() {
    const answer = $('[data-problem-answer]');
    const buttons = $$('[data-problem]');
    if (!answer || !buttons.length) return;

    const scenarios = {
      user: {
        title: 'Make the person feel heard.',
        body: 'I confirm what changed, separate symptoms from assumptions and guide one clear step at a time.',
        output: 'A calmer user, cleaner notes and a useful escalation if the issue continues.',
        href: '#experience',
        link: 'See the experience behind this →'
      },
      evidence: {
        title: 'Find the gap before chasing the file.',
        body: 'I connect the requirement to available evidence, identify the owner and flag exactly what is missing or awaiting approval.',
        output: 'A focused gap list, clear ownership and follow-up that a reviewer can act on.',
        href: '#experience',
        link: 'See the GRC experience behind this →'
      },
      signal: {
        title: 'Separate the clue from the conclusion.',
        body: 'I check the source, surrounding context, corroborating evidence and the limits of what the signal can actually prove.',
        output: 'A qualified finding, documented reasoning and a sensible next investigation step.',
        href: '#project-sensor-design',
        link: 'Open the Security Monitoring Sensor Design project →'
      }
    };

    buttons.forEach((button) => button.addEventListener('click', () => {
      const scenario = scenarios[button.dataset.problem];
      if (!scenario) return;
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      answer.classList.remove('is-changing');
      void answer.offsetWidth;
      answer.classList.add('is-changing');
      $('[data-answer-title]', answer).textContent = scenario.title;
      $('[data-answer-body]', answer).textContent = scenario.body;
      $('[data-answer-output]', answer).textContent = scenario.output;
      const link = $('[data-answer-link]', answer);
      link.href = scenario.href;
      link.textContent = scenario.link;
    }));
  }

  function setupStoryChapters() {
    const chapters = $$('[data-story]');
    chapters.forEach((chapter) => chapter.addEventListener('click', () => {
      chapters.forEach((item) => {
        const active = item === chapter;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
    }));
  }

  renderFacts();
  renderFilters();
  renderProjects();
  renderDomainChart();
  renderStatusChart();
  renderExperience();
  renderWorkPrinciples();
  renderSkills();
  renderPersonality();
  renderPlanned();
  setupProjectControls();
  setupTheme();
  setupNavigation();
  setupUntangle();
  setupProblemExplorer();
  setupStoryChapters();
  setupReveals();
})();
