import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: rgba(0,0,0,0.1);
    padding: 20px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;

    @media(min-width: 600px){
        & {
            width: 50%;
        }
    }
`;