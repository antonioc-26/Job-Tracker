/*
===============================================================================
Author: Antonio Corona
Date: 2026-03-15
Project: Job Tracker
File: script.js

Description:
This file contains the full client-side logic for the Job Tracker application.
It handles adding, editing, deleting, filtering, rendering, dashboard updates,
and saving/loading data with localStorage.

Technologies Used:
JavaScript – DOM manipulation, event handling, data persistence
===============================================================================
*/

/*
===============================================================================
DATA STORAGE
===============================================================================
Applications are stored in localStorage so they persist between browser sessions.
If no saved data exists yet, the app begins with an empty array.
===============================================================================
*/
let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

/*
===============================================================================
DOM REFERENCES
===============================================================================
Store references to important page elements for reuse throughout the script.
===============================================================================
*/
const jobForm = document.getElementById("job-form");
const editIdInput = document.getElementById("edit-id");
const companyInput = document.getElementById("company");
const roleInput = document.getElementById("role");
const locationInput = document.getElementById("location");
const statusInput = document.getElementById("status");
const dateAppliedInput = document.getElementById("date-applied");
const notesInput = document.getElementById("notes");
const filterStatusInput = document.getElementById("filter-status");
const jobList = document.getElementById("job-list");
const cancelEditBtn = document.getElementById("cancel-edit-btn");

const totalCount = document.getElementById("total-count");
const appliedCount = document.getElementById("applied-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const offerCount = document.getElementById("offer-count");

/*
===============================================================================
UTILITY FUNCTIONS
===============================================================================
*/

/* Save the current jobs array into localStorage */
function saveJobs() {
    localStorage.setItem("jobs", JSON.stringify(jobs));
}

/* Reset the form back to default empty state */
function resetForm() {
    jobForm.reset();
    editIdInput.value = "";
}

/* Update the dashboard summary counts */
function updateDashboard() {
    totalCount.textContent = jobs.length;
    appliedCount.textContent = jobs.filter(job => job.status === "Applied").length;
    interviewCount.textContent = jobs.filter(job => job.status === "Interview").length;
    rejectedCount.textContent = jobs.filter(job => job.status === "Rejected").length;
    offerCount.textContent = jobs.filter(job => job.status === "Offer").length;
}

/*
Render the job list based on the selected filter.
If no jobs match, show a friendly empty-state message.
*/
function renderJobs() {
    const selectedFilter = filterStatusInput.value;

    let filteredJobs = jobs;

    if (selectedFilter !== "All") {
        filteredJobs = jobs.filter(job => job.status === selectedFilter);
    }

    jobList.innerHTML = "";

    if (filteredJobs.length === 0) {
        jobList.innerHTML = `<p class="empty-state">No applications found.</p>`;
        return;
    }

    filteredJobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";

        jobCard.innerHTML = `
            <h3>${job.company} — ${job.role}</h3>
            <p class="job-meta"><strong>Location:</strong> ${job.location}</p>
            
            <p class="job-meta">
            <strong>Status:</strong>
            <span class="status-badge status-${job.status.toLowerCase()}">
            ${job.status}
            </span>
            </p>            

            <p class="job-meta"><strong>Date Applied:</strong> ${job.dateApplied}</p>
            <p class="job-notes"><strong>Notes:</strong><br>${job.notes || "None"}</p>
            <div class="job-actions">
                <button class="edit-btn" onclick="editJob('${job.id}')">Edit</button>
                <button class="delete-btn" onclick="deleteJob('${job.id}')">Delete</button>
            </div>
        `;

        jobList.appendChild(jobCard);
    });
}

/*
===============================================================================
CRUD FUNCTIONS
===============================================================================
*/

/* Populate the form with an existing job so the user can edit it */
function editJob(id) {
    const job = jobs.find(job => job.id === id);

    if (!job) {
        return;
    }

    editIdInput.value = job.id;
    companyInput.value = job.company;
    roleInput.value = job.role;
    locationInput.value = job.location;
    statusInput.value = job.status;
    dateAppliedInput.value = job.dateApplied;
    notesInput.value = job.notes;
}

/* Delete a job by id, then persist and re-render the page */
function deleteJob(id) {
    jobs = jobs.filter(job => job.id !== id);
    saveJobs();
    updateDashboard();
    renderJobs();
}

/*
Handle the form submit:
- if edit-id exists, update an existing job
- otherwise create a new job entry
*/
jobForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const jobData = {
        id: editIdInput.value || crypto.randomUUID(),
        company: companyInput.value.trim(),
        role: roleInput.value.trim(),
        location: locationInput.value.trim(),
        status: statusInput.value,
        dateApplied: dateAppliedInput.value,
        notes: notesInput.value.trim()
    };

    if (editIdInput.value) {
        jobs = jobs.map(job => job.id === jobData.id ? jobData : job);
    } else {
        jobs.push(jobData);
    }

    saveJobs();
    updateDashboard();
    renderJobs();
    resetForm();
});

/* Cancel edit mode and clear the form */
cancelEditBtn.addEventListener("click", function() {
    resetForm();
});

/* Re-render job list when filter selection changes */
filterStatusInput.addEventListener("change", function() {
    renderJobs();
});

/*
===============================================================================
INITIAL PAGE LOAD
===============================================================================
Render saved jobs and dashboard counts when the app first opens.
===============================================================================
*/
updateDashboard();
renderJobs();