import React, {useState, useRef} from 'react';
import {Modal, Container, Input, Days, Day, Times, Time, Submit, CloseButton} from './styles';

export default function ModalForm({onClose}) {

    const [medicineName, setMedicineName] = useState('');

    const [breakfast, setBreakfast] = useState(0);
    const [lunch, setLunch] = useState(0);
    const [dinner, setDinner] = useState(0);

    const $breakfastInput = useRef();
    const $lunchInput = useRef();
    const $dinnerInput = useRef();

    const handleToggle = ({ target: {id} }) => {
        if(id === 'breakfast'){
            $breakfastInput.current.readOnly = !$breakfastInput.current.readOnly;
        } else if(id === 'lunch'){
            $lunchInput.current.readOnly = !$lunchInput.current.readOnly;
        }else{
            $dinnerInput.current.readOnly = !$dinnerInput.current.readOnly;
        }
    };

    return (
        <Modal>
            <CloseButton onClick={() => {
                onClose();
            }}>
                Fechar
            </CloseButton>
            
            <Container>
                <Input placeholder='Nome' value={medicineName} onChange={e => {setMedicineName(e.target.value)}}/>
                <Days>
                    <Day id='domingo' day={'D'}/>
                    <label htmlFor='domingo'/>

                    <Day id='segunda' day={'S'}/>
                    <label htmlFor='segunda'/>
                    
                    <Day id='terca' day={'T'}/>
                    <label htmlFor='terca'/>
                    
                    <Day id='quarta' day={'Q'}/>
                    <label htmlFor='quarta'/>

                    <Day id='quinta' day={'Q'}/>
                    <label htmlFor='quinta'/>

                    <Day id='sexta' day={'S'}/>
                    <label htmlFor='sexta'/>

                    <Day id='sabado' day={'S'}/>
                    <label htmlFor='sabado'/>                   
                </Days>
                <Times>

                    <div>
                        <Time id='breakfast' time='Manhã' onChange={handleToggle}/>
                        <label htmlFor='breakfast'/>
                        <input ref={$breakfastInput} type='number' value={breakfast} onChange={e => {setBreakfast(e.target.value)}} readOnly/>
                    </div>

                    <div>
                        <Time id='lunch' time='Tarde' onChange={handleToggle}/>
                        <label htmlFor='lunch'/>
                        <input ref={$lunchInput} type='number' value={lunch} onChange={e => {setLunch(e.target.value)}} readOnly/>
                    </div>

                    <div>
                        <Time id='dinner' time='Noite' onChange={handleToggle}/>
                        <label htmlFor='dinner'/>
                        <input ref={$dinnerInput} type='number' value={dinner} onChange={e => {setDinner(e.target.value)}} readOnly/>
                    </div>
                </Times>

                <Submit></Submit>
            </Container>
        </Modal>
    )
}
