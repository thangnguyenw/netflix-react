import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

function Netflix(props) {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div>
            <Navbar isScrolled={isScrolled}></Navbar>
        </div>
    );
}

export default Netflix;

const Container = styled.div`
    
`;