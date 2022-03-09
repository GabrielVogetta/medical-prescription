import styled from 'styled-components';

export const ContainerUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 100px;

    @media (min-width: 1200px){
        width: 90%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 30px;
        margin: 0 auto;
    }
`;