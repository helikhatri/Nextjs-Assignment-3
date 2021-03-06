import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'

function Card1() {
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: "card",
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <Card ref={dragRef} style={{ backgroundColor: isDragging ? "#fbb" : "palegoldenrod", height: '300px' }}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
  );
}

function Box({ card, moveCard, index }) {
  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: () => moveCard(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    // <div
    //   className="box"
    //   ref={dropRef}
    //   style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12" }}
    // >
    //   {card ? <Card1 /> : "Box"}
    // </div>
    <Card ref={dropRef} style={{ width: '300px', height: '300px', backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12" }}>
      {card ? <Card1 /> :
        <div>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title {index}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </div>
      }
    </Card>
  );
}

function drag() {
  const [index, setIndex] = useState(1);

  function moveCard(i) {
    setIndex(i);
  }

  return (
    <div>

      <CardGroup>
        <Box card={index === 1} moveCard={moveCard.bind(null, 1)} index='1'></Box>
        <Box card={index === 2} moveCard={moveCard.bind(null, 2)} index='2'></Box>
        <Box card={index === 3} moveCard={moveCard.bind(null, 3)} index='3'></Box>
      </CardGroup>
    </div>
  );
}

export default drag;