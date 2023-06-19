import React, { useDebugValue } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Container from 'react-bootstrap/Container'
import ItemCard from "../ItemCard/ItemCard";

function BodyContainer(){
    const ItemInfo = [
        {
            imgUrl : 'https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            title: 'Tech Combo1',
            body_text: "Some quick example text to build on the card title and make up the bulk of the card's content",
            button_text: 'Click me'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            title: 'Tech Combo1',
            body_text: "Some quick example text to build on the card title and make up the bulk of the card's content",
            button_text: 'Click me'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            title: 'Tech Combo1',
            body_text: "Some quick example text to build on the card title and make up the bulk of the card's content",
            button_text: 'Click me'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            title: 'Tech Combo1',
            body_text: "Some quick example text to build on the card title and make up the bulk of the card's content",
            button_text: 'Click me'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            title: 'Tech Combo1',
            body_text: "Some quick example text to build on the card title and make up the bulk of the card's content",
            button_text: 'Click me'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            title: 'Tech Combo1',
            body_text: "Some quick example text to build on the card title and make up the bulk of the card's content",
            button_text: 'Click me'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            title: 'Tech Combo1',
            body_text: "Some quick example text to build on the card title and make up the bulk of the card's content",
            button_text: 'Click me'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            title: 'Tech Combo1',
            body_text: "Some quick example text to build on the card title and make up the bulk of the card's content",
            button_text: 'Click me'
        }
    ]

    function renderItemCards(){
        let renderedItems = []
        renderedItems = ItemInfo.map((item)=>{
            return <ItemCard ItemInfo={item}/>
        })
        return renderedItems
    }

    return (
        <Container>
            <TopBanner />
            <div className="d-flex justify-content-center flex-wrap">
                {renderItemCards()}
            </div>
        </Container>
    )
}

export default BodyContainer;