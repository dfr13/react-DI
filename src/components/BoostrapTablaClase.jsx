import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { MenuTabla2 } from '../data/MenuTabla';
import uuid from 'react-uuid';

class BoostrapTablaClase extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    imgClick: MenuTabla2[0].img,
    equipoClick: MenuTabla2[0].nombre,
    abrClick: MenuTabla2[0].abr,
    };
  }

  changeClicked(item){
    this.setState ({
    imgClick: item.img,
    equipoClick: item.nombre,
    abrClick: item.abr,
    });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <h1>Equipos</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Ciudad</th>
                    <th>ABR</th>
                  </tr>
                </thead>
                <tbody>
                  {MenuTabla2.map((item) => {
                    return (
                      <tr
                       key = {uuid()}
                       onClick={ () => this.changeClicked(item)}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.ciudad}</td>
                        <td>{item.abr}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.state.imgClick} />
              <Card.Body>
                <Card.Title>
                  {this.state.equipoClick} {this.state.abrClick}
                </Card.Title>
              </Card.Body>
            </Card>
            <Col lg={4} md={6}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default BoostrapTablaClase;