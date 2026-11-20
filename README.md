# Modern React Quiz Application

A responsive, feature-rich interactive quiz application built with **React 18** and **Tailwind CSS**. Designed with modern component architecture, state-driven answer validation, real-time score tracking, and custom navigation controls.

---

## Key Features

- **Instantaneous Answer Validation:** Clear green/red feedback showing correct answers alongside user selections.
- **Answer Locking:** Selection locking prevents multi-choice modifications after answer submission.
- **Dynamic Question Navigation Grid:** An interactive sidebar enabling seamless jump-navigation across all 30 questions with live status color indicators (*Current*, *Answered*, *Skipped*, *Unvisited*).
- **Skip Functionality:** Non-destructive question skipping integrated directly into progress tracking.
- **Real-Time Score Analytics:** Conditional performance styling and custom dynamic feedback based on passing thresholds.
- **Modular Component Architecture:** Clean separation of concerns between state logic (`Quiz.jsx`), question interactions (`QuestionCard.jsx`), navigation sidebar (`QuestionNav.jsx`), and summary reporting (`ResultCard.jsx`).
- **Responsive Layout:** Optimized flex/grid mechanics tailored for mobile, tablet, and desktop viewports.

---

## Tech Stack

- **Frontend Library:** React 18
- **Styling Framework:** Tailwind CSS
- **Build Tool:** Vite
- **Version Control:** Git & GitHub

---

## Project Structure

```text
src/
├── assets/
│   └── data.js           # 30 modularized question objects with string-based key schemas
├── components/
│   ├── QuestionCard.jsx  # Primary question and choice interaction component
│   ├── QuestionNav.jsx   # Interactive sidebar navigation grid
│   ├── ResultCard.jsx    # Conditional performance summary report
│   └── Quiz.jsx          # Top-level state container and orchestration engine
├── App.jsx
└── main.jsx
