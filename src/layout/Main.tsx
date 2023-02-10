import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'

interface IProps {
    children?: ReactNode
}

export default function Main(props: IProps) {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}
