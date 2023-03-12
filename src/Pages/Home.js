import Title from "./Components/Title";
import "../Styles/home.css";
// import Banner from "../Images/Banner.png"
import Button from "react-bootstrap/Button";


function Home(){
    return(
<div className="home-page-banner">
    <div className="color-overlay"></div>
    <div className="container-home-page">
    <Title title={"Scegli la tua destinazione perfetta!"}/>
        <p>Pianifica il tuo viaggio con noi!</p>
   <Button href="/destination" type="submit" variant="primary">Esplora offerte</Button>
</div>
</div>
    )
}
export default Home;