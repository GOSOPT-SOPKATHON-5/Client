import { styled } from 'styled-components';
import { ReactComponent as DummyManIcon } from '../../assets/icon/Group 2608530.svg';
import { useEffect, useState } from 'react';
import dataList from './data';
import client from '../../api/axios';

function IndivCard({ setCount, current, count, shuffle }) {
  const [localData, setLocalData] = useState(dataList);
  // if (current) {
  //   try {
  //     const { data } = client.get('/question');
  //     setLocalData(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // useEffect(() => {
  //   try {
  //     const { data } = client.get('/question');
  //     setLocalData(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [shuffle]);

  return (
    <St.IndivCardWrapper>
      <St.MainWrapper>
        <St.TitleWrapper>
          <St.CardTitle count={count}>
            <div>{localData.data.receiverName}</div> 님과 <br /> 연결되는 오늘의 새벽
          </St.CardTitle>
          <img src="hyo.png" alt="효원" />
        </St.TitleWrapper>
        <St.CardTitle style={{ marginTop: '35px' }}>
          나는 이 사람과 <br />
          {localData.data.question}
        </St.CardTitle>
        <St.SelectSection>
          {localData.data.answers.map(({ id, answer }) => (
            <St.OptionButton
              onClick={(e) => {
                setCount(e);
                const data = JSON.parse(localStorage.getItem('results'));
                data.results.push({ receiverId: localData.data.receiverId, answerId: id });
                localStorage.setItem('results', JSON.stringify(data));
              }}
              key={id}>
              {answer}
            </St.OptionButton>
          ))}
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
      background-color: rgba(255, 255, 255, 0.09);
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
    top: -120px;
    gap: 23px;
    justify-content: center;
    margin-top: 35px;

    background-color: none;
    img {
      transform: translateX(30px);
    }
  `,
  CardTitle: styled.span`
    line-height: 25px;
    color: #fff;
    font-size: 19px;
    div {
      display: inline;
      color: ${({ count }) => (count === 3 ? '#000' : '#8cacff')};
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
    background-color: rgba(255, 255, 255, 0.15);
    padding: 12px;
    color: #000;
    font-size: 18px;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  `,
};
