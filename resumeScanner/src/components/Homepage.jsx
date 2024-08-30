import React, { useState } from "react";
import "./Homepage.css";

function Homepage() {
    const [resumeText, setResumeText] = useState("");
    const [jobDescriptionText, setJobDescriptionText] = useState("");
    const [comparisonResult, setComparisonResult] = useState("");

    const handleCompare = () => {
        if (resumeText && jobDescriptionText) {
            setComparisonResult("Comparison result will be shown here");
        } else {
            setComparisonResult("Please upload or paste your resume and job description");
        }
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            setResumeText(text);
        };
        reader.readAsText(file);
    };

    return (
        <div className="container">
            <h1 className="title">Resume Scanner</h1>
            <p className="description">Hello, "YOU"!! , welcome to a free resume scanning website that analyzes your resume to know if you are a good match and gives you hints to improve</p>
            <div className="section">
                <h2 className="subtitle">How it works</h2>
                <p>Upload your resume and we will analyze it for you</p>
                <p>Our AI will scan your resume and give you a score based on the job description you provide</p>
                <p>It will also give you hints on how to improve your resume</p>
                <h3>Upload Or Paste Your Resume</h3>
                <input type="file" id="resume" name="resume" onChange={handleUpload} accept=".pdf,.doc,.docx" className="input-field" />
            </div>

            <div className="text-area-container">
                <div className="text-area-column">
                    <label htmlFor="resume" className="label">Paste Your Resume</label>
                    <textarea 
                        id="resume" 
                        name="resume" 
                        rows={20}
                        cols={30}
                        value={resumeText} 
                        onChange={(e) => setResumeText(e.target.value)}
                        className="input-field"
                    />
                </div>

                <div className="text-area-column">
                    <label htmlFor="jobDescription" className="label">Paste Job Description</label>
                    <textarea 
                        id="jobDescription" 
                        name="jobDescription" 
                        rows={20}
                        cols={30}
                        value={jobDescriptionText} 
                        onChange={(e) => setJobDescriptionText(e.target.value)}
                        className="input-field"
                    />
                </div>
            </div>

            <button onClick={handleCompare} className="button">Scan Resume</button>
            {comparisonResult && (
                <div className="result">
                    <h2>Comparison Result</h2>
                    <p>{comparisonResult}</p>
                </div>
            )}
        </div>
    );
}

export default Homepage;