import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";

function RecommendedProblemsPage() {
    const [code, setCode] = useState("// Write your code here");

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    return (
        <div>
            <h2>Recommended Problems</h2>

            {/* Monaco Editor */}
            <MonacoEditor
                width="800"
                height="600"
                language="javascript"
                theme="vs-dark"
                value={code}
                options={{
                    selectOnLineNumbers: true,
                }}
                onChange={handleCodeChange}
            />

            {/* Additional Content */}
            <div>
                <p>Additional content goes here...</p>
            </div>
        </div>
    );
}

export default RecommendedProblemsPage;
