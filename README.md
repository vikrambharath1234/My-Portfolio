# Vikram Bharath C - Portfolio Website

A responsive personal portfolio website built with **React** and **Vite**.
It presents my profile as a fresher Java Full Stack Developer: skills, projects,
experience, education, certifications, achievements and a contact form.

---

## 1. Commands

You need **Node.js 20.19 or newer** (Node 22 LTS is recommended) installed. Open a terminal inside this project folder
and run these commands, in this order.

| Command | What it does |
| --- | --- |
| `npm install` | Downloads all the packages the project needs. Run this once after extracting the ZIP. |
| `npm run dev` | Starts the development server. Open the address it shows (usually http://localhost:5173). Changes you save appear straight away. |
| `npm run build` | Creates the finished website in a `dist` folder, ready to deploy. |
| `npm run preview` | Lets you look at the finished `dist` version on your computer before deploying it. |

---

## 2. Folder structure

```
My-Portfolio/
├── public/
│   ├── favicon.svg          # The small icon shown in the browser tab
│   └── resume.pdf           # TEMPORARY dummy resume (see section 4)
├── src/
│   ├── components/          # One file for each section of the website
│   │   ├── Navbar.jsx       # Top menu (becomes a button menu on phones)
│   │   ├── Hero.jsx         # Name, title, introduction and buttons
│   │   ├── About.jsx        # About Me text
│   │   ├── Skills.jsx       # Skill groups shown as badges
│   │   ├── Projects.jsx     # Projects section (loops over the project data)
│   │   ├── ProjectCard.jsx  # One project card with its two buttons
│   │   ├── Experience.jsx   # Internship timeline
│   │   ├── Education.jsx    # Degree and coursework
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx      # Contact details and contact form
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js # ALL the text, links and lists are stored here
│   ├── App.jsx              # Puts the sections together in order
│   ├── main.jsx             # Starts the React app
│   └── index.css            # All the styles (colours are at the top)
├── index.html               # The page shell (title and description)
├── package.json             # Project details and the list of commands
├── package-lock.json        # Exact package versions (keep this file)
└── README.md                # This file
```

**Tip for beginners:** most changes can be made in `src/data/portfolioData.js`
without touching any React code. For example, to change a project link, edit its
`githubUrl` or `liveUrl` value there.

---

## 3. How the main parts work

- **Sections and links.** Each section has an `id` (for example `id="about"`).
  The menu links use those ids (for example `href="#about"`), so clicking a menu item
  scrolls to that section.
- **Project cards.** Each project card has exactly two buttons:
  **GitHub Repository** (outlined) and **Live Demo** (filled). A backend repository,
  where there is one, appears as a plain text link.
- **Project previews.** The preview boxes on the project cards are drawn with CSS,
  so there are no image files to go missing.
- **Contact form.** The form checks that the fields are filled in correctly. It does
  **not** send emails yet, because no email service is connected. When a visitor
  submits a valid form, the page tells them honestly that the message has not been
  sent and shows my email address.

---

## 4. Replacing the dummy resume later

The **Download Resume** button downloads the file `public/resume.pdf`.
The current file is a temporary, text-only dummy resume.

To replace it with your final resume:

1. Prepare your final resume as a PDF.
2. Rename it to `resume.pdf`.
3. Copy it into the `public` folder, replacing the existing `resume.pdf`.
4. Run `npm run dev` again and click **Download Resume** to check it.

The button keeps the file name `Vikram-Bharath-Resume.pdf` when someone downloads it.
That name is set in `src/data/portfolioData.js` (`resumeFile.downloadName`).

---

## 5. Deploying to Vercel

1. Create a GitHub repository and upload this project to it.
   Do **not** upload the `node_modules` folder (it is skipped automatically if you
   use the `.gitignore` file included here).
2. Go to https://vercel.com and sign in with GitHub.
3. Click **Add New... > Project**, choose your portfolio repository and click **Import**.
4. Vercel detects that the project uses Vite. Keep the default settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. When it finishes, Vercel gives you a live link for your portfolio.

Every time you push a change to GitHub, Vercel publishes the new version automatically.

---

## 6. Technologies used

- React 19 (functional components and `useState` for the menu and the form)
- Vite (development server and build tool)
- Plain CSS (no CSS framework)
- No external images, fonts or scripts are loaded
