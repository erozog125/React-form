import React from 'react';

export const InputUI = ({styleDiv,eventInput,type,idInput,placeHolderInput,styleInput,component}) => {
  return (
    <div className={styleDiv}>
      <input className={styleInput} onChange={eventInput} type={type} id={idInput} placeholder={placeHolderInput} />
      {component}
    </div>
  )
}
