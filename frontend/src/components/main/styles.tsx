import styled from "styled-components";

export const Container = styled.div`
`;

export const Logout = styled.div`
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

export const Desconected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
    @media (max-width: 600px) {
        flex-wrap: wrap;
        max-width: 100vw;
    }
    
`

export const NotFound = styled.div`
    display: flex;
    color: white;
    justify-content: center;
    background-size: auto;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url('/ng.png');
`

export const Transaction = styled.form`
    display: flex;
    flex-direction: column;
    width: 100vw;
    font-size: 14px;
    margin-top: 10%;
    text-align: center;
    height: 60vh;
    padding: 20px;
    justify-content: center;
    font-family: 'Oswald', sans-serif;
    border-radius: 3px;
    button {
        font-family: 'Oswald', sans-serif;
        font-size: 15px;
        margin-top: 10px;
        border: none;
        background: black;
        color: white;
        padding: 6px 20px;
        border-radius: 6px;
        :hover {
            background: #181818;
        }
    }
    input {
        border: none;
        font-family: 'Oswald', sans-serif;
        margin-top: 10px;
        font-size: 15px;
        margin-bottom: 10px;
        background-color: #E8F0FE;;
        border-radius: 4px;
        padding: 6px 4px
    }
    @media (min-width: 1000px) {
        margin-top: 0%;
        text-align: left;
        margin-left: 5%;

        width: 40vw;
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
        padding: 7px 50px
    }
    }
`;

export const TransactionHistory = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    font-size: 14px;
    margin-left: 10%;
    margin-top: 10%;
    margin-right: 12%;
    text-align: center;
    height: 60vh;
    padding: 20px;
    justify-content: center;
    font-family: 'Oswald', sans-serif;
    border-radius: 3px;
    button {
        font-family: 'Oswald', sans-serif;
        font-size: 15px;
        margin-top: 10px;
        border: none;
        background: black;
        color: white;
        padding: 6px 20px;
        border-radius: 6px;
        :hover {
            background: #181818;
        }
    }
    input {
        border: none;
        font-family: 'Oswald', sans-serif;
        margin-top: 10px;
        font-size: 15px;
        margin-bottom: 10px;
        background-color: #E8F0FE;;
        border-radius: 4px;
        padding: 6px 4px
    }

    img {
        height: 150px;
        weight: 340px;
    }

    @media (min-width: 1000px) {
        margin-top: 0%;
        margin-right: 2%;
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
        padding: 7px 50px
    }
    img {
        height: 230px;
        weight: 50px;
        padding-left: 80px;
        padding-right: 80px;
    }
    }
`;