import React, { useState } from "react";
import { Container, Header, Title, Content, Days, Day, Description, Icon } from "./styles";
import BreakfastPNG from "../../assets/img/breakfast.png";
import LunchPNG from "../../assets/img/lunch.png";
import DinnerPNG from "../../assets/img/dinner.png";
import {ReactComponent as Arrow} from '../../assets/icon/arrow.svg';
import {ReactComponent as Pill} from '../../assets/icon/pill.svg';

export default function Accordion({ name, days, breakfast, lunch, dinner, mg }) {
  const [isOpen, setIsOpen] = useState(false);

  function includes(number){
    if(days.includes(number)) return true;

    return false;
  }

  return (
    <Container>
      <Header
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Title>{name}</Title>
        <span>{mg}mg</span>
        <Icon isOpen={isOpen ? true : false}><Arrow/></Icon>
      </Header>
      <Content style={{ display: !isOpen && "none" }}>
        <span>Dias</span>
        <Days>
          {
            days.length === 7 
              ? <>
                <Day checked>D</Day>
                <Day checked>S</Day>
                <Day checked>T</Day>
                <Day checked>Q</Day>
                <Day checked>Q</Day>
                <Day checked>S</Day>
                <Day checked>S</Day>
              </>

              : <>
                <Day checked={includes(1)}>D</Day>
                <Day checked={includes(2)}>S</Day>
                <Day checked={includes(3)}>T</Day>
                <Day checked={includes(4)}>Q</Day>
                <Day checked={includes(5)}>Q</Day>
                <Day checked={includes(6)}>S</Day>
                <Day checked={includes(7)}>S</Day>
              </>
          }
        </Days>
        <div className='label'> 
          <p>Período</p>
          <p>Comprimido(s)</p>
        </div>

          <div className='medicines'>

            {breakfast && (
              <Description>
                <div className='period'>
                  <img src={BreakfastPNG} alt="" />
                  <p>Café</p>
                </div>
                <div className='number'>
                  <p>{breakfast}</p>
                  <Pill width='25' height='25'/>
                </div>
              </Description>
            )}
            {lunch && (
              <Description>
                <div className='period'>
                  <img src={LunchPNG} alt="" />
                  <p>Almoço</p>
                </div>
                <div className='number'>
                  <p>{lunch}</p>
                  <Pill width='25' height='25'/>
                </div>
              </Description>
            )}
            {dinner && (
              <Description>
                <div className='period'>
                  <img src={DinnerPNG} alt="" />
                  <p>Jantar</p>
                </div>
                <div className='number'>
                  <p>{dinner}</p>
                  <Pill width='25' height='25'/>
                </div>
              </Description>
            )}

          </div> 


        
      </Content>
    </Container>
  );
}
