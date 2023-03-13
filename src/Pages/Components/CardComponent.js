import React from 'react';
import {Card, Button, Col, Row} from 'react-bootstrap';
import "../../Styles/destination.css"

const CardComponent = () => {

    const cardData = [
        {
            id: 1,
            title: "Parigi",
            image: "https://www.riotgames.com/darkroom/1440/9f32e6c49de18ffa53a7ed6ed0910290:2d29085d3c0a20036cc5477cc3c74cc1/paris-adobestock-327345878.png",
            description: "La capitale francese affascina con la sua eleganza senza tempo.",
            price:"280 Euro",
            button:"./form"
        },
        {
            id: 2,
            title: "Londra",
            image: "https://i2-prod.mirror.co.uk/incoming/article28871026.ece/ALTERNATES/s1200d/0_London-at-sunset.jpg",
            description: "La città britannica regala emozioni sempre nuove e sorprendenti.",
            price:"350 Euro",
            button:"./form"
        },
        {
            id: 3,
            title: "Malta",
            image: "https://www.touringclub.it/sites/default/files/styles/gallery_full/public/immagini_georiferite/shutterstock_1929820274_0.jpg?itok=KREWO89h",
            description: "L'isola mediterranea ti conquista con il suo clima e il suo mare cristallino.",
            price:"420 Euro",
            button:"./form"
        },
        {
            id: 4,
            title: "Barcelona",
            image: "https://uceap.universityofcalifornia.edu/sites/default/files/2020-09/21s-century-barcelona-m2.jpg",
            description:"La città spagnola vanta una storia millenaria e un'arte senza confini.",
            price:"300 Euro",
            button:"./form"

        },
        {
            id: 5,
            title: "Roma",
            image: "https://www.roma.com/wp-content/uploads/2021/01/Roma-Roma-com.jpg",
            description: "La città eterna ti sorprende con i suoi tesori nascosti e le sue strade antiche.",
            price:"280 Euro",
            button:"./form"
        },
        {
            id: 6,
            title: "Helsinki",
            image: "https://siviaggia.it/wp-content/uploads/sites/2/2022/09/Helsinki.jpg?w=687&h=386&quality=90&strip=all&crop=1",
            description: "La capitale finlandese ti accoglie con il suo stile nordico e il suo design moderno.",
            price:"560 Euro",
            button:"./form"
        },
        {
            id: 7,
            title: "Dubai",
            image: "https://inviaggiodasola.com/wp-content/uploads/2017/01/Dubai-Marina-1000x675.jpg",
            description: "La città degli Emirati Arabi è sinonimo di lusso e di innovazione futuristica.",
            price:"722 Euro",
            button:"./form"
        },
        {
            id: 8,
            title: "Istanbul",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sWZVmMPuX0SdC3NqhPV8YJFCPraWFHmJJw&usqp=CAU",
            description:"La città turca racchiude in sé una cultura ricca di influenze e di contrasti.",
            price:"450 Euro",
            button:"./form"
        },
        {
            id: 9,
            title: "Amsterdam",
            image: "https://siviaggia.it/wp-content/uploads/sites/2/2022/09/Amsterdam-1.jpg?w=687&h=386&quality=90&strip=all&crop=1",
            description: "La città olandese incanta con i suoi canali romantici e le sue opere d'arte senza tempo.",
            price:"360 Euro",
            button:"./form"
        },
        {
            id: 10,
            title: "Lisbona",
            image: "https://www.anyworkanywhere.com/wp-content/uploads/elementor/thumbs/Vivere-a-Lisbona-o-vivere-a-Porto-powcywxkkh6nggif37tljiavnjgiynw0g1smamythk.jpg",
            description: "La città portoghese è un incanto di colori, di sapori e di musica.",
            price:"190 Euro",
            button:"./form"
        }
    ];

    return (
        <Row xs={1} md={4} className="g-10">
            {cardData.map((card, index) => (
            <Col>
                <Card key={index}>
                    <Card.Img variant="top" src={card.image} width={200} height={200} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                        <Card.Text className="price">Da {card.price}/Persona</Card.Text>
                        <Button href={card.button} variant="primary">Preventivo</Button>
                    </Card.Body>
                </Card>
        </Col>
            ))}

        </Row>
    );
}

export default CardComponent;
