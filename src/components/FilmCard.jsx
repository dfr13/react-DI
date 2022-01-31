import { Card } from 'react-bootstrap';
import React from 'react';

class FilmCard extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.data.image} />
        <Card.Body>
          <Card.Title>
            Titulo Original: {this.data.original_title}
            <p />
            Descripcion: {this.data.description}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default FilmCard;
