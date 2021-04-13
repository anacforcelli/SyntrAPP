import React from 'react'

export interface CardProps {
    title?  : string,
    className? : string,
}

export default function Card(props : React.PropsWithChildren<CardProps>) {
    return (
        <div className={props.className} >
            <h1 className='card-title'>{props.title}</h1>
            <div className="cardContent">
                {props.children}
            </div>
        </div>
    )
}
