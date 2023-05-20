import { NoteIcon } from '../../assets/icon';
import { styled } from 'styled-components';
function Message(props) {
  const { setModalOpen, keyword, time } = props;

  return (
    <St.MessageWrapper
      onClick={() => {
        setModalOpen(true);
      }}>
      <St.KeywordWrapper>
        <NoteIcon />
        <h3>{keyword}</h3>
      </St.KeywordWrapper>
      <small>{time}</small>
    </St.MessageWrapper>
  );
}

export default Message;

const St = {
  MessageWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 22px;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 12px;
    margin-bottom: 12px;

    small {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
    }
  `,
  KeywordWrapper: styled.div`
    display: flex;
    align-items: center;

    h3 {
      margin-left: 19px;

      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }
  `,
};
