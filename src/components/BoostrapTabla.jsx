import React from 'react';
import { Table } from 'react-bootstrap';
import { MenuTabla, MenuTabla2 } from '../data/MenuTabla';
export function BoostrapTabla() {
  return (
    <div className="main-site">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {MenuTabla2.map((item) => {
            return (
              <tr>
                <td>{item.text}</td>
                <td>{item.text2}</td>
                <td>{item.text3}</td>
                <td>{item.text4}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
