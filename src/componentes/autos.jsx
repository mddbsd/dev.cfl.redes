import autos from '../json/datos.json';

export default function Autos(){
    //const autos = require("../json/datos.json");

    return(
        <div>
            {autos[0].color}
        </div>
    )
}