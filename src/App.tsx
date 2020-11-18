import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from "@material-ui/core";
import theme from './theme'
import AllProducts from "./pages/AllProducts"
import Inspirations from "./pages/Inspirations"
import About from "./pages/About"
import { Header, Container, Footer } from "./components"
import { CartItem } from "./utils/types"
import './App.css';

const useStyles = makeStyles((theme) => ({
  mainLayout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  mainLayoutBody: {
    flex: 1,
    padding: 30
  }
}))

const App = () => {
  const [cart, setCart] = useState<CartItem[]>([])

  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.mainLayout}>
          <Header cart={cart} />
          <div className={classes.mainLayoutBody}>
            <Container maxWidth="lg">
              <Switch>
                <Route path="/inspirations" component={Inspirations} />
                <Route path="/about" component={About} />
                <Route path="/cart" render={() => <AllProducts cart={cart} />} />
                <Route path="/" render={() => <AllProducts cart={cart} />} />
              </Switch>
            </Container>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
