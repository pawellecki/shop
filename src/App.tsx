import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AllProducts from "./pages/AllProducts"
import Inspirations from "./pages/Inspirations"
import About from "./pages/About"
import { Header, Container } from "./components"
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
      <Header routes={routes} />
      <Container maxWidth="lg">
        <Switch>
          <Redirect exact path="/" to="/all-products" />
          {renderRoutes()}
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
