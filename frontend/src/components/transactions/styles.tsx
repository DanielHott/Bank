import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Oswald', sans-serif;
    th{
        border: 1px solid #3E4C5E;
        padding: 5px;
        max-width: 32rem;
    }
    td {
            border-bottom: 1px solid black;
            border-right: 1px solid;
            border-left: 1px solid
    }
    @media (min-width: 1000px) {
        font-size: 22px;

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

export const Content = styled.div`
    font-family: 'Oswald', sans-serif;
    display: flex;
    flex-direction: column;
    text-align: center;
    h3 {color: black};
    div {
        display: flex;
        justify-content:space-around;
        button {
        margin-bottom: 10px;
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
        }
        th{
        border: 1px solid #3E4C5E;
        padding: 5px;
        max-width: 32rem;
    }
    @media (min-width: 1000px) {
        div {
            display: flex;
            justify-content:space-around;
            button {
        margin-bottom: 10px;
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
        }
        font-size: 22px;
        th{
        border: 1px solid #3E4C5E;
        padding: 5px;
        max-width: 32rem;
    }
}
`;
