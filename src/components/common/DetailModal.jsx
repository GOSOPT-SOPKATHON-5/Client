import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Modal = (props) => {
  const { setModalOpen, setReviewFlag, onClose, userPoint } = props;
  const navigate = useNavigate();
  return (
    <St.ModalContainer>
      <St.ModalContent>
        <St.ContentWrapper>
          {userPoint !== 0 ? (
            <>
              <St.Content>포인트를 사용해서</St.Content>
              <St.Content>나에게 온 쪽지를 확인할까요?</St.Content>
            </>
          ) : (
            <>
              <St.Content>투표를 진행한 후에</St.Content>
              <St.Content>바로 확인하시겠어요?</St.Content>
            </>
          )}
        </St.ContentWrapper>

        <St.PointWrapper>
          <St.Point>현재 보유 포인트:</St.Point>
          <St.CurrentPoint>{userPoint}P</St.CurrentPoint>
        </St.PointWrapper>

        <St.BtnWrapper onClick={onClose}>
          <St.BackBtn>취소</St.BackBtn>
          {userPoint !== 0 ? (
            <St.GoBtn
              onClick={() => {
                setModalOpen(false);
                setTimeout(() => {
                  navigate('/detailMessage');
                }, 0);
              }}>
              확인하기
            </St.GoBtn>
          ) : (
            <St.GoBtn
              onClick={() => {
                navigate('/vote');
                setReviewFlag(true);
              }}>
              투표 후 확인
            </St.GoBtn>
          )}
        </St.BtnWrapper>
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
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  `,

  ModalContent: styled.div`
    display: grid;

    border-radius: 1.5rem;
    background-color: #ffffff;

    width: 324px;
    height: 204px;
    font-size: 1.7rem;
  `,

  ContentWrapper: styled.div`
    margin: 22px 44px 0px 27px;
    line-height: 28px;
    font-size: 20px;
    font-weight: 600;
    font-style: normal;
  `,

  Content: styled.p``,

  PointWrapper: styled.div`
    display: flex;
    margin-top: 8px;
    margin-left: 27px;
    color: #5c5c5c;
    font-size: 14px;
  `,
  Point: styled.p``,
  CurrentPoint: styled.p``,

  BtnWrapper: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 23px;
    margin-bottom: 17px;
    font-size: 18px;
  `,

  BackBtn: styled.button`
    border: none;
    border-radius: 16px;
    background-color: #f5f4f8;
    width: 141px;
    height: 56px;
    color: #000000;
  `,

  GoBtn: styled.button`
    border: none;
    border-radius: 16px;
    background-color: #000000;
    width: 141px;
    height: 56px;
    color: #f5f4f8;
  `,
};
