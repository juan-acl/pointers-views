import React from 'react';
import { Buttons } from 'components/Buttons';
import "./pointersStyle.scss"

interface PointProps {
    points: { x: number, y: number, id: string }[];
    setPoints: React.Dispatch<React.SetStateAction<{ x: number; y: number; id: string }[]>>;
}

export const Pointer: React.FC<PointProps> = (props: PointProps) => {
    return (
        <div className='container-pointers'>
            <Buttons {...props} />
        </div>
    )
}