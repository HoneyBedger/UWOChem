import React from 'react';
import {Container, Row, Card, CardTitle, CardBody, ListGroup, ListGroupItem,
  ListGroupItemText, ListGroupItemHeading} from 'reactstrap';

function Tutorials(props) {

  let linkStyle = {color: "rgb(191, 80, 69)", fontWeight: "bold"};
  let textStyle = {fontSize: "90%"};

  return (
    <Container className="mt-5 pt-5 mb-5">
      <Row>
        <Card className="pt-5 pb-4">
          <CardTitle className="pl-4">More resources to study chemistry</CardTitle>
          <CardBody>
            <p>If you understand video tutorials better than written examples, check out
            these YouTube channels:</p>
            <ListGroup className="ml-5 mt-4 mb-4">
              <ListGroupItem>
                <ListGroupItemHeading>
                  <a style={linkStyle}
                    href="https://www.youtube.com/user/tdewitt451/playlists">Tyler DeWitt</a>
                </ListGroupItemHeading>
                <ListGroupItemText style={textStyle}>
                  Very practical tutorials covering the basics: limiting reagent problems,
                  VSEPR, electrochemistry, ideal gas law and much more.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>
                  <a style={linkStyle}
                    href="https://www.youtube.com/channel/UCEWpbFLzoYGPfuWUMFPSaoA/playlists">The Organic Chemistry Tutor</a>
                </ListGroupItemHeading>
                <ListGroupItemText style={textStyle}>
                  Despite the name, there is much more than just organic chemistry there.
                  The <i>New AP & General Chemistry</i> playlist has almost everything you need for Chem 1301 and 1302.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>
                  <a style={linkStyle}
                    href="https://www.youtube.com/user/TheChemistrySolution/videos">TheChemistrySolution</a>
                </ListGroupItemHeading>
                <ListGroupItemText style={textStyle}>
                  Another channel with worked out problems. This one is mostly about Chem 1302.
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
            <p>There are online courses too, with practice problems and quizzes:</p>
            <ListGroup className="ml-5 mt-4">
              <ListGroupItem>
                <ListGroupItemHeading>
                  <a style={linkStyle}
                    href="https://www.khanacademy.org/science/chemistry">Khan Academy</a>
                </ListGroupItemHeading>
                <ListGroupItemText style={textStyle}>
                  Khan Academy's chemistry is great! It includes
                  both the basics and the hard stuff, like VSEPR, buffers, kinetics etc.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>
                  Coursera <a style={linkStyle}
                    href="https://www.coursera.org/learn/general-chemistry">General Chemistry</a>,{' '}
                  <a style={linkStyle}
                    href="https://www.coursera.org/learn/physical-chemistry">Physical Chemistry</a>,{' '}
                  and <a style={linkStyle}
                    href="https://www.coursera.org/learn/advanced-chemistry">Advanced Chemistry</a>
                </ListGroupItemHeading>
                <ListGroupItemText style={textStyle}>
                  These three are for Chem 1302, with the General Chemistry course being the easiest one.
                  To access the course material, you need to enroll. Choose &lsquo;Full Course, No Certificate&rsquo;
                  to get it for free.
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
}

export default Tutorials;
