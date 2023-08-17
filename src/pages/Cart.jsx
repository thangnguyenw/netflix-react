import React from 'react';
import styled from 'styled-components';

function Card({ urlMovie }) {
    return (
        <Container>
            <img src={urlMovie} alt="movie" />
        </Container>
    );
}

export default Card;

const Container = styled.div``;