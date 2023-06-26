import { useState } from "react"

const Condicional = () =>{
    const [x] = useState(true);
    return(
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p> se x for true, sim</p>}
            {x && <p> Agora x é falso</p>}
        </div>
    );
};

export default Condicional;