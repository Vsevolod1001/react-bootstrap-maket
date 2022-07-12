import { Container, Card, Button, CardGroup } from "react-bootstrap";

import { CarouselBox } from "../Components/CarouselBox";

export const Home = () => {
  return (
    <div>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Our team</h2>
        <CardGroup>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};
