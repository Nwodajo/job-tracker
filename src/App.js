import React, { useState } from "react";
import "./App.css";

export default function App() {
const [company, setCompany] = useState("");
const [role, setRole] = useState("");
const [jobs, setJobs] = useState([]);

function handleAddJob(e) {
e.preventDefault();
if (!company.trim() || !role.trim()) return;

const newJob = {
id: Date.now(),
company: company.trim(),
role: role.trim(),
};

setJobs((prev) => [newJob, ...prev]);
setCompany("");
setRole("");
}

function handleDeleteJob(id) {
setJobs((prev) => prev.filter((job) => job.id !== id));
}

return (
<div className="page">
<div className="container">
<h1 className="title">Job Application Tracker</h1>

<div className="card">
<form className="form" onSubmit={handleAddJob}>
<label className="label">
Company
<input
className="input"
placeholder="Company name"
value={company}
onChange={(e) => setCompany(e.target.value)}
/>
</label>

<label className="label">
Role
<input
className="input"
placeholder="Job role"
value={role}
onChange={(e) => setRole(e.target.value)}
/>
</label>

<button className="addBtn" type="submit">
Add Job
</button>
</form>
</div>

<div className="card">
<h2 className="subTitle">Applications</h2>

{jobs.length === 0 ? (
<p className="empty">No jobs yet. Add your first one above.</p>
) : (
<ul className="list">
{jobs.map((job) => (
<li key={job.id} className="jobItem">
<div className="jobText">
<span className="company">{job.company}</span>
<span className="dash">—</span>
<span className="role">{job.role}</span>
</div>

<button
className="deleteBtn"
onClick={() => handleDeleteJob(job.id)}
type="button"
>
Delete
</button>
</li>
))}
</ul>
)}
</div>
</div>
</div>
);
}
