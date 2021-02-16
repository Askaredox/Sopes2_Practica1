import React from 'react';
import './Procesos.css';
//import Service from '../http-service';

import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

class Procesos extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[
                {i:0, id:'code', desc:'Visual Studio Code'},
                {i:1, id:'code', desc:'Visual Studio Code'},
                {i:2, id:'code', desc:'Visual Studio Code'},
                {i:3, id:'code', desc:'Visual Studio Code'},
                {i:4, id:'code', desc:'Visual Studio Code'},
                {i:5, id:'code', desc:'Visual Studio Code'},
                {i:6, id:'code', desc:'Visual Studio Code'},
                {i:7, id:'code', desc:'Visual Studio Code'},
                {i:8, id:'code', desc:'Visual Studio Code'},
                {i:9, id:'code', desc:'Visual Studio Code'},
                {i:10,id:'code', desc:'Visual Studio Code'},
                {i:11,id:'code', desc:'Visual Studio Code'},
            ]
        }
    }

    render(){
        return(
            <div className='table-v'>
                <h1>Procesos</h1>
                <Table
                    height={400}
                    data={this.state.data}
                    onRowClick={data => {
                        console.log(data);
                    }}
                >
                    <Column width={70} align="center" fixed>
                        <HeaderCell>No.</HeaderCell>
                        <Cell dataKey="i" />
                    </Column>

                    <Column width={200} fixed>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>descripcion</HeaderCell>
                        <Cell dataKey="desc" />
                    </Column>

                    <Column width={120} fixed="right">
                        <HeaderCell>Action</HeaderCell>

                        <Cell>
                            {rowData => {
                                function handleAction() {
                                    alert(`id:${rowData.id}`);
                                }
                                return (
                                <span>
                                    <a onClick={handleAction}> Kill </a> 
                                </span>
                                );
                            }}
                        </Cell>
                    </Column>
                </Table>
            </div>
        );
    }
}

export default Procesos;