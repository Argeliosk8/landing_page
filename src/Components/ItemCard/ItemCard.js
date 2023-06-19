import React from "react";

function ItemCard(props){
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img src={props.ItemInfo.imgUrl}  class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{props.ItemInfo.title}</h5>
            <p class="card-text">{props.ItemInfo.body_text}</p>
            <a href="#" class="btn btn-primary">{props.ItemInfo.button_text}</a>
            </div>
        </div>
    )
}

export default ItemCard;