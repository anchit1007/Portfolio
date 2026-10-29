# Anchit — Personal Developer Portfolio

A modern, fast, responsive personal developer portfolio website designed for a student developer learning Python, practicing competitive programming, mastering Git/GitHub & Linux, and working on an SIH 2026 project.

---

## 🚀 Live Demo & Quick Start

This project is built using standard, zero-dependency **HTML5, CSS3, and modern Vanilla JavaScript (ES6+)**. No build steps, bundlers, or package installations are required.

### Option 1: Direct File Open
Simply double-click `index.html` in your file explorer to open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Run with Python (Recommended for local dev)
In your terminal, navigate to the project directory and run:

```bash
# Python 3
python3 -m http.server 8000
```

Then visit [`http://localhost:8000`](http://localhost:8000) in your web browser.

### Option 3: VS Code Live Server
1. Open this folder in Visual Studio Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` and select **"Open with Live Server"**.

### Option 4: Run with Node.js
```bash
npx serve .
```

---

## 📁 File Structure

```
.
├── index.html          # Semantic HTML5 document with all portfolio sections & modal
├── css/
│   └── style.css       # Complete dark theme styles, animations, responsive design tokens
├── js/
│   └── main.js         # Mobile menu, scrollspy, modal dialog, clipboard copy, form validation
└── README.md           # Documentation, run instructions & customization guide
```

---

## 🎨 Design & Key Features

- **Dark Theme Palette**: Deep navy-black canvas (`#090d16` / `#0d121f`) with electric blue (`#3b82f6`) and purple (`#8b5cf6`) accents.
- **Glassmorphism Header**: Sticky navigation bar with backdrop blur, active link scrollspy indicator, and mobile hamburger drawer.
- **Developer Visual**: Interactive, syntax-highlighted code card in the hero section displaying a Python developer profile.
- **Honest & Grounded Skill Presentation**: Skills categorized under **Programming**, **Developer Tools**, and **Technologies Explored** without inflated proficiency percentages or claims of expert status.
- **SIH 2026 Featured Project Card**:
  - Highlights *Automated Packaged Commodity Compliance Checker* (Problem Statement ID: 26034).
  - Clear **Proposed Project / Planning** status indicator.
  - Interactive technical pipeline flowchart (7 stages from Image Upload to Report Generation).
  - Accessible **"View Details"** popup modal detailing the Legal Metrology Act, 2009 background and technical architecture.
- **Learning & Practice Section**: Dedicated cards highlighting ongoing practice in Python competitive programming, Git/GitHub, and Linux command-line utilities.
- **Editable Education Card**: Highlights BTech CSE at Rishihood University with coursework badges.
- **Interactive Contact Hub**:
  - Direct links to GitHub (`anchit986`), LinkedIn (`anchitmahajan`), and Email (`anchitmahajan0987@gmail.com`).
  - One-click **Copy Email** button with animated toast notification.
  - Interactive contact form with real-time client-side validation and clear notice explaining frontend demo functionality with mailto redirection.
- **Accessibility & Performance**:
  - Fully responsive across desktop, tablet, and mobile screens.
  - Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<dialog>`).
  - Accessible contrast ratios and visible keyboard focus rings (`:focus-visible`).
  - Respects `@media (prefers-reduced-motion: reduce)`.

---

## ✏️ Customization & Placeholders Checklist

All placeholders are cleanly structured in `index.html` and can be edited with your actual details as they evolve:

| Placeholder / Item | Location in `index.html` | Current Value / Format | Notes for Customization |
| :--- | :--- | :--- | :--- |
| **Developer Name** | Navbar, Hero (`<h1>`), Footer | `Anchit` / `ANCHIT` | Update to your preferred display name |
| **Email Address** | Contact section, Footer, `main.js` | `anchitmahajan0987@gmail.com` | Update the `mailto:`, copy button `data-copy`, and JS fallback |
| **GitHub Handle & URL**| Hero, Project, Contact, Footer | `https://github.com/anchit986` | Update handle to your GitHub profile |
| **LinkedIn Profile** | Hero, Contact, Footer | `https://linkedin.com/in/anchitmahajan` | Update handle to your LinkedIn profile |
| **Degree / Course** | Education section (`.edu-degree`) | `BTech in Computer Science & Engineering` | Update or modify if your major changes |
| **Institution** | Education section (`.edu-institution`) | `Rishihood University` | College / University name |
| **Graduation Year** | Education section (`.edu-year-badge`)| `2030 (Expected)` | Change as you progress |
| **SIH Project Status** | Featured Project card | `Proposed Project / Planning` | Update to `In Development` or `Prototype Built` as the project evolves |
| **SIH GitHub Repo** | Featured Project card footer | `#` / Pending Push | Replace `#` with the actual public repository URL once pushed |

---

## 🛠️ Code Conventions & Modifying the Site

### Adding a New Skill
In `index.html`, navigate to the `<section id="skills">` area and add a new `<li>` item under the desired category:

```html
<li class="skill-item">
  <span class="skill-bullet"></span>
  <div class="skill-info">
    <span class="skill-name">New Skill Name</span>
    <span class="skill-tag">Category Tag</span>
  </div>
</li>
```

### Adding a New Project
In `index.html`, you can duplicate the `.featured-project-card` or add a new sub-card in a project grid.

### Updating Colors & Themes
All visual tokens are defined in `css/style.css` at the top within `:root { ... }`. You can tweak the gradients, background tones, and radii in one place.

