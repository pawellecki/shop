import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import AllProducts from "./pages/AllProducts"
import Inspirations from "./pages/Inspirations"
import About from "./pages/About"
import { Header, Container, Footer } from "./components"
import './App.css';

const routes = [
  { text: 'All our products', path: '/all-products', component: AllProducts },
  { text: 'Inspiration for the office', path: '/inspirations', component: Inspirations },
  { text: 'About OS', path: '/about', component: About },
]

const renderRoutes = () => {
  return routes.map(({ path, component }) => (
    <Route key={path} path={path} component={component} />
  ))
}

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header routes={routes} />
        <Container maxWidth="lg">
          <Switch>
            <Redirect exact path="/" to="/all-products" />
            {renderRoutes()}
          </Switch>
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
