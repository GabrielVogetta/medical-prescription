import React, { useState } from "react";
import { Container, Header, Title, Content, Days, Day, Description, Icon } from "./styles";
import BreakfastPNG from "../../assets/img/breakfast.png";
import LunchPNG from "../../assets/img/lunch.png";
import DinnerPNG from "../../assets/img/dinner.png";
import {ReactComponent as Arrow} from '../../assets/icon/arrow.svg';

export default function Accordion({ title, morning, afternoon, night }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Header
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Title>{`${title}`}</Title>
        <Icon isOpen={isOpen ? true : false}><Arrow/></Icon>
      </Header>
      <Content style={{ display: !isOpen && "none" }}>
        <Days>
          <Day checked>D</Day>
          <Day>S</Day>
          <Day>T</Day>
          <Day>Q</Day>
          <Day>Q</Day>
          <Day>S</Day>
          <Day>S</Day>
        </Days>
        {morning && (
          <Description>
            <div className='period'>
              <img src={BreakfastPNG} alt="" />
              <p>Café</p>
            </div>
            <p>{morning}</p>
          </Description>
        )}
        {afternoon && (
          <Description>
            <div className='period'>
              <img src={LunchPNG} alt="" />
              <p>Almoço</p>
            </div>
            <p>{afternoon}</p>
          </Description>
        )}
        {night && (
          <Description>
            <div className='period'>
              <img src={DinnerPNG} alt="" />
              <p>Jantar</p>
            </div>
            <p>{night}</p>
          </Description>
        )}
      </Content>
    </Container>
  );
}
