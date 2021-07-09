import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import ItemCard from './ItemCard';
import Spinner from 'react-bootstrap/Spinner'

const Posts = () => {

    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setCard(data))

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)

    }, [])
    return (
        <>
            {
                loading ?
                    <div className="mt-5">
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Please wait a moment...
                    </div>

                    :

                    <CardGroup>
                        <div className="row px-4 mt-3 w-100">
                            {
                                card.map(card => <ItemCard card={card}></ItemCard>)
                            }
                        </div>
                    </CardGroup>
            }
        </>
    )
}

export default Posts
