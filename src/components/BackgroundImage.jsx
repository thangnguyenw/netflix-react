import React from 'react';
import backgournd from '../assets/login.jpg'
import styled from 'styled-components';
function BackgroundImage(props) {
    return (
        <Container>
            <img src={backgournd} alt='background' />
        </Container>
    );
}

export default BackgroundImage;

const Container = styled.div`
    height: 100vh;
    width: 100vh;
    img {
        height: 100vh;
        width: 100vw;
    }
`;