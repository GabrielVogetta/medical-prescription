import { useState, useEffect, useRef } from "react";
import { Container, Header, Title, Content, ContentHeader, DeleteButton, Days, Day, Description, Icon } from "./styles";
import BreakfastPNG from "../../assets/img/breakfast.png";
import LunchPNG from "../../assets/img/lunch.png";
import DinnerPNG from "../../assets/img/dinner.png";
import {ReactComponent as Arrow} from '../../assets/icon/arrow.svg';
import {ReactComponent as Pill} from '../../assets/icon/pill.svg';
import supabaseApi from '../../api/index';
import {useMedicines} from '../../contexts/Medicines';

export default function Accordion({ id, name, days, breakfast, lunch, dinner, mg }) {
  const [isOpen, setIsOpen] = useState(false);

  const {medicines, setMedicines} = useMedicines();

  const refAccordion = useRef(null);

  const includes = (number) => {
    if(days.includes(number)) return true;

    return false;
  }
 
  const handleDelete = async () => {
    const res = await supabaseApi.deleteMedicine(id);
    
    if(res.error){
      alert('Houve um erro! tente novamente mais tarde');
      console.log(res.error);
      return;
    }

    const newMedicines = medicines.filter(current => current.id !== id);
    setMedicines(newMedicines);
  }

  useEffect(() => {
    window.addEventListener('click', ({target}) => {
      if(refAccordion.current){
        if(!refAccordion.current.contains(target)){
          setIsOpen(false);
        }
      }
    })
  }, []);

  return (
    <Container ref={refAccordion}>
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
        <ContentHeader>
          <span>Dias</span>
          <DeleteButton onClick={handleDelete}>
            Deletar
          </DeleteButton>
        </ContentHeader> 
        <Days>
          {
            days.length === 7 
              ? <>
                <Day checked day={'Domingo'}>D</Day>
                <Day checked day={'Segunda'}>S</Day>
                <Day checked day={'Terça'}>T</Day>
                <Day checked day={'Quarta'}>Q</Day>
                <Day checked day={'Quinta'}>Q</Day>
                <Day checked day={'Sexta'}>S</Day>
                <Day checked day={'Sábado'}>S</Day>
              </>

              : <>
                <Day checked={includes(1)} day={'Domingo'} >D</Day>
                <Day checked={includes(2)} day={'Segunda'} >S</Day>
                <Day checked={includes(3)} day={'Terça'} >T</Day>
                <Day checked={includes(4)} day={'Quarta'} >Q</Day>
                <Day checked={includes(5)} day={'Quinta'} >Q</Day>
                <Day checked={includes(6)} day={'Sexta'} >S</Day>
                <Day checked={includes(7)} day={'Sábado'} >S</Day>
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
