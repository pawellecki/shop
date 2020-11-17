import React, { FC } from 'react'
import { Grid, Typography, Link, makeStyles } from '@material-ui/core'
import logo from "../../assets/logo.jpg"
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `3px solid ${theme.palette.primary.light}`,
        padding: `0 ${theme.spacing(4)}px`,
        '& h6': {
            fontWeight: theme.typography.fontWeightBold
        }
    },
    description: {
        '& img': {
            width: 300,
            marginBottom: 20
        }
    },
    bestsellers: {
    },
    social: {
    },
    icon: {
        color: theme.palette.primary.light
    }
}))

const renderBestsellersList = (list: Array<{ path: string, text: string }>) =>
    <ul>
        {list?.map(({ path, text }) =>
            <li>
                <Link href={path}>{text}</Link>
            </li>
        )}
    </ul>


const Footer: FC<{}> = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={8} className={classes.footer}>
            <Grid item xs={4} className={classes.description} >
                <img src={logo} alt='logo' />
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</Typography>
            </Grid>
            <Grid item xs={4} className={classes.bestsellers}>
                <Typography variant='subtitle1'>Bestsellers</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {renderBestsellersList([
                            { path: '#', text: 'A4' },
                            { path: '#', text: 'A5' },
                            { path: '#', text: 'Pens' },
                            { path: '#', text: 'Staplers' },
                        ])}
                    </Grid>
                    <Grid item xs={6}>
                        {renderBestsellersList([
                            { path: '#', text: 'A4-2' },
                            { path: '#', text: 'A5-2' },
                            { path: '#', text: 'Pens-2' },
                            { path: '#', text: 'Staplers-2' },
                        ])}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} className={classes.social}>
                <Typography variant='subtitle1'>We're social!</Typography>
                <FacebookIcon   className={classes.icon}/>
                <TwitterIcon  className={classes.icon} />
                <LinkedInIcon className={classes.icon} />
            </Grid>
        </Grid>
    )
}

export default Footer
