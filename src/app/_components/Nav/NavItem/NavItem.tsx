import { FC, PropsWithChildren } from 'react'
import classes from './navitem.module.scss'
import Link from 'next/link'

interface INavItemProps extends PropsWithChildren {
    href: string
}


const NavItem: FC<INavItemProps> = ({ children, href }) => {
    return (
        <Link href={href} className={classes.navItem}>{children}</Link>
    )
}

export default NavItem