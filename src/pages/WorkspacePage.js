import { useEffect, useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "./WorkspacePage.css";
import * as monaco from 'monaco-editor';




function WorkspacePage() {

    const [code, setCode] = useState("#include <bits/stdc++.h>\n" +
        "using namespace std;\n" +
        "\n" +
        "#define FF ios_base::sync_with_stdio(0); cin.tie(0);\n" +
        "\n" +
        "int main() {\n" +
        "\tFF; \n" +
        "\t\n" +
        "\treturn 0;\n" +
        "}");
    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };


    useEffect(() => {
        monaco.editor.defineTheme('my-theme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#111827',
            },
        });
    }, []);


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
            if (newOneWidth > 40 && newTwoWidth > 40) {
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
        height: `90vh`,
        backgroundColor: "#2F3543",
        cursor: "col-resize",
    };

    const divOneStyle = {
        width: `${oneWidth}%`,
        height: `90vh`,
        backgroundColor: "#111827",
        overflow: "hidden",
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "row",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid #2F3543",
        margin: "20px"
    };


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
                height="90vh"
                language="cpp"
                theme="my-theme"
                value={code}
                options={
                    {fontSize: 24}
                }
            />


        </div>
    );
}

export default WorkspacePage;