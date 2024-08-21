"use client"
import { useState } from 'react'
import classes from './nav.module.scss'
import Image from 'next/image'
import NavItem from './NavItem/NavItem'
import { classNames } from '@/app/_utils/classnames'

const Nav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className={classes.navbar}>
            <div className={classes.logo}>
                <Image src="/logo.png" alt="My Choir Rocks" fill />
            </div>
            <div className="nav-links">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/schools">Schools</NavItem>
                <NavItem href="/choir">Choir</NavItem>
                <NavItem href="/facebook">Facebook</NavItem>
            </div>
            <button onClick={toggleMenu} className={classNames(
                classes.menuButton,
                isOpen ? classes.isopen : undefined
            )}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav >
    )
}

export default Nav