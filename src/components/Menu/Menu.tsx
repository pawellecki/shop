import React, { FC } from 'react'
import { MenuList, MenuItem, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { Routes } from "../../utils/types"

type Props = {
    config: Routes
    className: any
}

const useStyles = makeStyles((theme) => ({
    menuItem: {
        padding: '2px 0'
    },
    navLink: {
        width: '100%',
        padding: '0 8px',
        color: theme.palette.grey[500]
    }
}))

const MenuContainer: FC<Props> = ({ config, className }) => {
    const classes = useStyles()

    return (
        <MenuList className={className}>
            {config.map(({ text, path }) => (
                <MenuItem key={text} className={classes.menuItem}>
                    <NavLink to={path} activeClassName="activeNavLink" className={classes.navLink}>
                        {text}
                    </NavLink>
                </MenuItem>
            ))}
        </MenuList>
    )
}

export default MenuContainer
