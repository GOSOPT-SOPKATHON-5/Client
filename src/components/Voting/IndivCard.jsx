import { styled } from 'styled-components';
import { ReactComponent as DummyManIcon } from '../../assets/icon/Group 2608530.svg';

function IndivCard({ userName, setCount }) {
  return (
    <St.IndivCardWrapper>
      <St.MainWrapper>
        <St.TitleWrapper>
          <St.CardTitle>
            <div>{userName || '남연우'}</div> 님과 <br /> 연결되는 오작교
          </St.CardTitle>
          <DummyManIcon />
        </St.TitleWrapper>
        <St.CardTitle style={{ marginTop: '35px' }}>
          나는 이 사람과
          <br />
          000에서 놀고 싶다.
        </St.CardTitle>
        <St.SelectSection>
          <St.OptionButton onClick={setCount}>차안에서</St.OptionButton>
          <St.OptionButton onClick={setCount}>놀이공원에서</St.OptionButton>
          <St.OptionButton onClick={setCount}>솝트에서</St.OptionButton>
          <St.OptionButton onClick={setCount}>바다에서</St.OptionButton>
        </St.SelectSection>
      </St.MainWrapper>
    </St.IndivCardWrapper>
  );
}

export default IndivCard;

const St = {
  IndivCardWrapper: styled.section`
    display: flex;
    flex-direction: column;
    & > article {
      background-color: #ffffff49;
    }
  `,
  MainWrapper: styled.article`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 49px;
    border: 1px solid #fff;
    border-radius: 20px;
    padding-left: 22px;
    width: 295px;
    height: 419px;
  `,
  TitleWrapper: styled.article`
    display: flex;
    position: absolute;
    top: -90px;
    gap: 23px;
    justify-content: center;
    margin-top: 35px;
    background-color: none;
  `,
  CardTitle: styled.span`
    line-height: 25px;
    color: #fff;
    font-size: 19px;
    div {
      display: inline;
      color: #8cacff;
    }
  `,
  SelectSection: styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
    margin-top: 32px;
  `,
  OptionButton: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 52px;
    background-color: #fff;
    padding: 12px;
    color: #000;
    font-size: 18px;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  `,
};
