import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import FilmCard from '../components/FilmCard';
import uuid from 'react-uuid';

class Ligas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [0],
      img: '',
    };
  }
  async componentDidMount() {
    const response = await fetch(
      'https://api-football-standings.azharimm.site/leagues'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.data,
      selectedItem: responseData.data[0],
      img: responseData.data[0].logos.light,
    });
  }

  changeClicked(item) {
    this.setState({
      selectedItem: item,
      img: item.logos.light,
    });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <h1>Ligas Profesionales</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Liga</th>
                    <th>Abreviatura</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr key={uuid()} onClick={() => this.changeClicked(item)}>
                        <td>{item.name}</td>
                        <td>{item.slug}</td>
                        <td>{item.abbr}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              {/*<FilmCard data = {this.state.selectedItem}>*/}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.img} />
                <Card.Body>
                  <Card.Title>
                    Titulo Original: {this.state.selectedItem.name}
                    <p />
                    Abreviatura: {this.state.selectedItem.abbr}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Ligas;
