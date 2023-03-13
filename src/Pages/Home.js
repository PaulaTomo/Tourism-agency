import Title from "./Components/Title";
import "../Styles/home.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


function Home(){
    return(
<div className="home-page-banner">
    <div className="color-overlay"></div>
    <div className="container-home-page">
    <Title title={"Scegli la tua destinazione perfetta!"}/>
        <p>Pianifica il tuo viaggio con noi!</p>
        <Link to="/destination">
   <Button variant="primary">Esplora offerte</Button>
        </Link>
</div>
</div>
    )
}
export default Home;