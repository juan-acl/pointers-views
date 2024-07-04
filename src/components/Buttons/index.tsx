import { useState } from "react";
import "./buttonsStyle.scss"
let Next = "Next >"
let Previus = "< Previus"

interface ButtonsProps {
    points: { x: number, y: number }[];
    setPoints: React.Dispatch<React.SetStateAction<{ x: number; y: number; }[]>>;
}

interface Point {
    x: number;
    y: number;
}

export const Buttons: React.FC<ButtonsProps> = (props: ButtonsProps) => {

    const [previus, setPrevius] = useState<Point[]>([]);

    // El metodo pop elimina el ultimo elemento de un array y lo retorna el elemento eliminado ademas de modificar el array original

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