import { styled } from 'styled-components';
import { ReactComponent as DummyManIcon } from '../../assets/icon/Group 2608530.svg';
import { useEffect, useState } from 'react';
import dataList from './data';
import client from '../../api/axios';

function IndivCard({ setCount, current, shuffle }) {
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
          <St.CardTitle>
            <div>{localData.data.receiverName}</div> 님과 <br /> 연결되는 오작교
          </St.CardTitle>
          <DummyManIcon />
        </St.TitleWrapper>
        <St.CardTitle style={{ marginTop: '35px' }}>{localData.data.question}</St.CardTitle>
        <St.SelectSection>
          {localData.data.answers.map(({ id, answer }) => (
            <St.OptionButton
              onClick={(e) => {
                setCount(e);
                const data = JSON.parse(localStorage.getItem('results'));
                data.results.push({ receiverId: localData.data.receiverId, answerId: id });
                console.log(data);
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
