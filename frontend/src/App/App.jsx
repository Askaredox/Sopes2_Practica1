import React, { Component, Suspense } from 'react'
import { Navbar, Icon, Nav } from 'rsuite';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      active: '0'
    }
  }

  render(){
    return(
      <div className='App'>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <h3 className="navbar-brand logo"> Controlador </h3>
          </Navbar.Header>
          <Navbar.Body>
            <Nav onSelect={this.onSelect} activeKey={this.state.active}>
              <Nav.Item eventKey="0" icon={<Icon icon="home" />}> Procesos </Nav.Item>
              <Nav.Item eventKey="1" icon={<Icon icon="area-chart" />}> Gráficas </Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
        {
          this.state.active === '0' ?
            <h1>Procesos</h1> :
            <h1>graficas</h1>
        }
      </div>
    )
  }

  onSelect = (active) => {
    this.setState({ active: active });
  }
}

export default App;
