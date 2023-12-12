import React from "react";
import ProblemCard from "../components/ProblemCard";


function RecommendedProblemsPage() {
    return(
        <div>


            <div className="recommended-problems-container">
                <h2>
                    Recommended Problems
                </h2>
                <div className="problems-list">
                    <ProblemCard/>
                    <ProblemCard/>
                    <ProblemCard/>
                    <ProblemCard/>
                </div>
            </div>






        </div>
    );
}

export default RecommendedProblemsPage;