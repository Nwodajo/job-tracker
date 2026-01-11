import React, { useState } from "react";
import "./App.css";

function App() {
const [company, setCompany] = useState("");
const [role, setRole] = useState("");
const [jobs, setJobs] = useState([]);

const addJob = () => {
if (!company || !role) return;

setJobs([...jobs, { company, role }]);
setCompany("");
setRole("");
};

return (
<div className="container">
<h1>Job Application Tracker</h1>

<input
type="text"
placeholder="Company name"
value={company}
onChange={(e) => setCompany(e.target.value)}
/>

<input
type="text"
placeholder="Job role"
value={role}
onChange={(e) => setRole(e.target.value)}
/>

<button onClick={addJob}>Add Job</button>

<ul>
{jobs.map((job, index) => (
<li key={index}>
{job.company} — {job.role}
</li>
))}
</ul>
</div>
);
}

export default App;
