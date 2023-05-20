import { styled } from 'styled-components';
import { ReactComponent as RightArrow } from '../../assets/icon/icon.svg';

function ProgressBar({ progress }) {
  return (
    <>
      <St.ProgressLine progress={progress} />
      <St.ProgressAndShuffle>
        <St.ProgressIndicator>{progress}/3</St.ProgressIndicator>
        <St.ShuffleIndicator>
          셔플 0/3
          <RightArrow />
        </St.ShuffleIndicator>
      </St.ProgressAndShuffle>
    </>
  );
}

export default ProgressBar;

const St = {
  ProgressLine: styled.div`
    transition-duration: 0.3s;
    border: 3px solid #fff;
    width: calc(100% / (4 - ${({ progress }) => progress}));
    height: 0;
  `,
  ProgressAndShuffle: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
  `,
  ProgressIndicator: styled.span`
    margin-left: 20px;
    color: #fff;
    font-size: 14px;
  `,
  ShuffleIndicator: styled.span`
    margin-right: 20px;
    color: #fff;
    font-size: 14px;
    svg {
      margin-left: 10px;
    }
  `,
};
