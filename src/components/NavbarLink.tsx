import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
    to: string,
    title: string,
    active?: boolean
}

export default function NavbarLink(props: IProps) {
    return (
        <div>
            <Link to={props.to}>
                <p className={`${props.active && 'font-bold'} text-white`}>{props.title}</p>
            </Link>
        </div>
    )
}
