import styled from "styled-components";

export const Container = styled.div`
 
`;

export const FormArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8%;
    font-family: 'Oswald', sans-serif;
    text-align: center;
    @media (min-width: 1000px) {
        display: flex;
        margin-top: 10%;
        text-align: center;
    }
    @media (max-width: 500px) {
        flex-direction: column;
        
        div {
        display: flex;
        padding: 10px;
        flex-direction: column;
        text-align: center;
        margin-bottom: 10%;
    }
    }
`;

export const Back = styled.div`
    a {
    margin-right: 20px;
    border: none;
    color: black;
    text-decoration: none;
    background-color: white;
    font-family: 'Oswald', sans-serif;
    border-radius: 4px;
    padding: 5px 20px;
    margin-right: 10%;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    input {
        padding: 10px;
        border: none;
        font-family: 'Oswald', sans-serif;
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
        font-family: 'Oswald', sans-serif;
        padding: 10px;
        :hover {
            background: #242424;
        }
    }
    @media (min-width: 1000px) {
        justify-content: center;
        margin-top: -30px;
        margin-left: 10%;
        input {
            padding: 12px 100px;
            font-size: 16px;
        }
        button {
            padding: 10px 150px;
            font-size: 15px;
        }
    }
`;
