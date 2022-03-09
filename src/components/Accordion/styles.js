import styled, {keyframes} from "styled-components";

export const Container = styled.li`
  width: 90%;
  color: #fdfdfd;
  position: relative;

  @media(min-width: 1200px){
    width: 60%;
  }

  @media(min-width: 1200px){
    width: 23%;
  }
`;

export const Header = styled.header`
  font-size: 18px;
  /* padding: 20px 50px; */
  padding: 10px;
  background-color: var(--secondary);
  color: #2e4450;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & span{
    font-size: 15px;
  }

  & span:after {
    position: absolute;
    content: 'Miligramas';
    display: none;
    padding: 5px;
    background-color: var(--primary);
    color: var(--white);
    z-index: 3;
    bottom: 50px;
    border: 1px solid var(--white);
    border-radius: 10px;
  }

  & span:hover:after{
    display: block;
  }

  @media(min-width: 600px){
    padding: 20px; 
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  &::selection{
    color: var(--white);
    background-color: var(--primary);
  }
  &:after {
    position: absolute;
    content: 'Nome do medicamento';
    display: none;
    padding: 5px;
    background-color: var(--primary);
    color: var(--white);
    z-index: 3;
    bottom: 50px;
    border: 1px solid var(--white);
    border-radius: 10px;
  }

  &:hover:after{
    display: block;
  }
`;

const OpenAnimation = keyframes`  
  from { 
    transform: rotateX(-90deg);
    top: 0px;
  }
  
  to { 
    transform: rotateX(0deg);
    top: 70px;
  }
`;

export const Content = styled.main`
  padding: 10px;
  padding-bottom: 20px;
  height: fit-content;
  background-color: #527c88;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  margin-top: 2px;
  gap: 5px;

  & span{
    margin-left: 10px;
  }

  & .label{
    display: flex;
    width: 90%;
    justify-content: space-between;
  }

  .medicines{
    width: 90%;
    display: flex;
    flex-direction: column;
  }

  @media(min-width: 1200px){
    &{
      position: absolute;
      width: 100%;
      z-index: 2;
      animation: ${OpenAnimation} .5s;
    }
  }
`;

export const ContentHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  background-color: var(--red);
  padding: 5px;
  border-radius: 10px;
  color: var(--white);
`;

export const Days = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;  
`;
  
export const Day = styled.div`
  padding: 6px 10px;
  border: 1px solid;
  border-color: ${props => props.checked ? 'var(--primary)' : 'var(--white)'};
  border-radius: 50%;
  background-color: ${props => props.checked && 'var(--primary)'};
  position: relative;

  &:after {
    position: absolute;
    content: '${props => props.day}';
    display: none;
    padding: 5px;
    background-color: var(--primary);
    color: var(--white);
    z-index: 3;
    bottom: 30px;
    border: 1px solid var(--white);
    border-radius: 10px;
  }

  &:hover:after{
    display: block;
  }
`;

export const Description = styled.div`
  font-size: 17px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding-right: 30px;


  &:last-child {
    margin-bottom: 0;
  }
  
  p{
    padding-top: 5px;
    &::selection{
      color: var(--white);
      background-color: var(--primary);
    }
  }
  .period{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;

  }

  img{
    width: 30px;
    height: 30px;
  }

  .number{
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const Icon = styled.button`
  font-size: 25px;
  transform: ${(props) => props.isOpen && "rotate(90deg)"};
  width: 30px;
  height: 30px;
  background: none;
  
  transition: all 1s ease;

  svg{
    width: 100%;
    fill: #2e4450;
  }
`;
