import React, { useState } from "react";
import { Pointer } from "components/Pointers";
import "./containerStyle.scss";

interface Point {
    x: number;
    y: number;
}

export const Container: React.FC = () => {
    const [points, setPoints] = useState<Point[]>([]);

    const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
        const { offsetX, offsetY } = e.nativeEvent;
        setPoints([...points, { x: offsetX, y: offsetY }]);
    };

    return (
        <>
            <Pointer points={points} setPoints={setPoints} />
            <div className="container" onClick={handleChange}>
                {points.map((point, index) => (
                    <div
                        key={index}
                        className="pointer"
                        style={{ left: point.x, top: point.y }}
                    />
                ))}
            </div>
        </>
    );
};
