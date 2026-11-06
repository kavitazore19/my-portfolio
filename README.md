# Kavita Zore – Personal Portfolio Website

A responsive, interactive personal portfolio built with **React + Vite**, plain **JavaScript/JSX** and **CSS** (no UI libraries).

Live sections: Home · About · Education · Skills · Projects (with filters) · Certifications · Contact · Footer
Interactive features: dark/light theme toggle, mobile hamburger menu, project filtering, smooth scrolling, hover effects, resume viewer with download.

---

## 1. Commands

| Command | What it does |
|---|---|
| `npm create vite@latest my-portfolio -- --template react` | Creates a new React project using Vite (already done for this repo) |
| `cd my-portfolio` | Move into the project folder |
| `npm install` | Downloads the packages listed in `package.json` into `node_modules/` |
| `npm run dev` | Starts the development server at http://localhost:5173 with hot reload |
| `npm run build` | Creates an optimised production version of the site in the `dist/` folder |
| `npm run preview` | Serves the `dist/` folder locally so you can check the built site |
| `npm run lint` | Checks the code for common mistakes (oxlint, included by Vite) |

> **Windows tip:** if PowerShell says *"running scripts is disabled"*, use `npm.cmd` instead of `npm`, or switch the VS Code terminal to Command Prompt.

---

## 2. Folder structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg          ← browser-tab icon
│   ├── resume.pdf           ← the resume that "Download Resume" downloads
│   └── resume-preview.png   ← picture of the resume page shown in the viewer
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← nav links, hamburger menu (useState), theme button
│   │   ├── Home.jsx         ← hero: name, degree, college, buttons, initials graphic
│   │   ├── About.jsx        ← introduction, interests, career goal
│   │   ├── Education.jsx    ← M.Sc. IMCA and B.Sc. timeline cards (CGPA + duration)
│   │   ├── Skills.jsx       ← skill groups shown as tags
│   │   ├── Projects.jsx     ← 2×2 project grid + category filter (useState)
│   │   ├── Certifications.jsx ← four certificate cards
│   │   ├── Contact.jsx      ← email, GitHub, LinkedIn cards
│   │   ├── Footer.jsx       ← social icons + copyright
│   │   └── socialLinks.jsx  ← ONE shared list of email/GitHub/LinkedIn links
│   ├── App.jsx              ← theme state (useState + useEffect), renders all sections
│   ├── App.css              ← layout and component styles
│   ├── index.css            ← theme colours (CSS variables), fonts, resets
│   └── main.jsx             ← entry point: renders <App /> into index.html
├── index.html
├── package.json
└── README.md
```

### Things to fill in (search the code for `TODO`)
- `src/components/Projects.jsx` – GitHub link for the AI-Based Phishing Detection project (the other three are filled in)
- `src/components/Certifications.jsx` – issuer/date for Skill Development and Avishkar, and certificate links (empty values are hidden)
- To update the resume: replace `public/resume.pdf` **and** `public/resume-preview.png` (a picture of the new page)

---

## 3. How the React Hooks are used

### `useState` – remembering values that change
`useState` gives a component a piece of memory. When the value changes, React re-renders the component.

| Where | State variable | What it controls |
|---|---|---|
| `App.jsx` | `theme` (`'dark'` / `'light'`) | Which colour theme is active. `toggleTheme()` flips it. |
| `Navbar.jsx` | `menuOpen` (`true` / `false`) | Whether the mobile menu is shown. The hamburger button toggles it; clicking a link closes it. |
| `Projects.jsx` | `activeFilter` (`'All'`, `'Data'`, `'Web Development'`, `'AI/ML'`) | Which filter button is selected. The project list is filtered with `projects.filter(...)`. |

Example from `Projects.jsx`:
```jsx
const [activeFilter, setActiveFilter] = useState('All')

const visibleProjects =
  activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter)
