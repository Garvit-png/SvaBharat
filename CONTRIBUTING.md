<div align="center">
  <img src="public/logo.png" alt="SvaBharat Logo" width="100" />
  <h1>🤝 Contributing to SvaBharat</h1>
  <p><strong>Thank you for your interest in building the future of Bharat! 🎉</strong></p>
</div>

We appreciate every single contribution, whether it's fixing tiny bugs, improving documentation, enhancing the UI, optimizing performance, or introducing massive new features.

To ensure a smooth, consistent, and collaborative development process, please read these guidelines before you start contributing.

---

## 📌 Table of Contents

- [🚀 Introduction](#-introduction)
- [📋 Prerequisites](#-prerequisites)
- [⚙️ Project Setup](#️-project-setup)
- [📁 Project Structure](#-project-structure)
- [🌱 Development Workflow](#-development-workflow)
- [🌿 Branching & Commits](#-branching--commits)
- [💻 Coding Standards](#-coding-standards)
- [🚀 Pull Request Process](#-pull-request-process)
- [✅ Contributor Checklist](#-contributor-checklist)
- [📖 Code of Conduct](#-code-of-conduct)

---

## 🚀 Introduction

SvaBharat is an open-source project driven by community collaboration. You can contribute in many ways:

✨ **Improving UI/UX:** Enhance the design and user experience.  
🐛 **Fixing Bugs:** Help us squash pesky bugs.  
📚 **Writing Documentation:** Clear documentation is the backbone of open-source.  
⚡ **Improving Performance:** Optimize the codebase for speed and accessibility.  
🚀 **Adding Features:** Bring new ideas to life!  

---

## 📋 Prerequisites

Before diving in, ensure you have the following installed on your machine:

- **Node.js** (Latest LTS recommended)
- **npm** (Node Package Manager)
- **Git**
- A **GitHub account**
- Basic knowledge of **React, TypeScript, and Vite**

*Verify your installations:*
```bash
node -v
npm -v
git --version
```

---

## ⚙️ Project Setup

### 1. Fork & Clone
First, **Fork** the repository on GitHub, then clone it locally:
```bash
git clone https://github.com/<your-username>/SvaBharat.git
cd SvaBharat
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Build & Lint (Before submitting PRs)
```bash
npm run build
npm run lint
```

---

## 📁 Project Structure

Here is a quick overview of our core directory structure:

```text
SvaBharat/
├── public/           # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/       # Icons and graphics
│   ├── components/   # Reusable UI components
│   ├── pages/        # Application routes/pages
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Helper functions
│   ├── App.tsx       # Main app layout
│   └── main.tsx      # Application entry point
├── package.json      # Dependencies & scripts
└── vite.config.ts    # Vite bundler configuration
```

---

## 🌱 Development Workflow

Our workflow is standard for open-source:
1. **Sync** your fork with the upstream repository.
2. **Branch out** from `main` to a descriptively named branch.
3. **Commit** your work with clear, conventional messages.
4. **Push** your branch to your fork.
5. **Open a Pull Request** against the upstream `main` branch.

---

## 🌿 Branching & Commits

### Branch Naming Convention
Please use descriptive prefixes for your branches:
- `feature/add-navbar`
- `fix/login-error`
- `docs/update-readme`
- `refactor/navbar-component`
- `perf/improve-rendering`

### Conventional Commits
We follow the conventional commits standard. It helps us automatically generate changelogs.
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `perf:` A code change that improves performance

*Example:* `feat: redesign the about section with animated dock`

---

## 💻 Coding Standards

To maintain a high-quality codebase, please adhere to the following best practices:

- **Readability first:** Write clean, self-documenting code.
- **Modularity:** Keep components small, focused, and reusable.
- **DRY Principle:** Don't Repeat Yourself. Avoid duplicate code.
- **Cleanup:** Remove unused imports and `console.log` statements before committing.
- **Formatting:** Ensure your code is properly formatted (use Prettier/ESLint if configured).

---

## 🚀 Pull Request Process

We love Pull Requests! To get yours merged quickly:

1. **Keep it focused:** A PR should ideally address a single issue or feature.
2. **Descriptive Title:** Clearly state what the PR does.
3. **Link Issues:** Use keywords like `Closes #42` to link your PR to an existing issue.
4. **Provide Context:** Explain *why* you made the changes.
5. **Visual Proof:** If you changed the UI, attach screenshots or a screen recording!
6. **Be Responsive:** Reviewers might ask for tweaks. Prompt responses help get your code merged faster.

---

## ✅ Contributor Checklist

Before hitting that "Create Pull Request" button, run through this checklist:

- [ ] My code builds successfully (`npm run build`).
- [ ] Linting passes without errors (`npm run lint`).
- [ ] I have followed the project's branching and commit message conventions.
- [ ] I have updated documentation if my changes require it.
- [ ] I have attached screenshots/videos for any UI changes.

---

## 📖 Code of Conduct

We are committed to providing a welcoming and inspiring community for all.
- Be respectful, empathetic, and professional.
- Welcome newcomers with open arms.
- Provide and accept constructive feedback gracefully.

---

<div align="center">
  <h3>🎉 Thank You!</h3>
  <p>Every contribution—big or small—helps shape the future of SvaBharat. Happy Coding! 🚀</p>
</div>