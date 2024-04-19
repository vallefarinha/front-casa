import React from 'react';
import SendButton from '../buttons/SendButton';



const SendButtonForm = () => {
  return (
    <div className="mt-6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SendButton data="ENVIAR" go="/thanks" />
    </div>
  )
}

export default SendButtonForm