```

### `useEffect` – doing something *outside* React after a render
Used only once, in `App.jsx`. Whenever `theme` changes, the effect:
1. sets `data-theme="dark"` or `"light"` on the `<html>` tag, so the CSS variables in `index.css` switch colours;
2. saves the theme in `localStorage`, so the choice is remembered on the next visit.

```jsx
useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}, [theme]) // runs again only when `theme` changes
```

### Props – passing data from parent to child
`App.jsx` passes `theme` and `toggleTheme` to `<Navbar />` as props, so the button inside Navbar can change state that lives in App.

---

## 4. Figma wireframe (before coding)

A wireframe is a simple boxes-and-text sketch of the page. Steps in Figma (free account):
1. Create a new design file and add a **Desktop frame** (1440 × 1024) and a **Mobile frame** (390 × 844).
2. Use the **Rectangle (R)** and **Text (T)** tools to draw grey boxes for each section in order: Navbar, Home, About, Education, Skills, Projects, Certifications, Contact, Footer.
3. In the Home box, sketch the name, two buttons and a circle for the initials.
4. In Projects, draw a row of four filter buttons and a grid of cards.
5. On the mobile frame, stack everything in one column and replace the nav links with a ☰ icon.
6. Pick the colour palette (dark navy background, purple + teal accents) and note it next to the frame.

The wireframe is only a guide; the code in this repo follows that layout.

**Wireframe for this project:** https://www.figma.com/design/3uOVsrTReOZn5f7U823q0J
(Desktop 1440 frame, Mobile 390 frame with the open hamburger menu, and the colour palette.)

---

## 5. What is MCP and how it connects to Figma

**MCP (Model Context Protocol)** is an open standard that lets an AI coding assistant (such as Claude Code) talk to external tools through small programs called *MCP servers*.

- Figma provides an official MCP server. When it is configured, the AI assistant can **read a Figma design** (layout, colours, text, spacing) and generate matching React/CSS code, or **push a coded page back into Figma**.
- Setup, in short: in the AI tool's settings add the Figma MCP server (for Claude Code: `claude mcp add figma ...` or connect it as a connector in claude.ai), then sign in to Figma when asked.
- **MCP is optional.** The website does not need MCP to be built, run or deployed. It is only a convenience for the design-to-code step.

---

## 6. Test cases (manual)

Run `npm run dev`, open http://localhost:5173, and check each row.

| # | Test | Steps | Expected result | Pass? |
|---|---|---|---|---|
| 1 | Navigation links | Click Home, About, Education, Skills, Projects, Certifications, Contact in the navbar | Page smooth-scrolls to the matching section; the section heading is visible below the navbar | ☐ |
| 2 | Logo link | Scroll down, click **KZ.** | Scrolls back to the top | ☐ |
| 3 | Theme switch | Click the ☀️ / 🌙 button | Colours change between dark navy and light; button icon changes | ☐ |
| 4 | Theme is remembered | Switch to light, refresh the page | Page loads in light mode | ☐ |
| 5 | Project filter – Data | Click **Data** | Only *DataSmiths* and *Customer Shopping Behaviour* are shown; Data button is highlighted | ☐ |
| 6 | Project filter – Web Development | Click **Web Development** | Only *CampusConnect* is shown | ☐ |
| 7 | Project filter – AI/ML | Click **AI/ML** | Only *AI-Based Multi-Source Phishing Detection* is shown, with an "Ongoing" badge | ☐ |
| 8 | Project filter – All | Click **All** | All four projects are shown | ☐ |
| 9 | Home buttons | Click **View Projects**, then **Contact Me** | Scrolls to Projects, then to Contact | ☐ |
| 10 | View Resume | Click **View Resume** on Home | Pop-up shows the resume; ✕, the Escape key or clicking outside closes it | ☐ |
| 10a | Download Resume | Open the viewer, click **Download Resume** | Kavita_Zore_Resume.pdf downloads and opens as the real PDF | ☐ |
| 10b | Open full size | Open the viewer, click **Open full size** | The PDF opens in a new tab and can be zoomed | ☐ |
| 11 | Email link | Click the Email card | Default mail app opens with zorekavita100@gmail.com | ☐ |
| 12 | GitHub link | Click the GitHub card | github.com/kavitazore19 opens in a **new tab** | ☐ |
| 13 | LinkedIn link | Click the LinkedIn card, then the LinkedIn icon in the footer | https://linkedin.com/in/kavitazore opens in a **new tab** both times | ☐ |
| 13a | Project grid | View Projects on a desktop, then on a phone size | Desktop: 2 cards per row, 2 rows, equal heights. Phone: 1 card per row | ☐ |
| 13b | Education | Look at the Education section | M.Sc. (2025–2027, CGPA 8.4/10) and B.Sc. (2022–2025, CGPA 9.04/10) are clearly shown | ☐ |
| 13c | Certificates | Look at Certifications | Four cards: Full Stack (Coursera · Jan 2026), Google Data Analytics (Google · Jan 2026), Skill Development, Avishkar | ☐ |
| 13d | Project GitHub links | Click **View on GitHub** on DataSmiths, CampusConnect, Customer Shopping Behaviour | Each repository opens in a new tab | ☐ |
| 13e | Footer | Scroll to the bottom | Shows “© 2026 Kavita Zore” | ☐ |
| 14 | Mobile menu | Press F12 → toggle device toolbar → choose a phone size. Click ☰ | Menu opens as a list; ☰ turns into ✕. Click a link → page scrolls and menu closes | ☐ |
| 15 | Responsive layout | Resize the browser from wide to narrow | No horizontal scrollbar; hero stacks into one column; cards stack; text stays readable | ☐ |
| 16 | Hover effects | Hover over buttons, project cards, skill tags | Buttons lift slightly; cards lift and show a coloured border | ☐ |
| 17 | Keyboard access | Press Tab repeatedly | A visible teal outline moves through links and buttons; Enter activates them | ☐ |
| 18 | Console | Press F12 → Console tab, reload | No red errors | ☐ |
| 19 | Build | Run `npm run build` then `npm run preview` | Build succeeds; the preview site works like the dev site | ☐ |

---

## 7. Common errors and fixes

| Problem | Fix |
|---|---|
| `'vite' is not recognized` | Run `npm install` first (node_modules is missing). |
| Blank page in the browser | Open the console (F12). Usually an import path or a component file name does not match (`import Home from './components/Home'` needs `Home.jsx`). |
| `Each child in a list should have a unique "key" prop` | Every element made by `.map()` needs a unique `key=` (titles are used as keys here). |
| Styles not applied | Check `App.css` is imported in `App.jsx` and `index.css` in `main.jsx`; class names in JSX use `className`, not `class`. |
| Download Resume gives 404 | Add `public/resume.pdf` (exact name) and restart `npm run dev`. |
| Smooth scroll jumps under the navbar | `scroll-padding-top` in `index.css` must be at least the navbar height (68px). |
| Port 5173 already in use | Stop the other server, or run `npm run dev -- --port 3000`. |
| Theme does not change | Make sure `data-theme` is set on `<html>` (see useEffect in `App.jsx`) and `index.css` has both `[data-theme='dark']` and `[data-theme='light']` blocks. |

---

## 8. Deploying (optional)

`npm run build` produces a static `dist/` folder that can be uploaded to GitHub Pages, Netlify or Vercel. No server is needed.
