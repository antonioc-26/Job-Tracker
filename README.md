# Job Tracker

![Version](https://img.shields.io/badge/version-1.1.0-blue)

A lightweight web application for organizing and tracking job applications during the job search process.

Users can add, edit, delete, and filter job applications while tracking their progress through different stages such as **Applied, Interview, Rejected, or Offer**.

All data is stored locally in the browser using the **localStorage API**, allowing applications to persist even after refreshing the page.

---

## Live Demo

Try the application here:

https://antonioc-26.github.io/Job-Tracker/

---

## Screenshots

### Dashboard
![Dashboard](screenshots/dashboard-screenshot.jpg)

### Applications List
![Applications](screenshots/job-list-screenshot.jpg)

---

## Features

- Add new job applications
- Edit existing applications
- Delete applications with confirmation
- Filter applications by status
- Dashboard summary of job search progress
- Status color badges for quick visual tracking
- Automatic sorting (newest applications first)
- Persistent data using `localStorage`

---

## Status Types

- Applied
- Interview
- Rejected
- Offer

---

## Dashboard

The dashboard displays counts for:

- Total applications
- Applied
- Interview
- Rejected
- Offer

This provides a quick overview of the current job search progress.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- localStorage API

---

## Project Structure
```
job-tracker/
├── LICENSE
├── README.md
├── index.html
├── screenshots
│   ├── dashboard-screenshot.jpg
│   └── job-list-screenshot.jpg
├── script.js
└── style.css
```

---

## Running the Project Locally

### Option 1 — Open Directly

1. Download or clone the repository
2. Open `index.html` in any web browser

No installation or dependencies are required.

---

### 2. Open the Project in VS Code

Open **Visual Studio Code** and select:

File → Open Folder → job-tracker

## Running the Project (Recommended)
### Using VS Code Live Server

This is the easiest way to run the project locally.

### Step 1: Install the Live Server Extension

1. Open **VS Code**
2. Click the **Extensions** icon
3. Search for: "Live Server"

4. Install **Live Server (by Ritwick Dey)**

---

### Step 2: Start the Server

Right click the file:

    index.html

Select:
    
    Open With Live Server

Your browser will automatically open something similar to:

    http://127.0.0.1:5500/index.html

The page will automatically refresh when you edit and save files.

---

## Development

If you plan to modify or add:

1. Run the project using Live Server
2. Edit HTML/CSS/JavaScript files
3. Test changes in the browser with auto-refresh

---

## Contributing

Contributions are welcome.

If you'd like to improve the project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## License

This project is open source and available under the **MIT License**.

---

## Author

Developed by: Antonio Corona Montes De Oca  
GitHub: https://github.com/antonioc-26
