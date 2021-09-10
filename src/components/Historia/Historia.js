import React, {Component} from 'react';
import Opciones from "../Opciones/Opciones";
import Recordatorio from "../Recordatorio/Recordatorio";
import datos from '../../json/data.json'


export default class Historia extends Component{
    constructor(props){
        super(props);
        this.state = {
            identificador: 1,
            id: "1",
            listaOpciones: [],

        }
    }
    
    componentDidUpdate = (prevProps, prevState ) => {


        const {identificador, id, listaOpciones} = this.state;

        if (prevState.identificador !== identificador && identificador <= 5) {
            listaOpciones.push(id.substring(1).toUpperCase());
            
        }  

    }

    handleOpcionA = () => {
        const {identificador} = this.state;

        if (identificador < 5) {

            this.setState(
                {
                    identificador: identificador + 1,
                    id: identificador + 1 + 'a',
        
                }
            )

            
        }
    };

    handleOpcionB = () => {
        const {identificador} = this.state;

        if (identificador < 5) {

            this.setState(
                {
                    identificador: identificador + 1,
                    id: identificador + 1 + 'b',
        
                }
            )
        }
    };


    render(){

        const { id,  listaOpciones} = this.state;
        const filtrarData = datos.find((objeto) => objeto.id.includes(id))
        console.log({filtrarData});
        let handles = {
            funA: this.handleOpcionA,
            funB: this.handleOpcionB,
        }
    
        return (
            <div className="layout">
                <h1 className="historia">{filtrarData.historia}</h1>

                <Opciones handles={handles} opciones={filtrarData.opciones}/>
                <Recordatorio opcionesPasadas={id.substring(1).toUpperCase()} 
                arrayOpciones={listaOpciones}/>
            </div>
        )
    }

}