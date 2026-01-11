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
<div style={{ padding: 20 }}>
<h1>Job Application Tracker</h1>

<form onSubmit={handleAddJob} style={{ marginBottom: 12 }}>
<input
placeholder="Company name"
value={company}
onChange={(e) => setCompany(e.target.value)}
style={{ display: "block", marginBottom: 8, width: 300 }}
/>
<input
placeholder="Job role"
value={role}
onChange={(e) => setRole(e.target.value)}
style={{ display: "block", marginBottom: 8, width: 300 }}
/>
<button type="submit">Add Job</button>
</form>

<ul style={{ paddingLeft: 18 }}>
{jobs.map((job) => (
<li key={job.id} style={{ marginBottom: 8 }}>
<strong>{job.company}</strong> — {job.role}{" "}
<button
onClick={() => handleDeleteJob(job.id)}
style={{ marginLeft: 10 }}
>
Delete Job
</button>
</li>
))}
</ul>
</div>
);
}
