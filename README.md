# Portfolio — JOST Christopher

Personal portfolio built with **React**, showcasing fullstack web and mobile projects.

Live: [christopher-jost.fr](https://www.christopher-jost.fr)

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 |
| Routing | React Router v6 |
| Styling | CSS Modules + Tailwind CSS |
| Animations | Motion, custom IntersectionObserver |
| i18n | react-i18next (FR / EN) |
| UI components | Aceternity UI (shooting stars, flip words, moving border) |
| 3D / Globe | Three.js, @react-three/fiber, three-globe |
| Contact form | EmailJS |
| SEO | react-helmet-async, Open Graph, Rich Snippets |
| Deployment | FileZilla FTP → OVH |

---

## Projects featured

### Pro
| Project | Stack | Link |
|---------|-------|------|
| **Reptimorph** | Next.js, NestJS, PostgreSQL, Stripe, Socket.io | [reptimorph.fr](https://reptimorph.fr) |
| **Flun** | React Native / Expo, NestJS, OpenAI, Replicate | [Google Play](https://play.google.com/store/apps/details?id=com.flun.app) |

### Personal
| Project | Stack |
|---------|-------|
| **Elden Lore** | PHP, MySQL, XAMPP |
| **10 Cents** | React, Node.js, Express, MongoDB |
| **My Agenda** | React, Node.js, Express, MongoDB |

---

## Getting started

```bash
npm install
npm start
```

Production build:

```bash
npm run build
```

The `build/` folder is ready to be deployed via FTP. Make sure to upload the `locales/` folder as well (i18n translations).

---

## Project structure

```
src/
├── components/          # Reusable components
│   ├── ui/              # Aceternity UI components
│   ├── PageInfo.jsx     # Project detail section component
│   ├── Carousel.jsx     # Screenshot carousel
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/               # Route pages
│   ├── Home.jsx
│   ├── Reptimorph.jsx
│   ├── Flun.jsx
│   ├── EldenLore.jsx
│   ├── TenCents.jsx
│   ├── MyAgenda.jsx
│   └── Error404.jsx
├── styles/              # CSS files
├── i18n.js              # i18n configuration
└── App.jsx              # Routes

public/
└── locales/
    ├── fr/translation.json
    └── en/translation.json
```

---

## i18n

The portfolio supports **French** and **English**. Translation files are located in `public/locales/`.

When adding new translation keys, bump the version in `src/i18n.js` to bust the browser cache:

```js
const version = 'v1.2.0'; // increment on each translation update
```

---

## Author

**Christopher JOST** — FullStack Developer  
[christopher-jost.fr](https://www.christopher-jost.fr) · [GitHub](https://github.com/chrischris4) · [LinkedIn](https://www.linkedin.com/in/christopher-jost)
