import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import MovieLogo from '../assets/homeTitle.webp';
import background from '../assets/home.jpg';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BiSolidInfoCircle } from 'react-icons/bi'
function Netflix(props) {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className='hero'>
                <img src={background} alt="background" className='backgourd-image' />
                <div className="container">
                    <div className="logo">
                        <img src={MovieLogo} alt="Movie Logo" />
                    </div>
                    <div className="buttons flex">
                        <button className="flex j-center a-center">
                            {<BsFillPlayCircleFill />}Play
                        </button>
                        <button className="flex j-center a-center">
                            {<BiSolidInfoCircle />}More Info
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Netflix;

const Container = styled.div`
    background-color: black;
    .hero {
        position: relative;
        .background-image {
            filter: brightness(60%);
        }
        img {
            height: 100vh;
            width: 100vw;
        }
        .container {
            position: absolute;
            bottom: 5rem;
            .logo {
                img {
                    height: 100%;
                    width: 100%;
                    margin-left: 5rem;
                }
            }
            .buttons {
                /* border: 1px solid #000; */
                border: none;
                margin: 5rem;
                gap: 2rem;
                button {
                    border: none;
                    font-size: 1.4rem;
                    gap: 1rem;
                    border-radius: 0.2rem;
                    padding: 0.5rem;
                    padding-left: 2rem;
                    padding-right: 2.4rem;
                    text-align: center;
                    cursor: pointer;
                    transition: 0.3s ease-in-out;
                    &:hover {
                        opacity: 0.8;
                    }
                    &:nth-of-type(2) {
                        background-color:#AAA;
                        color: white;
                        svg {
                        }
                    }
                }
            }
        }
    }
`;