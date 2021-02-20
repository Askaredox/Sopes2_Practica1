import React from "react";
import "./Procesos.css";
import Service from '../http-service';

import { Tree, Panel, Placeholder, Button } from "rsuite";

const { Paragraph } = Placeholder;

class Procesos extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      proc: null
    };
  }
  componentDidMount(){
    this.get_data();
  }

  render() {
    let proc = this.state.proc?.item;
    return (
      <div className="table-v">
        <h1>Procesos</h1>
        <Tree data={this.state.data} defaultExpandAll onSelect={this.onSelect} className='arbol'/>
        <Panel header={proc ? proc.Nombre : 'Proc name'} shaded className='proc-panel'>
          {
            proc ? 
            (
              <div>
                <p>PID: {proc.PID}</p>
                <p>Estado: {proc.Estado}</p>
                <p>uid: {proc.uid}</p>
                <p>mm: {proc.mm}</p>
                {
                  proc.sub ?
                  (<p>sub-procesos: {proc.sub.length}</p>):null
                }
                <Button color="red" className='kill' onClick={()=>this.onKill(proc.PID)}>Kill</Button>
              </div>
            )
            :
            (<div><Paragraph /><br/><Paragraph /></div>)
          }
          
        </Panel>
      </div>
    );
  }
  get_data = ()=>{
    Service.cpu().then(value => {
      let processes = this.process_to_tree(value);
      this.setState({data: processes })
    });
  }

  process_to_tree=(pr)=>{
    let tree = [];
    if(pr){
      pr.forEach((item,i,_) => {
        let tree_item = {
          label: item.Nombre,
          value: item.PID,
          children: this.process_to_tree(item.sub),
          item: item
        };
        tree.push(tree_item);
      });
      return tree;
    }
    return null;
  };

  onSelect=(val)=>{
    console.log(val);
    this.setState({proc:val})
  }

  onKill=(val)=>{
    Service.kill(val);
    this.get_data();
  }

}

export default Procesos;
