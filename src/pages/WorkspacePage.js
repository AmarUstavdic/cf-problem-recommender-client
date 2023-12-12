import { useEffect, useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "./WorkspacePage.css";

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
                theme="vs-dark"
                value={code}
                options={{
                    selectOnLineNumbers: true,
                }}
                onChange={handleCodeChange}
            />

        </div>
    );
}

export default WorkspacePage;