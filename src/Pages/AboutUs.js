import React from "react";
import Video from "../Images/Video.mp4";
import "../Styles/aboutUs.css"

function AboutUs(){
    return(
        <div className="container-fluid about-us">
            <video width="600" height="500" controls >
                <source src={Video} type="video/mp4"/>
            </video>
            <h2>Viaggia con noi alla scoperta delle meraviglie del mondo!</h2>

            <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia
                e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal
                sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri
                e li assemblò per preparare un testo campione.
                È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla
                videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare,
                negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che
                contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione
                come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
            </p>
        </div>
)
}
export default AboutUs;