import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Modal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <St.ModalContainer>
      <St.ModalContent>
        셔플 한도를 초과했어요. <br /> 쪽지를 선택해주세요!
      </St.ModalContent>
    </St.ModalContainer>
  );
};

export default Modal;

const St = {
  ModalContainer: styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 99;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
  `,

  ModalContent: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 1.5rem;
    background-color: #000;

    width: 292px;
    height: 101px;
    text-align: center;
    line-height: 22px;
    color: #fff;
    font-size: 1.7rem;
  `,
};
