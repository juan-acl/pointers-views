import React, { useState } from "react";
import { Pointer } from "components/Pointers";
import { v4 } from "uuid";
import "./containerStyle.scss";

interface Point {
    id: string
    x: number;
    y: number;
}

export const Container: React.FC = () => {
    const [points, setPoints] = useState<Point[]>([]);

    const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
        const { offsetX, offsetY } = e.nativeEvent;
        console.log("Validando la data", { offsetX, offsetY })
        setPoints([...points, { x: offsetX, y: offsetY, id: v4() }]);
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
