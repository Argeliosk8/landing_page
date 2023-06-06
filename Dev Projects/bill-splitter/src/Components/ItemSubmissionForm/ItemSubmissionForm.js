import React from "react";
import style from "./ItemSubmissionForm.module.css"

function ItemSubmissionForm(){

   const formLabel = {
        Payer: 'Payer...',
        Item: 'Item...',
        Quantity: 'Quantity...',
        Price: 'Unit Price...'
    }

    const formIds = {
        Payer: 'payer',
        Item: 'item',
        Quantity: 'qty',
        Price: 'price'
    }

    return (
        <div className={style.form}>
                <div className={style.formtitleDiv}>
                <span class="material-symbols-outlined">restaurant</span> <h3>Enter your order!</h3>
                </div>               
                <div className={style.inputDiv}>
                    <div><p class="material-symbols-outlined">person</p><input name="payer" type="text" id={formIds.Payer} className={style.payerInput} placeholder={formLabel.Payer}></input></div>
                    <div><p class="material-symbols-outlined">shopping_cart_checkout</p><input name="item" type="text" id={formIds.Item} className={style.itemInput} placeholder={formLabel.Item}></input></div>
                    <div><p class="material-symbols-outlined">123</p><input name="quantity" type="text" id={formIds.Quantity} className={style.quantityInput} placeholder={formLabel.Quantity}></input></div>
                    <div><p class="material-symbols-outlined">paid</p><input name="price" type="text" id={formIds.Price} className={style.priceInput} placeholder={formLabel.Price}></input></div>            
                </div>
                <div className={style.buttonDiv}>
                    <input type="submit" value="Add Item" className={style.addButton}></input>
                </div>
        </div>
    )
}

export default ItemSubmissionForm;