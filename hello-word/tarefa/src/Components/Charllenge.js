const Charlleng =() => {
    let a = 10
    let b = 20
    let r = a+b

    return(
        <div>
            <h2> Esse são seus dois valores {a} {b}</h2>

            <div>
                <button onClick={()=> alert(r) }> Click Aqui</button>
            </div>
        </div>
    )
}

export default Charlleng