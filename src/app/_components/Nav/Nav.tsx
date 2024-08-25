"use client"
import { useState } from 'react'
import classes from './nav.module.scss'
import Image from 'next/image'
import NavItem from './NavItem/NavItem'
import { classNames } from '@/app/_utils/classnames'
import keepOnTruckin from '../../../../public/font/font'

const Nav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className={classNames(classes.navbar, keepOnTruckin.className)}>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/schools">Schools</NavItem>
            <NavItem href="/choir">Choir</NavItem>
            <NavItem href="/facebook">Facebook</NavItem>
        </nav >
    )
}

export default Nav