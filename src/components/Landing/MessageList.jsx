import Message from './Message';
import { SortIcon } from '../../assets/icon';
import { styled } from 'styled-components';

const messageCnt = 18;

function MessageList(props) {
  const { userAnswers, setModalOpen } = props;

  return (
    <St.MessageListWrapper>
      <div className="messageInfo">
        <span>총 {messageCnt}개</span>
        <span>
          <SortIcon />
          <small>최신순</small>
        </span>
      </div>
      <St.MessagesWrapper>
        {userAnswers.map((item) => {
          return <Message setModalOpen={setModalOpen} key={item.id} keyword={item.answer} time={item.createdAt} />;
        })}
      </St.MessagesWrapper>
    </St.MessageListWrapper>
  );
}

export default MessageList;

const St = {
  MessageListWrapper: styled.main`
    display: flex;
    flex-direction: column;

    .messageInfo {
      display: flex;
      justify-content: space-between;

      margin-top: 34px;
      margin-bottom: 18px;

      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;

      small {
        margin-left: 6px;
      }
    }
  `,
  MessagesWrapper: styled.div``,
};
