import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from '../../pages/Landing';
import DetailMessage from '../../pages/DetailMessage';
import CommonViewPage from './CommonViewPage';
import VotingPage from '../../pages/Voting';
import Result from '../Result/Result';

const Router = ({ reviewFlag, setReviewFlag }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<CommonViewPage />} />
        <Route path="/" element={<Landing setReviewFlag={setReviewFlag} />} />
        <Route path="/vote" element={<VotingPage reviewFlag={reviewFlag} />} />
        <Route path="/detailmessage/:reviewFlag" element={<DetailMessage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
