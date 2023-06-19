import React, { useDebugValue } from "react";
import JumboTron from "../JumboTron/JumboTron";
import Container from 'react-bootstrap/Container'

function BodyContainer(){
    return (
        <Container>
            <JumboTron />
        </Container>
    )
}

export default BodyContainer;