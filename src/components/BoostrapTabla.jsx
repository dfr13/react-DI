import React from 'react';
import {Table} from 'react-bootstrap';
import { MenuTabla} from '../data/MenuTabla';
export function BoostrapTabla() {
return (
  <div className="main-site">
  <Table striped bordered hover>
<thead>
<tr>
{MenuTabla.map((item) => {
        return (
          <td>
          {item.text}
          </td>
        );
        })}
</tr>
</thead>
<tbody>
<tr>
{MenuTabla.map((item) => {
        return (
          <td>
          {item.text2}
          </td>
        );
        })}
</tr>
<tr>
{MenuTabla.map((item) => {
        return (
          <td>
          {item.text3}
          </td>
        );
        })}
</tr>
<tr>
{MenuTabla.map((item) => {
        return (
          <td>
          {item.text4}
          </td>
        );
        })}
</tr>
</tbody>
</Table>

</div>
);
}