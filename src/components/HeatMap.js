import React from "react";

function HeatMap() {
    const ratings = ["800", "900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900"];
    const topics = ["binary search", "dp", "implementation", "data structures", "math", "graphs"];

    // Generate random data for illustration
    const generateRandomData = () => {
        const data = [];
        for (let i = 0; i < ratings.length; i++) {
            const row = [];
            for (let j = 0; j < topics.length; j++) {
                row.push(Math.floor(Math.random() * 100) + 1); // Random values between 1 and 100
            }
            data.push(row);
        }
        return data;
    };

    const heatmapData = generateRandomData();

    return (
        <div className="heatmap-container">
            <table className="heatmap-table">
                <thead>
                <tr>
                    <th></th>
                    {ratings.map((rating, index) => (
                        <th key={index}>{rating}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {topics.map((topic, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{topic}</td>
                        {heatmapData.map((row, colIndex) => (
                            <td
                                key={colIndex}
                                style={{
                                    backgroundColor: `rgba(0, 0, 255, ${(100 - row[rowIndex]) / 100})`, // Blue to red gradient
                                }}
                            >
                                {row[rowIndex]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default HeatMap;
