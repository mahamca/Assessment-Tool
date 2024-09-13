import React from 'react'
import './Model.css'


const Popup = ({show,handleClose,children}) => {
    const showHideClassName = show ? "model display-block" : "model display-none"

const ConfirmHandler=()=>{
    handleClose()

}



  return (
    <div className={showHideClassName}>

        <section className='model-main'>
            {children}
            
            <button className='btn btn-secondary' onClick={handleClose}>Close</button>
        </section>
        
    </div>
  )
}

export default Popup