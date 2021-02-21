import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import './Graficas.css';
import Service from '../http-service';

import { Divider } from 'rsuite';

class Graficas extends React.Component {
    constructor() {
        super();
        this.state = {
            server: [
                { name: '00:00:00', ram: 0 },
                { name: '00:00:00', ram: 0 },
                { name: '00:00:00', ram: 0 },
                { name: '00:00:00', ram: 0 },
                { name: '00:00:00', ram: 0 },
                { name: '00:00:00', ram: 0 },
                { name: '00:00:00', ram: 0 },
                { name: '00:00:00', ram: 0 },
                { name: '00:00:00', ram: 0 },
                { name: '00:00:00', ram: 0 },
            ],
            conteo:{
                "Ejecucion": 0,
                "Suspendido": 0,
                "Detenido": 0,
                "Zombie": 0
            }
        }
        this.intervalo = setInterval(this.getData, 5000);
    }
    async componentDidMount(){
        console.log('entra')
        const res = await fetch(`http://104.198.201.4:8080/conteo`);
        const data2 = await res.json();
        console.log(data2)
        this.setState({ conteo: data2 })
        /*
        Service.conteo().then(value =>{
            this.setState({conteo:value})
        })*/
    }

    componentWillUnmount() {
        clearInterval(this.intervalo);
    }

    getData = async () => {

        let datos = this.state.server;
        datos = datos.slice(1);

        if(this.state.server){
            console.log('entra')
            const res = await fetch(`http://104.198.201.4:8080/ram`);
            const data2 = await res.json();
            console.log(data2,'le pegare a Andy')
            const DATE = new Date();
            const HH = DATE.getHours().toString();
            const MM = DATE.getMinutes().toString();
            const SS = DATE.getSeconds().toString();
            const obj={ name: `${HH}:${MM}:${SS}`, ram: data2.Porcentaje }
            datos.push(obj)
            this.setState({ server: datos})
        }
        /*
            Service.ram().then(value => {
                console.log('Algo')
                datos.push(value);
                this.setState({ server: datos })
            });
            */

    }

    render() {
        return (
            <div className='Graphs'>
                <h1>Graficas</h1>
                <h3>RAM</h3>
                <LineChart width={600} height={300} data={this.state.server} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="ram" stroke="#8884d8" isAnimationActive={false} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />
                    <Legend />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                <h5>{this.state.server[this.state.server.length-1].ram}%</h5>
                <Divider>------------------------------------------------------------------</Divider>
                <h3>Conteo</h3>
                <div>
                    <p>Ejecución: {this.state.conteo.Ejecucion}</p>
                    <p>Suspendido: {this.state.conteo.Suspendido}</p>
                    <p>Detenido: {this.state.conteo.Detenido}</p>
                    <p>Zombie: {this.state.conteo.Zombie}</p>
                </div>
            </div>
        );
    }
}

export default Graficas;