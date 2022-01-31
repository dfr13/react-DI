import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import FilmCard from '../components/FilmCard';
import uuid from 'react-uuid';

class PelisGhibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
    };
  }
  async componentDidMount() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  changeClicked(item) {
    this.setState({
      selectedItem: item,
    });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <h1>Peliculas Ghibli</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Director</th>
                    <th>Año</th>
                    <th>Puntuacion</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key = {uuid()}
                        onClick={() => this.changeClicked(item)}>
                        <td>{item.title}</td>
                        <td>{item.director}</td>
                        <td>{item.release_date}</td>
                        <td>{item.rt_score}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
          {/*<FilmCard data = {this.state.selectedItem}>*/}
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.state.selectedItem.image} />
        <Card.Body>
          <Card.Title>
            Titulo Original: {this.state.selectedItem.original_title}
            <p />
            Descripcion: {this.state.selectedItem.description}
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
export default PelisGhibli;
