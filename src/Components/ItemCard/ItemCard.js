import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard(props){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.ItemInfo.imgUrl} />
            <Card.Body>
                <Card.Title>{props.ItemInfo.title}</Card.Title>
                <Card.Text>
                {props.ItemInfo.body_text}
                </Card.Text>
                <Button variant="primary">{props.ItemInfo.button_text}</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemCard;