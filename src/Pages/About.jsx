import { Container, Tab, Row, Col, Nav } from "react-bootstrap";

export const About = () => {
  return (
    <div>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first" href="#">
                    Desing
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" href="#">
                    Team
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="thrid" href="#">
                    Programing
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" href="#">
                    Frameworks
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth" href="#">
                    Libraries
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo atque nihil suscipit dolorem in optio officiis expedita
                    non! Molestias animi porro quidem aspernatur quia. Laborum
                    perspiciatis odio ab nam eveniet?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo atque nihil suscipit dolorem in optio officiis expedita
                    non! Molestias animi porro quidem aspernatur quia. Laborum
                    perspiciatis odio ab nam eveniet?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="thrid">
                  <img
                    src="https://thumbs.dreamstime.com/b/programing-workflow-abstract-algorithm-concept-background-computer-screen-118691020.jpg"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo atque nihil suscipit dolorem in optio officiis expedita
                    non! Molestias animi porro quidem aspernatur quia. Laborum
                    perspiciatis odio ab nam eveniet?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    src="https://www.cloudways.com/blog/wp-content/uploads/best-php-frameworks-1.jpg"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo atque nihil suscipit dolorem in optio officiis expedita
                    non! Molestias animi porro quidem aspernatur quia. Laborum
                    perspiciatis odio ab nam eveniet?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    perspiciatis odio ab nam eveniet?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo atque nihil suscipit dolorem in optio officiis expedita
                    non! Molestias animi porro quidem aspernatur quia. Laborum
                    perspiciatis odio ab nam eveniet?
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};
