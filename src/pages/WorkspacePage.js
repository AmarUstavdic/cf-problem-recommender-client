import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "./WorkspacePage.css";

function WorkspacePage() {
    const [code, setCode] = useState("// Write your code here");
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    const handleSliderMove = (e) => {
        const container = document.querySelector(".workspace-container");
        const newPosition = (e.clientX / container.clientWidth) * 100;
        setSliderPosition(newPosition);
    };

    const handleSliderRelease = () => {
        document.removeEventListener("mousemove", handleSliderMove);
        document.removeEventListener("mouseup", handleSliderRelease);
    };

    const handleSliderClick = (e) => {
        document.addEventListener("mousemove", handleSliderMove);
        document.addEventListener("mouseup", handleSliderRelease);
    };

    return (
        <div className="workspace-container">
            <div className="problem-description-container">
                {/* Problem Description */}
                <div className="problem-description">
                    {/* Your problem description content */}
                </div>
            </div>

            {/* Slider */}
            <div
                className="slider"
                style={{ left: `calc(${sliderPosition}% - 5px)` }}
                onMouseDown={handleSliderClick}
            ></div>

            <div className="monaco-editor-container">
                {/* Monaco Editor */}
                <MonacoEditor
                    width="100%"
                    height="100%"
                    language="javascript"
                    theme="vs-dark"
                    value={code}
                    options={{
                        selectOnLineNumbers: true,
                    }}
                    onChange={handleCodeChange}
                />
            </div>
        </div>
    );
}

export default WorkspacePage;
