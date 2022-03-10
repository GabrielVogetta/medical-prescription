import {useState, useRef, useEffect} from 'react';
import {Modal, Container, Label, Input, Days, Day, Times, Time, Submit, CloseButton} from './styles';
import {ReactComponent as CloseSVG} from '../../assets/icon/close.svg';
import supabaseApi from '../../api';
import {useMedicines} from '../../contexts/Medicines';

export default function ModalForm({onClose}) {

    const {medicines, setMedicines} = useMedicines();

    const [medicineName, setMedicineName] = useState('');

    const [mg, setMg] = useState(0);

    const [breakfast, setBreakfast] = useState(0);
    const [lunch, setLunch] = useState(0);
    const [dinner, setDinner] = useState(0);

    const [days, setDays] = useState([]);

    const $breakfastInput = useRef();
    const $lunchInput = useRef();
    const $dinnerInput = useRef();

    const refContainer = useRef(null);

    useEffect(() => {
        window.addEventListener('click', ({target}) => {
            if(refContainer.current){
                if(!refContainer.current.contains(target)){
                    onClose();
                }
            }
        })
    }, [onClose])

    const handleToggle = ({ target: {id} }) => {
        if(id === 'breakfast'){
            $breakfastInput.current.readOnly = !$breakfastInput.current.readOnly;
        } else if(id === 'lunch'){
            $lunchInput.current.readOnly = !$lunchInput.current.readOnly;
        }else{
            $dinnerInput.current.readOnly = !$dinnerInput.current.readOnly;
        }
    };

    const handleDays = (target, day) => {
        if(target.checked){
            setDays([...days, day]);
        }else{
            const newDays = days.filter(current => current !== day);
            setDays(newDays);
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const newMedicine = {
            name: medicineName,
            mg: mg,
            days: days,
            breakfast: breakfast,
            lunch: lunch,
            dinner: dinner
        };
        
        const res = await supabaseApi.insertMedicine(newMedicine);
        
        if(res.error){
            return;
        }
        
        setMedicines([...medicines, newMedicine]);
        onClose();
    }

    return (
        <Modal>
            <Container ref={refContainer}>

                <CloseButton onClick={() => {
                    onClose();
                }}>
                    <CloseSVG width='40px' height='40px'/>
                </CloseButton>

                <Label htmlFor='name'>Nome</Label>
                <Input 
                    id='name' 
                    placeholder='Digite o nome do medicamento' 
                    value={medicineName} 
                    onChange={e => {setMedicineName(e.target.value)}}
                    required
                />
                
                <Label htmlFor='mg'>Miligramas</Label>
                <Input
                    required
                    type='number' 
                    id='mg' 
                    placeholder='Digite a dose do medicamento' 
                    value={mg === 0 ? '' : mg}
                    onChange={e => {setMg(e.target.value)}}
                />
                
                <Days>
                    <Day id='domingo' day={'D'} onClick={({target}) => {handleDays(target, 1)}} />
                    <label htmlFor='domingo'/>

                    <Day id='segunda' day={'S'} onClick={({target}) => {handleDays(target, 2)}} />
                    <label htmlFor='segunda'/>
                    
                    <Day id='terca' day={'T'} onClick={({target}) => {handleDays(target, 3)}} />
                    <label htmlFor='terca'/>
                    
                    <Day id='quarta' day={'Q'} onClick={({target}) => {handleDays(target, 4)}} />
                    <label htmlFor='quarta'/>

                    <Day id='quinta' day={'Q'} onClick={({target}) => {handleDays(target, 5)}} />
                    <label htmlFor='quinta'/>

                    <Day id='sexta' day={'S'} onClick={({target}) => {handleDays(target, 6)}} />
                    <label htmlFor='sexta'/>

                    <Day id='sabado' day={'S'} onClick={({target}) => {handleDays(target, 7)}} />
                    <label htmlFor='sabado'/>                   
                </Days>
                <Times>

                    <div>
                        <Time 
                            id='breakfast' 
                            time='Café' 
                            onChange={handleToggle}
                        />
                        <label htmlFor='breakfast'/>
                        <input 
                            ref={$breakfastInput} 
                            type='number' 
                            value={breakfast === 0 ? '' : breakfast}
                             onChange={e => {setBreakfast(e.target.value)}} 
                            readOnly
                        />
                    </div>

                    <div>
                        <Time 
                            id='lunch' 
                            time='Almoço' 
                            onChange={handleToggle}
                        />
                        <label htmlFor='lunch'/>
                        <input 
                            ref={$lunchInput} 
                            type='number' 
                            value={lunch === 0 ? '' : lunch} 
                            onChange={e => {setLunch(e.target.value)}} 
                            readOnly
                        />
                    </div>

                    <div>
                        <Time 
                            id='dinner' 
                            time='Jantar' 
                            onChange={handleToggle}
                        />
                        <label htmlFor='dinner'/>
                        <input 
                            ref={$dinnerInput} 
                            type='number' 
                            value={dinner === 0 ? '' : dinner} 
                            onChange={e => {setDinner(e.target.value)}} 
                            readOnly
                        />
                    </div>
                </Times>

                <Submit onClick={handleSubmit}>Adicionar Medicamento</Submit>
            </Container>
        </Modal>
    )
}