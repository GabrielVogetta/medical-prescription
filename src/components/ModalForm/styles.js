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
`;
export const Container = styled.form`
  border: 1px solid white;
  padding: 20px;
`;
export const Input = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 18px;
`;

export const Days = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
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
    background-color: var(--primary);
    border: 1px solid var(--primary);
  }
`;

export const Times = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  div{
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const Time = styled(Day)`
  & + label:before{
    content: '${props => props.time}';
    padding: 5px;
  }

  & + label + input{
    padding: 10px;
    font-size: 16px;
  }

  &:checked + label + input{
    background-color: var(--primary);
    border: 1px solid var(--primary);
    color: var(--white);
    padding: 10px;
    font-size: 16px;
  }
`;

export const Submit = styled.button``;

export const CloseButton = styled.button`
  padding: 10px;
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px;
`;