import React from 'react'
import './Model.css'


const Popupmodel = ({show,handleClose,children,setConfirm}) => {
    const showHideClassName = show ? "model display-block" : "model display-none"

const ConfirmHandler=()=>{
    handleClose()
    setConfirm(true)
}



  return (
    <div className={showHideClassName}>

        <section className='model-main'>
            {children}
            <button className='btn btn-danger m-2' onClick={ConfirmHandler}>Confirm</button>
            <button className='btn btn-secondary' onClick={handleClose}>Close</button>
        </section>
        
    </div>
  )
}

export default Popupmodel