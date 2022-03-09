import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media(min-width: 1200px){
    background-color: rgba(0,0,0,0.5);
  }
`;

export const Container = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media(min-width: 600px){
    width: 70%;
    height: fit-content;
    background-color: var(--primary);
    border-radius: 10px;
  }

  @media(min-width: 1200px){
    width: 40%;
    height: fit-content;
    background-color: var(--primary);
    border-radius: 10px;
  }
`;

export const CloseButton = styled.button`
  font-size: 18px;
  margin: 20px;
  background: none;
  align-self: flex-end;

  display: none;
  @media (min-height: 400px){
    & {
      display: block;
    }
  }
`;

export const Label = styled.label`
  color: var(--white);
  margin: 0px 0 5px 0;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Days = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 5px;

  @media(min-width: 600px){
    align-self: center;
    gap: 20px;
  }

  @media(min-width: 1200px){
    align-self: center;
    gap: 20px;
  }
`;

export const Day = styled.input.attrs({ type: "checkbox" })`
  display: none;

  & + label:before{
    content: '${props => props.day}';
    width: 40px;
    height: 40px;
    border: 1px solid var(--white);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:checked + label:before{
    background-color: var(--secondary);
    color: var(--primary);
    border: 1px solid var(--primary);
  }
`;

export const Times = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  div{
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const Time = styled(Day)`
  & + label:before{
    content: '${props => props.time}';
    padding: 10px;
  }

  & + label + input{
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
  }

  &:checked + label + input{
    background-color: var(--secondary);
    border: 1px solid var(--primary);
    color: var(--primary);
    padding: 10px;
    font-size: 16px;
  }
`;

export const Submit = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: var(--secondary);
`;