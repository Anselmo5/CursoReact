const Events =() => {
    const handleMyevent = ()=>{ // criação de eventos
        alert('Ola Pessoal')
    }

    const tesren = (x) =>{
        if(x){
            return <h1>Também podemos fazer assim</h1>
        } else{
            return <h2> Mas assim também</h2>
        }
    }

    return(
        <div>
            <div>
                <button onClick ={() => handleMyevent}> Clik AQui</button> 
            </div>

            <div>
                <button onClick ={() => alert('Esse aqui também funciona')}> Clik Aqui Também, Por favor</button> {/*Ecento executado dentro do prorpi butão*/}
            </div>
            {tesren(true)}
            {tesren(false)}
        </div>
        )

}

export default Events