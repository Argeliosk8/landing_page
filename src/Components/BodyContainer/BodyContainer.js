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
        return renderedItems
    }

    return (
        <div class="container">
            <TopBanner />
            <div className="d-flex justify-content-center flex-wrap">
                {renderItemCards()}
            </div>
        </div>
    )
}

export default BodyContainer;