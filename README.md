# ETA.AI - Interactive AI Dashboard

This is a front-end web application project that demonstrates a rich, interactive user interface for an AI chat dashboard. The entire project is built from scratch using only fundamental web technologies: HTML5, CSS3, and modern vanilla JavaScript.

## Core Features

- **Interactive Chat Interface:** A clean, two-column layout for chat history, source previews, and the main chat window.
- **Dynamic Settings Modal:** All AI response controls (Temperature, Token Limits) are housed in a clean, pop-up modal window to keep the main UI uncluttered.
- **Persistent User Settings:** The application uses the browser's `localStorage` to save and load user preferences, such as:
  - Username (set via a Login prompt)
  - Light/Dark Theme preference
  - AI model parameters
- **Simulated AI Responses:** The "Get Response" button simulates a thinking delay based on user settings and provides a placeholder response.
- **External Source Linking:** Provides easy access to external websites like Wikipedia and GitHub, which open in a new tab.

## Technologies Used

- **HTML5:** For the semantic structure and content of the application.
- **CSS3:** For all styling, including a creative dark/light theme, layout management with Flexbox/Grid, and a responsive design.
- **JavaScript (ES6+):** For all interactivity, DOM manipulation, event handling, and managing data persistence with `localStorage`.

## How to Run

This project is built with only client-side technologies and requires no special build steps.

1.  Ensure all three files (`index.html`, `style.css`, `script.js`) are in the same directory.
2.  The recommended way to run this project is with the **Live Server** extension in Visual Studio Code.
3.  Simply right-click on the `index.html` file and select "Open with Live Server".
