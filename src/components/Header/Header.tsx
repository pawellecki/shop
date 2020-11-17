import React, { FC, useState } from "react";
import { Collapse, createStyles, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AppBar, Menu } from "../../components";
import { Routes } from "../../utils/types"
import { Menu as MenuIcon } from "@material-ui/icons";
import logo from "../../assets/logo.jpg"

type Props = {
  routes: Routes
}

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      position: "static",
      justifyContent: "space-around",
      flexDirection: "row",
      marginBottom: "25px",
      padding: "10px 14px",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.main,
      [theme.breakpoints.down("sm")]: {
        display: "block",
      }
    },
    typographyBox: {
      width: 200,
    },
    typography: {
      textAlign: "center",
      color: "#fff",
    },
    icon: {
      position: "absolute",
      top: 14,
      right: 20,
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    menu: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "calc(100% - 400px)",
      [theme.breakpoints.down("sm")]: {
        display: "initial",
        maxWidth: "100%",
        "& li": {
          minHeight: 36,
        },
        "& li:first-of-type": {
          marginTop: 10,
        },
      },
    },
  })
);

const Header: FC<Props> = ({ routes }) => {
  const [isDrawerMenu, setIsDrawerMenu] = useState(false);

  const classes = useStyles();

  const mainRoutes = routes.filter((route) => route.text);

  const toggleDrawerMenu = () => setIsDrawerMenu(!isDrawerMenu);

  const renderMenu = <Menu config={mainRoutes} className={classes.menu} />;

  return (
    <AppBar className={classes.appBar}>
      <Link to='/all-products'>
        <img src={logo} alt='logo' />
      </Link>
      <MenuIcon
        onClick={toggleDrawerMenu}
        className={classes.icon}
      />
      {window.innerWidth > 959 ? (
        renderMenu
      ) : (
          <Collapse in={isDrawerMenu}>{renderMenu}</Collapse>
        )}
    </AppBar>
  );
};

export default Header;
