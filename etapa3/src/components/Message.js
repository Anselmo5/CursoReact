import React from 'react'

const Message = ({msg}) => {
  return (
    //State life, tem como ideia trabalhar com elevações de states, onde modificamos alguma mensasgem atraveis de outro componente, sendo que um componente filho recebera a mensagem, o pai vai intermedia as duas funções, e o outro componente filho ira alterar a mensagem do outro componente filho, isso tudo passando pelo pai
    <div>
       Essa e a mensagem:{msg}
    </div>
  )
}

export default Message
