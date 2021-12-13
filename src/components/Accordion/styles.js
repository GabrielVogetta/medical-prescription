import styled from "styled-components";

export const Container = styled.li`
  width: 90%;
  color: #fdfdfd;
  margin: 0 auto;
  margin-bottom: 10px;

  @media(min-width: 600px){
    width: 60%;
  }
`;

export const Header = styled.header`
  font-size: 18px;
  padding: 20px 50px;
  background-color: #89dee2;
  color: #2e4450;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;


`;

export const Title = styled.h2`
  font-size: 17px;
  &::selection{
    color: var(--white);
    background-color: var(--primary);
  }
`;

export const Content = styled.main`
  padding: 10px 10px 10px 20px;
  height: fit-content;
  background-color: #527c88;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  margin-top: 2px;
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
`;

export const Description = styled.p`
  font-size: 17px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
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
`;

export const Icon = styled.span`
  font-size: 25px;
  transform: ${(props) => props.isOpen && "rotate(90deg)"};
  width: 30px;
  height: 30px;
  
  transition: all 1s ease;

  svg{
    width: 100%;
    fill: #2e4450;
  }
`;
