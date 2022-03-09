import {useState} from 'react';
import {Container, Button} from './styles';
import ModalForm from '../ModalForm';

export default function MainFooter() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {
          isModalOpen &&
          <ModalForm onClose={() => {setIsModalOpen(false)}}/>
      }

      <Container>
          <Button onClick={() => {setIsModalOpen(true)}}>Adicionar +</Button>
      </Container>
    </>
  )
}
