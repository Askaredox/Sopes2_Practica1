import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import './Graficas.css';
import Service from '../http-service';

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
        }
        this.intervalo = setInterval(this.getData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalo);
    }

    getData = () => {

        let datos = this.state.server;
        datos = datos.slice(1);

        if(this.state.server)
            Service.watch().then(value => {
                datos.push(value);
                this.setState({ server: datos })
            });

    }

    render() {
        return (
            <div className='Graphs'>
                <h1>Graficas</h1>
                <h3>Servidor</h3>
                <LineChart width={600} height={300} data={this.state.server} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="ram" stroke="#8884d8" isAnimationActive={false} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />
                    <Legend />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                <h5>{this.state.server[this.state.server.length-1].ram}%</h5>
            </div>
        );
    }
}

export default Graficas;