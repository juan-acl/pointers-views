import { useState } from "react";
import "./buttonsStyle.scss"
let Next = "Next >"
let Previus = "< Previus"

interface ButtonsProps {
    points: { x: number, y: number, id: string }[];
    setPoints: React.Dispatch<React.SetStateAction<{ x: number; y: number; id: string }[]>>;
}

interface Point {
    x: number;
    y: number;
    id: string;
}

export const Buttons: React.FC<ButtonsProps> = (props: ButtonsProps) => {

    const [previus, setPrevius] = useState<Point[]>([]);

    const handleClickPrevius = () => {
        if (props.points.length === 0) return

        const lastPoint = props.points.pop()
        setPrevius([...previus, lastPoint!])
        props.setPoints([...props.points])
    }

    const handleClickNext = () => {
        if (previus.length === 0) return
        let newPoint = previus.pop()!
        setPrevius([...previus])
        props.setPoints([...props.points, newPoint])
    }

    return (
        <div className="container-buttons" >
            <button className="item-button" onClick={handleClickPrevius} >
                {Previus}
            </button>
            <h2>Pointers</h2>
            <button className="item-button" onClick={handleClickNext} >
                {Next}
            </button>
        </div>
    )
}