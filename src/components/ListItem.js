import React from 'react';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';

const ListItem = (props) => {
  return (
    <ListGroup className="mt-5">
      {
        props.tasks.map((task, index) => {
          return <ListGroupItem
            key={task.id}
            className="d-flex justify-content-between align-items-center mb-2"
            color="info">
            <span>{task.text}</span>
            <Button onClick={() => props.remove(index)} color="danger">remove</Button>
          </ListGroupItem>
        })
      }
    </ListGroup>
  );
};

export default ListItem;
