import React from 'react'
import { DropDownAswer } from './DropDownAswer'
import dataDirect from './competenciasGenerales.json'


export const EvCompetenciasDirectivo = () => {

  return (
    <>
            <div className='pregunta-container'>
              { dataDirect.map(( data,key )=>{ 
                  return(
                    <div>
                    <div  key={ key }>
                      <div>
                          <h3>{ data.competencia }</h3>
                      </div>
                      <hr />
                     <div>
                        <p>
                          { data.definicion }
                        </p>
                      </div>
                       <div className='question'>
                        <div>
                          <strong>
                              <p>{ data.preguntas.one }</p>
                          </strong>
                        </div>
                        <div>
                              <DropDownAswer/>
                        </div>
                           <br />
                        <div>
                          <strong>
                              <p>{ data.preguntas.two }</p>
                          </strong>
                        </div>
                        <div>
                              <DropDownAswer/>
                        </div>
                           <br />
                        <div>
                          <strong>
                              <p>{ data.preguntas.three}</p>
                          </strong>
                           <div>
                              <DropDownAswer/>
                        </div>
                           <br />
                        </div>  
                        </div>
                  </div>
                   <br />
                   </div>
                  )
                    
                     
              }
                  )
            }
               
            <button className='btn-primary'>Enviar </button>
                
            </div>
            </>
      )
}
