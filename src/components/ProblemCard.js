import React from 'react';
import './ProblemCard.css';

// TODO: When integrating component, make sure to display tags dynamically

function ProblemCard() {

    // this should be passed dynamically through the function instead
    const problemTags = ["binary search", "data structures", "dp", "flows", "geometry"]

    return (
        <div className="problem-card-container">
            <div className="problem-context-container">
                <h1 className="problem-title">
                    Two Characters, Two Colors
                </h1>
                <div className="problem-tags-container">
                    {problemTags.map((tag, index) => (
                        <div key={index} className="problem-tag">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <button className="btn">
                <h1>Solve</h1>
            </button>
        </div>
    );
}

export default ProblemCard;
