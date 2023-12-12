import { useEffect, useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "./WorkspacePage.css";


const MonacoEnvironment = {
    getWorkerUrl: function (_moduleId, label) {
        if (label === "json") {
            return "./json.worker.bundle.js";
        }
        if (label === "cpp" || label === "css" || label === "html" || label === "javascript") {
            return "./editor.worker.bundle.js";
        }
        return "./editor.worker.bundle.js";
    },
};


function WorkspacePage() {

    const [code, setCode] = useState("// Write your code here");
    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };


    const dividerWidth = 0.5;
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [oneWidth, setOneWidth] = useState(50);
    const [twoWidth, setTwoWidth] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleResize = () => {
        setViewportWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleDragStart = (e) => {
        setIsDragging(true);
    };

    const handleDrag = (e) => {
        if (isDragging) {
            const containerWidth = viewportWidth * (oneWidth / 100);
            const newOneWidth = (e.clientX / viewportWidth) * 100;
            const newTwoWidth = 100 - newOneWidth;

            // Ensure the divider doesn't go beyond certain limits
            if (newOneWidth > 20 && newTwoWidth > 20) {
                setOneWidth(newOneWidth);
                setTwoWidth(newTwoWidth);
            }
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("mouseup", handleDragEnd);

        return () => {
            window.removeEventListener("mousemove", handleDrag);
            window.removeEventListener("mouseup", handleDragEnd);
        };
    }, [isDragging]);

    const dividerStyle = {
        width: `${dividerWidth}%`,
        height: `100vh`,
        backgroundColor: "red",
        cursor: "col-resize",
    };

    const divOneStyle = {
        width: `${oneWidth}%`,
        height: `100vh`,
        backgroundColor: "green",
        overflow: "hidden",
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "row",
        margin: "30px"

    }

    return (
        <div style={containerStyle}>
            <div className="container-1" style={divOneStyle}>
                <h1>{viewportWidth}</h1>
            </div>
            <div
                className="divider"
                style={dividerStyle}
                onMouseDown={handleDragStart}
            ></div>

            <MonacoEditor
                width={`${twoWidth}%`}
                height="100vh"
                language="cpp"
                theme="vs-dark" // Use your preferred theme, e.g., "vs-light", "hc-black", etc.
                value={code}
                options={{
                    fontSize: 24, // Set the font size
                    lineHeight: 24, // Set the line height
                    fontFamily: "Menlo, Monaco, 'Courier New', monospace", // Set the font family
                    minimap: {
                        enabled: true, // Disable the minimap
                    },
                    wordWrap: "on", // Enable word wrap
                    tabSize: 2, // Set the tab size
                    renderIndentGuides: true, // Enable indent guides
                    renderLineHighlight: "all", // Highlight the entire line
                    rulers: [80], // Show a ruler at column 80
                    glyphMargin: true, // Show the glyph margin for line numbers
                    lineNumbersMinChars: 3, // Set the minimum number of characters to display for line numbers
                    folding: true, // Enable code folding
                    contextmenu: false, // Disable the context menu
                    suggestOnTriggerCharacters: true, // Show suggestions on trigger characters
                    autoClosingBrackets: "always", // Automatically close brackets
                    autoClosingQuotes: "always", // Automatically close quotes
                    autoIndent: "full", // Enable auto-indentation
                    formatOnType: true, // Format code as you type
                    formatOnPaste: true, // Format code when pasting
                }}
                editorDidMount={(editor, monaco) => {
                    // Access the editor instance and monaco API
                    // You can perform additional customization here if needed
                }}
                onChange={setCode}
                requireConfig={{
                    url: "https://unpkg.com/monaco-editor@0.27.0/min/vs/loader.js",
                    paths: {
                        vs: "https://unpkg.com/monaco-editor@0.27.0/min/vs",
                    },
                }}
                context={null}
                environment={MonacoEnvironment}
            />


        </div>
    );
}

export default WorkspacePage;