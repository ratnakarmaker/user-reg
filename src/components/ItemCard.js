import React from 'react';
import { Card } from 'react-bootstrap';

const ItemCard = (props) => {
    const { title, body } = props.card;

    return (
        <>
            <div className="col-md-3 mb-3">
                <Card className="h-100">
                    <Card.Img variant="top" src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" />
                    <Card.Body className="text-left">
                        <Card.Title>{title.substring(0, 10)}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-left footer">
                        <a href="#" className="mx-2">Share</a>
                        <a href="#" className="mx-2">Learn More</a>
                    </Card.Footer>
                </Card>
            </div>

        </>
    )
}

export default ItemCard
