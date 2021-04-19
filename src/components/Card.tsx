import React from 'react'

import { CardDisplay } from './styles/card'

export interface CardProps {
    title?       : string,
    className?   : string,
    key?         : string,
}

export default function Card(props : React.PropsWithChildren<CardProps>) {
    return (
        <CardDisplay className={props.className} key={props.key}>
            <h1 className='card-title'>{props.title}</h1>
            <div className="card-content">
                {props.children}
            </div>
        </CardDisplay>
    )
}
