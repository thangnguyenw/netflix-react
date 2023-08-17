import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Player(props) {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="player">
                <div className="back">
                    <BsArrowLeft onClick={() => navigate('/')} />
                </div>
                <video src='https://pic.pikbest.com/pre-videos/9/630019.mp4_10s.mp4' autoPlay loop controls muted />
            </div>
        </Container>
    );
}

export default Player;

const Container = styled.div`
    .player {
    width: 100vw;
    height: 100vh;
    .back {
        position: absolute;
        padding: 2rem;
        z-index: 1;
        svg {
            font-size: 3rem;
            cursor: pointer;
        }
    }
    video {
        height: 100%;
        width: 100%;
        object-fit: cover;
        }
    }
`;