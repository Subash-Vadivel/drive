import React from 'react'
import { Card,Button } from 'react-bootstrap'
function Frame(props) {
  return (
    <>
        <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            {props.time} && {props.date} && {props.pickuploc} && 
        </Card.Text>
        <Button variant="primary">{props.status}</Button>
      </Card.Body>
    </Card>
        </>
  
  )
}

export default Frame