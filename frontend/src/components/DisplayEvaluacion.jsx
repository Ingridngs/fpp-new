import React from 'react'
import ReactDOM from 'react-dom'
import  { useState ,useRef } from 'react';
import { EvCompetenciasDirectivo } from './competencias/EvCompetenciasDirectivo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
  import TabContent from 'react-bootstrap/TabContent'
  import TabPane from 'react-bootstrap/TabPane'
import { DropDownAswer } from './competencias/DropDownAswer';




const DisplayEvaluacion = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  return (
      <>
        <div className="main-tabs">
            <div className="bloc-tabs">
                    <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                    >
                    Competencias
                    </button>
                    <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                    >
                    Intrucciones
                    </button>
                    <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                    >
                    Evaluación
                    </button>
            </div>
        <div className="content-tabs">
            <div
            className={toggleState === 1 ? "content  active-content" : "content"}
            >
            <h2> ¿Qué son las competencias?</h2>
            <hr />
            <p>
                <div>
                    Las competencias son características, conductas, habilidades y actitudes que evidencian el desempeño excelente de una persona.  
                    Son cualidades del colaborador, por lo tanto son observables, cuantificables, medibles y diferencian a una persona de otras.
                </div>
            <br/>
            <div>
                <button  className='btn btn-primary'>Ir a Canva</button>
            </div>
            <br/>
            <div>
                <button  className='btn btn-primary'>Descargar Catálogo</button>
            </div>
            </p>
            </div>

            <div
            className={toggleState === 2 ? "content  active-content" : "content"}
            >
            <h2>Instrucciones</h2>
            <hr />
            
            <p>
                En esta sección se presentan las conductas esperadas para el colaborador según la posición que ocupa actualmente.
    Lea cada enunciado y reflexione acerca de circunstancias o situaciones en el trabajo en las cuales evidenció la conducta descrita (durante la ejecución de su trabajo, en algún proyecto específico, en situaciones críticas, situaciones con el cliente, con sus compañeros de trabajo, con sus jefes, con personas de otras áreas / gerencias, etc.).
            <br/>
            <br/>
            Calificación:
            <br/>
            <strong>-No muestra : </strong>Estos comportamientos no se demuestran en el nivel del rol o se demuestran tan rara vez que se los considera inusuales.
            <br/>
            <strong>-En desarrollo :  </strong> Demuestra algunos de estos comportamientos o los demuestra inconsistentemente. Es probable que las personas nuevas en el rol estén en este estado.
        
            <br/>
            <strong>-Competente : </strong> Demuestra constantemente los comportamientos deseados.
                <br/>
            <strong>-Modelo a seguir :</strong> Actúa consistentemente como un ejemplo para los demás demostrando estos comportamientos
                </p>
            </div>

            <div
            className={toggleState === 3 ? "content  active-content" : "content"}
            >
            <EvCompetenciasDirectivo/>
            </div>
        </div>
        </div>
    </>
  )
}

export default DisplayEvaluacion