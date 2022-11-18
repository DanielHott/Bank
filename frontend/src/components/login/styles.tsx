import styled from "styled-components";

export const Container = styled.div`
    
`;

export const Create = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 12%;
    font-family: 'Oswald', sans-serif;
    div {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    a {
        color: black;
        background: black;
        text-decoration: none;
        margin-bottom: 4%;
        color: white;
        border-radius: 5px;
        padding: 5px 40px;
        :hover {
            background: #242424;
        }
    }
    @media (max-width: 500px) {
        flex-direction: column;
        div {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 20%;
    }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 6px 20px;
    justify-content: center;
    padding: 0px;

    input {
        padding: 10px;
        border: none;
        border-radius: 5px;
        text-align: center;
        background: #E8F0FE;
        margin-bottom: 15px;
    }
    button {
        margin-top: 20px;
        border: none;
        color: white;
        border-radius: 5px;
        background: black;
        padding: 5px 40px;
        :hover {
            background: #242424;
        }
    }

    @media (min-width: 1000px) {
        justify-content: center;
        margin-top: 0%;
        text-align: left;
        input {
        border: none;
        text-align: center;
        font-family: 'Oswald', sans-serif;
        background-color: #E8F0FE;;
        border-radius: 4px;
        font-family: 'Oswald', sans-serif;
        margin-top: 10px;
        font-size: 15px;
        margin-bottom: 10px;
        padding: 7px 100px
    }
        button {
            padding: 7px 160px;
            :hover {
            background: #242424;
        }
        }
    }
`;

export const Back = styled.div`
    button {
    margin-right: 20px;
    border: none;
    background-color: white;
    font-family: 'Oswald', sans-serif;
    border-radius: 4px;
    padding: 5px 20px;
    :hover {
        background-color: #d4cfcf;
    }
    }
    display: flex;
    justify-content: space-around;
    background: black;
    width: 100%;
    color: white;
    align-items: center;
    font-family: 'Oswald', sans-serif;
    font-size: 10px;
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

