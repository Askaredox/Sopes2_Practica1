import React, { Component } from 'react'
import { Navbar, Icon, Nav } from 'rsuite';
import Graficas from '../Graficas/Graficas';
import Procesos from '../Procesos/Procesos';
import './App.css';

/**
 * Componente principal del app, redirije a todo el programa
 */
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      active: 0
    }
  }

  render(){
    return(
      <div className='App'>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <h3 className="navbar-brand"> Controlador </h3>
          </Navbar.Header>
          <Navbar.Body>
            <Nav onSelect={this.onSelect} activeKey={this.state.active}>
              <Nav.Item eventKey={0} icon={<Icon icon="home" />}> Procesos </Nav.Item>
              <Nav.Item eventKey={1} icon={<Icon icon="area-chart" />}> Gráficas </Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
        {
          this.state.active === 0 ?
            <Procesos/> :
            <Graficas/>
        }
      </div>
    )
  }
  /**
   * Selecciona el item que se selecciona en el navbar
   * @param {string} active simbolo activo
   */
  onSelect = (active) => {
    this.setState({ active: active });
  }
}

export default App;
