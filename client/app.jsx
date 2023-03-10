import React from 'react';
import Home from './pages/home';
import Navigation from './components/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../server/public/styles.css';
import parseRoute from './lib/parse-route';
import AddVehiclePage from './pages/add-vehicle-page';
import EditVehiclePage from './pages/edit-vehicle-page';
import AddServicePage from './pages/add-service-page';
import MyServicesPage from './pages/my-services-page';
import EditServicePage from './pages/edit-service-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  render() {
    return (
      <>
        <Navigation />
        {this.state.route.path === '' && <Home />}
        {this.state.route.path === 'my-garage' && <Home />}
        {this.state.route.path === 'new-vehicle' && <AddVehiclePage />}
        {this.state.route.path === 'edit-vehicle' && <EditVehiclePage />}
        {this.state.route.path === 'add-service' && <AddServicePage />}
        {this.state.route.path === 'my-service' && <MyServicesPage />}
        {this.state.route.path === 'edit-service' && <EditServicePage />}
      </>
    );
  }
}
