import React, { FC, useState } from "react";
import { Collapse, fade, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Menu, Button } from "../../components";
import { Menu as MenuIcon, ShoppingCart } from "@material-ui/icons";
import { CartItem } from "../../utils/types"
import { sumObjectsValues } from "../../utils/reduce"
import logo from "../../assets/logo.jpg"

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderTop: `3px solid ${theme.palette.primary.light}`,
    position: "static",
    justifyContent: "space-around",
    padding: "0 24px 10px",
    backgroundColor: theme.palette.secondary.contrastText,
    [theme.breakpoints.down("sm")]: {
      padding: '0 16px 8px 16px',
    }
  },
  appBarRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    }
  },
  logo: {
    width: 200
  },
  searchWithButton: {
    display: 'flex',
    justifyContent: 'start',
    height: 36,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  search: {
    position: 'relative',
    transition: '0.2s',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.85),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.light, 1),
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  menuIcon: {
    cursor: 'pointer',
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menu: {
    display: "flex",
    width: '100%',
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
  cart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& svg': {
      color: theme.palette.primary.light
    },
    '& p': {
      margin: '0 10px'
    },
    
    '& button, & p': {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    }
  },
})
);

const routes = [
  { text: 'All our products', path: '/all-products' },
  { text: 'Inspiration for the office', path: '/inspirations' },
  { text: 'About OS', path: '/about' },
]

type Props = {
  cart: CartItem[]
}

const Header: FC<Props> = ({ cart }) => {
  const [isDrawerMenu, setIsDrawerMenu] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const classes = useStyles();

  const mdBreakpoint = 959
  
  const toggleDrawerMenu = () => setIsDrawerMenu(!isDrawerMenu);

  const handleSearch = () => console.log(searchInputValue)

  const renderMenu = <Menu config={routes} className={classes.menu} />;

  const handleSetSearchInputValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => setSearchInputValue(event?.target?.value)

  const renderSearch = (
    <div className={classes.searchWithButton}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          value={searchInputValue}
          onChange={handleSetSearchInputValue}
        />
      </div>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  )

  const renderCart = (
    <div className={classes.cart}>
      <Link to='/cart'>
        <ShoppingCart />
      </Link>
      {cart?.length ?
        <>
          <Typography color='primary'>
            {cart.length} st
              </Typography>
          <Typography color='primary'>
            {sumObjectsValues(cart, 'value')} kr
              </Typography>
        </> :
        <Typography color='primary'>
          cart is empty
        </Typography>
      }
      <Link to='/cart'>
        <Button>Check out</Button>
      </Link>
    </div>
  )

  return (
    <AppBar className={classes.appBar}>
      <div className={classes.appBarRow}>
        <MenuIcon
          color='primary'
          onClick={toggleDrawerMenu}
          className={classes.menuIcon}
        />
        <Link to='/all-products'>
          <img src={logo} alt='logo' className={classes.logo} />
        </Link>
        {renderSearch}
        {renderCart}
      </div>
      {
        window.innerWidth >= mdBreakpoint ? (
          renderMenu
        ) : (
            <Collapse in={isDrawerMenu}>
              {renderMenu}
            </Collapse>
          )
      }
    </AppBar >
  );
};

export default Header;
