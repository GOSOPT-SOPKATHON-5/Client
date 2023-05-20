import { useEffect, useState } from 'react';

import CommonViewPage from '../components/common/CommonViewPage';
import { GotoMessageIcon } from '../assets/icon';
import LandingHeader from '../components/Landing/LandingHeader';
import LandingProfile from '../components/Landing/LandingProfile';
import Logout from '../components/Landing/Logout';
import MessageList from '../components/Landing/MessageList';
import Modal from '../components/common/DetailModal';
import ModalPortal from '../components/common/ModalPortal';
import axios from 'axios';
import client from '../api/axios';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LANDING_DATA = {
  code: 200,
  message: '조회 성공하였습니다.',
  data: {
    userName: '박현정',
    userPoint: 0,
    userAnswers: [
      {
        id: 1,
        answer: '차안에서',
        createdAt: '2020.02.01',
      },
      {
        id: 2,
        answer: '달빛산책',
        createdAt: '2020.02.01',
      },
    ],
  },
};

function Landing(props) {
  const { setReviewFlag } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [apiData, setApiData] = useState('');

  let res;

  const getLandingData = async () => {
    try {
      client
        .get('/main')
        .then((res) => res.data)
        .then((data) => {
          if (data.code === 200) {
            res = data.data;
            setApiData(res);
            console.log(res);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  // try {
  //   client
  //     .get('/main')
  //     .then((res) => res.data)
  //     .then((data) => {
  //       if (data.code === 200) {
  //         res = data.data;
  //         setApiData(res);
  //         console.log(apiData);
  //       }
  //     });
  // } catch (err) {
  //   console.log(err);
  // }

  useEffect(() => {
    getLandingData();
    console.log(apiData);
  }, []);

  return (
    <>
      {modalOpen && (
        <ModalPortal>
          <Modal
            setModalOpen={setModalOpen}
            setReviewFlag={setReviewFlag}
            onClose={() => setModalOpen(false)}
            userPoint={apiData.userPoint}
          />
        </ModalPortal>
      )}
      <CommonViewPage>
        <St.LandingWrapper>
          <GotoMessageIcon className="gotoMessageBtn" onClick={() => navigate('/vote')} />
          <LandingHeader />
          {apiData.userAnswers && (
            <>
              <LandingProfile userName={apiData.userName} userPoint={apiData.userPoint} />
              <MessageList userAnswers={apiData.userAnswers} setModalOpen={setModalOpen} />
            </>
          )}
          {/* <LandingProfile userName={apiData.userName} userPoint={apiData.userPoint} />
          {/* 형근이 post 성공하면 <MessageList userAnswers={apiData.userAnswers} setModalOpen={setModalOpen} /> */}
          {/*<MessageList userAnswers={apiData.userAnswers} setModalOpen={setModalOpen} /> */}
          <Logout />
        </St.LandingWrapper>
      </CommonViewPage>
    </>
  );
}

export default Landing;

const St = {
  LandingWrapper: styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    background: radial-gradient(123.06% 123.06% at 50% 123.06%, #ffffff 0%, #8cacff 25%, #16151a 89.58%);
    padding: 0 16px;

    height: 100%;

    .gotoMessageBtn {
      position: fixed;
      top: calc(100vh - 90px);
      right: calc(50vw - 154.5px);

      cursor: pointer;
    }
  `,
};
