import { styled } from 'styled-components';
import IndivCard from './IndivCard';

function IndivCardList({ count, setCount }) {
  const XCount = count === 1 ? '314' : count === 2 ? '0' : '-314';
  return (
    <St.IndivCardWrapperList xcount={XCount}>
      {[0, 0, 0].map((_, idx) => (
        <IndivCard setCount={setCount} current={idx === count} count={count} key={idx} />
      ))}
    </St.IndivCardWrapperList>
  );
}

export default IndivCardList;

const St = {
  IndivCardWrapperList: styled.section`
    display: flex;
    gap: 19px;
    align-items: center;
    justify-content: center;
    transform: translateX(${({ xcount }) => xcount}px);
    transition-duration: 0.3s;
    margin-top: 49px;
    width: 100%;
    height: 491px;
  `,
};
