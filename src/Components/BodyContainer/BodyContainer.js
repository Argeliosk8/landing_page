import React from "react";
import TopBanner from "../TopBanner/TopBanner";
import ItemCard from "../ItemCard/ItemCard";
import ItemInfo from "../data/data";

function BodyContainer(){   

    function renderItemCards(){
        let renderedItems = []
        renderedItems = ItemInfo.map((item)=>{
            return <ItemCard ItemInfo={item}/>
        })
        return (<div className="d-flex justify-content-center flex-wrap">{renderedItems}</div>)
    }

    return (
        <div class="container">
            <TopBanner />            
            {renderItemCards()}            
        </div>
    )
}

export default BodyContainer;