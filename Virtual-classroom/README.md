# Virtual Classroom and Online Tutoring Site

A complete, responsive, and modern frontend web application designed as a college demonstration project. Built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** without external frameworks, build tools, or backend dependencies.

---

## 1. Project Objective

The objective of this project is to simulate an intuitive educational platform where students and tutors can:
- **Explore Courses:** Browse categorized computing subjects, view instructor information, search subjects in real-time, and inspect curriculum syllabi.
- **Track Class Schedules:** View upcoming tutoring webinars and enter an interactive simulated classroom session.
- **Access Study Materials:** Read verified standalone study guides (`materials/sample-notes.html`) and download reference cheatsheets.
- **Manage a Classroom Dashboard:** Add custom courses, schedule personalized tutoring sessions, delete user entries, and persist data across browser refreshes via `localStorage`.

---

## 2. Technology Stack

- **HTML5:** Semantic architecture (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Modern design system utilizing CSS Custom Properties (variables), Flexbox, CSS Grid, smooth transitions, and media queries.
- **Vanilla JavaScript (ES6+):** Pure DOM manipulation, event handling, input validation, safe HTML sanitization, and browser `localStorage` integration.
- **Zero External Dependencies:** No React, Angular, Vue, Node.js, Express, databases, CDN scripts, or external font libraries required.

---

## 3. Project File Structure

```text
Virual-classroom/
├── index.html                  # Single-page web application structure and markup
├── style.css                   # Professional blue-and-white responsive stylesheet
├── script.js                   # Client-side logic, rendering, validation, and storage
├── README.md                   # Project documentation and examiner guide
└── materials/
    └── sample-notes.html       # Verified standalone HTML study guide
```

---

## 4. Key Features & Functionality

### A. Professional UI & Navigation
- **Color Scheme:** Professional blue-and-white theme with high contrast, modern border radii, and multi-layer shadows.
- **Responsive Navigation:** Fixed navigation bar with auto-scroll highlighting and an accessible mobile hamburger drawer.
- **Hero Section:** Clear value proposition (*"Learn Better. Grow Faster."*), quick stats, and call-to-action buttons.

### B. Dynamic Courses Catalog
- Six default curriculum courses (Web Development, Python, Java OOP, DBMS & SQL, Data Structures & Algorithms, Computer Networks).
- **Category Filter Tabs:** Filter courses by "Web Dev", "Programming", "Databases", "Computer Science", and "Networking".
- **Live Search Bar:** Search courses dynamically by title, tutor name, or keyword.
- **Course Details Modal:** Interactive popup showing complete multi-module syllabi, tutor names, duration, and ratings.

### C. Live Tutoring Schedule & Classroom Simulator
- Timeline-style schedule cards indicating date, time, topic, instructor, and course.
- **Join Class Simulator:** Interactive video conference room mockup featuring:
  - Simulated active participants counter.
  - Interactive Microphone & Camera toggle controls.
  - Live mock Chat / Q&A box with automated tutor responses.
  - Transparent academic demo notice.

### D. Verified Study Materials
- **Real Sample Material:** Direct integration with `materials/sample-notes.html` (semantic HTML tables, CSS layout code snippets, and DOM cheat sheets).
- **Instant Cheatsheet Downloads:** Generates real downloadable files (`.txt` / `.md`) dynamically using browser `Blob` URLs.
- **Note Preview Modal:** View formatted reference notes directly on the page.

### E. Interactive Student & Tutor Dashboard
- **Live Metrics:** Real-time counters tracking Total Courses, Upcoming Classes, Study Materials, and Custom User Items.
- **Add Course Form:** Create custom courses with input validation (title, tutor, category, level, description) and duplicate prevention.
- **Schedule Class Form:** Schedule new live sessions tied to existing or custom courses with minimum date validation.
- **LocalStorage Persistence:** User-created courses and classes are automatically saved to `localStorage` and remain available after refreshing the browser.
- **Item Management:** Tabbed view of user-created entries with instant deletion and a **"Reset Demo"** button.

---

## 5. How to Run Locally

This project requires **no installation, build commands, or web servers**.

### Method 1: Direct File Opening (Recommended)
1. Navigate to the project directory:
   ```bash
   cd Virual-classroom
   ```
2. Double-click `index.html` or open it in any web browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).

### Method 2: Python Simple HTTP Server (Optional)
If you prefer running through a local development server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 6. Faculty / Examiner Demonstration Walkthrough

| Step | Action | Expected Result |
| :--- | :--- | :--- |
| **1. Explore Catalog** | Type "Python" in the search box or click the "Programming" filter button. | The course grid instantly filters to matching programming courses. |
| **2. Course Details** | Click **"View Details &rarr;"** on any course card. | An accessible modal pops up displaying the multi-module syllabus. |
| **3. Classroom Demo** | Click **"Join Class"** on any upcoming session. | The classroom simulator opens. Test the **Mic** and **Camera** toggles, and send a message in the chat box. |
| **4. Study Notes** | In the **Study Materials** section, click **"View Notes"** on Web Development. | The browser loads `materials/sample-notes.html` containing real study notes. |
| **5. Add Custom Course** | Scroll to the **Dashboard**, fill in the "Add New Course" form, and click **Save Course**. | Form validates input, saves the course to `localStorage`, increments dashboard counters, and displays the course in the catalog with a **"User Added"** badge. |
| **6. Persistence Test** | Refresh the browser page (`F5` or `Cmd+R`). | The newly created course remains present in both the catalog and the dashboard list. |
| **7. Delete / Reset** | Click **"Delete"** on your user-created course in the dashboard. | The item is removed, metrics decrement, and storage updates automatically. |

---

## 7. Security & Code Quality Standards

- **XSS Prevention:** All dynamic user inputs are safely escaped using standard text sanitization functions before DOM rendering.
- **Resilience:** Gracefully handles disabled or corrupted `localStorage` data using structured `try...catch` blocks.
- **Zero Inline Event Handlers:** Clean separation of concerns with all event listeners bound programmatically in `script.js`.
- **Accessibility:** Semantic HTML tags, clear ARIA attributes (`role="dialog"`, `aria-label`, `aria-hidden`), and keyboard focus management (e.g. `ESC` closes modals).

---

## 8. Academic Scope & Limitations Disclosure

- **Simulated Video Stream:** Real-time WebRTC media conferencing is simulated via interactive UI controls rather than connecting to live streaming servers.
- **Client-Side Storage:** Data is stored locally per browser instance using the Web Storage API (`localStorage`), rather than a multi-user centralized SQL database.
- **Sample Data:** Instructor profiles and course offerings are educational placeholders created for demonstration purposes.

---

*Academic Project &bull; Virtual Classroom and Online Tutoring Site &bull; Fall Academic Edition*
