import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-around;
    background: black;
    width: 100%;
    color: white;
    bottom: 0;
    align-items: center;
    font-family: 'Oswald', sans-serif;
    font-size: 9px;
    img {
        min-width: 80px;
        max-width: 200px;
        min-height: 50px;
        max-height: 120px;
    }
    @media (min-width: 1000px) {
        font-size: 14px;
    }
`;
