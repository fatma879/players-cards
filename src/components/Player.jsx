import Card from "react-bootstrap/Card";

function Player({
    name,
    team,
    nationality,
    jerseyNumber,
    age,
    image,
}) {
    return (
    <Card style={{ width: "18rem", margin: "20px" }}>
    <Card.Img
    variant="top"
    src={image}
    alt={name}
    style={{
    width: "100%",
    height: "200px",
    objectFit: "contain",
    }}/>

        <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text>
            Team: {team}
            <br />
            Nationality: {nationality}
            <br />
            Jersey Number: {jerseyNumber}
            <br />
            Age: {age}
        </Card.Text>
        </Card.Body>
    </Card>
    );
}

Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    image: "https://via.placeholder.com/300x300?text=Player",
};

export default Player;