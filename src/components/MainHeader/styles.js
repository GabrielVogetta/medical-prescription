import styled from 'styled-components';

export const Container = styled.header`
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;
export const UserName = styled.h1`
    font-size: 20px;
    text-transform: uppercase;
    color: #fdfdfd;
    user-select: none;
`;
export const AddButton = styled.button`
    background-color: #fdfdfd;
    color: #222;
    font-size: 20px;
    padding: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
`;