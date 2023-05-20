import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from '../../pages/Landing';
import DetailMessage from '../../pages/DetailMessage';
import CommonViewPage from './CommonViewPage';
import VotingPage from '../../pages/Voting';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<CommonViewPage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/vote" element={<VotingPage />} />
        <Route path="/detailmessage" element={<DetailMessage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
