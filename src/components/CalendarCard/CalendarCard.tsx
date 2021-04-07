import React, { useEffect } from 'react'
import Card, { CardProps } from '../Card/Card'
import { Activity } from "../../pages/Atividades";

interface CalendarCardProps extends CardProps {
    activityList : Array<Activity>,    
}

function CalendarCard(props : CalendarCardProps) {
    return (
        <Card title={props.title} className='calendar-card'>
            {props.activityList.map((activity, i) => (
                <div className='calendar-activity-item' id={i.toString()}>
                    {activity.name}
                </div>))}
        </Card>
    )
}

export default CalendarCard
