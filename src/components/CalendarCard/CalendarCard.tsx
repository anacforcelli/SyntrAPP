import React, { useEffect } from 'react'
import Card, { CardProps } from '../Card/Card'
import { Task } from "../../pages/Tasks";

interface CalendarCardProps extends CardProps {
    taskList : Array<Task>,    
}

function CalendarCard(props : CalendarCardProps) {
    return (
        <Card title={props.title} className='calendar-card'>
            {props.taskList.map((task, i) => (
                <div className='calendar-task-item' id={i.toString()}>
                    {task.name}
                </div>))}
        </Card>
    )
}

export default CalendarCard
