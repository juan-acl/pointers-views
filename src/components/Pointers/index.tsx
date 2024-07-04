import React from 'react';
import { Buttons } from 'components/Buttons';
import "./pointersStyle.scss"

interface PointProps {
    points: { x: number, y: number }[];
    setPoints: React.Dispatch<React.SetStateAction<{ x: number; y: number; }[]>>;
}

export const Pointer: React.FC<PointProps> = (props: PointProps) => {
    return (
        <div className='container-pointers'>
            <Buttons {...props} />
        </div>
    )
}