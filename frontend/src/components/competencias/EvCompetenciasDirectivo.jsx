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
                          <h3 className='competencias'>{ data.competencia }</h3>
                      </div>
                      <hr />
                     <div>
                       <strong>
                            <p>
                          { data.definicion }
                        </p>
                       </strong>
                      </div>
                       <div className='question'>
                        <div>
                          
                              <p>🌟{ data.preguntas.one }</p>
                         
                        </div>
                        <div>
                              <DropDownAswer/>
                        </div>
                           <br />
                        <div>
                         
                              <p>{ data.preguntas.two }</p>
                         
                        </div>
                        <div>
                              <DropDownAswer/>
                        </div>
                           <br />
                        <div>
                          
                              <p>{ data.preguntas.three}</p>
                         
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
               
            <button className='new-theme'>Enviar </button>
                
            </div>
            </>
      )
}
