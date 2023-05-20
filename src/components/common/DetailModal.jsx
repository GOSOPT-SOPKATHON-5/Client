import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Modal = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <St.ModalContainer>
      <St.ModalContent>
        <St.ContentWrapper>
          {/* 포인트 받아오면 포인트 !== 0 ? 아래 문구 리턴 :  (투표를 진행한 후에\n바로 진행하시겠어요?) 하고 onClick도 변경해야함 */}
          <St.Content>포인트를 사용해서</St.Content>
          <St.Content>나에게 온 쪽지를 확인할까요?</St.Content>
        </St.ContentWrapper>

        <St.PointWrapper>
          <St.Point>현재 보유 포인트:</St.Point>
          <St.CurrentPoint>5P</St.CurrentPoint>
        </St.PointWrapper>

        <St.BtnWrapper>
          <St.BackBtn
            onClick={() => {
              navigate(`${location.pathname}`);
            }}>
            취소
          </St.BackBtn>
          <St.GoBtn
            onClick={() => {
              navigate(`/detailMessage`);
            }}>
            확인하기
          </St.GoBtn>
        </St.BtnWrapper>
      </St.ModalContent>
    </St.ModalContainer>
  );
};

export default Modal;

const St = {
  ModalContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  `,

  ModalContent: styled.div`
    display: grid;

    width: 324px;
    height: 204px;

    border-radius: 1.5rem;
    background-color: #ffffff;
    font-size: 1.7rem;
  `,

  ContentWrapper: styled.div`
    margin: 22px 44px 0px 27px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  `,

  Content: styled.p``,

  PointWrapper: styled.div`
    display: flex;
    margin-left: 27px;
    margin-top: 8px;
    font-size: 14px;
    color: #5c5c5c;
  `,
  Point: styled.p``,
  CurrentPoint: styled.p``,

  BtnWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 23px;
    margin-bottom: 17px;
    font-size: 18px;
    gap: 8px;
  `,

  BackBtn: styled.button`
    width: 141px;
    height: 56px;
    background-color: #f5f4f8;
    color: #000000;
    border-radius: 16px;
    border: none;
  `,

  GoBtn: styled.button`
    width: 141px;
    height: 56px;
    background-color: #000000;
    color: #f5f4f8;
    border-radius: 16px;
    border: none;
  `,
};
