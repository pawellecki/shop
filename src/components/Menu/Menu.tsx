import React, { FC } from 'react'
import { MenuList, MenuItem, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { TextAndPath } from "../../utils/types"

type Props = {
    config: TextAndPath
    className: any
}

const useStyles = makeStyles((theme) => ({
    menuItem: {
        padding: '2px 0'
    },
    navLink: {
        width: '100%',
        padding: '0 8px',
        transiiton: '0.3s',
        color: theme.palette.primary.main,
        "&:hover, &:focus": {
            backgroundColor: theme.palette.primary.main
          }
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
