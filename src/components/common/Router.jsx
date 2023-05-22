import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CommonViewPage from './CommonViewPage';
import DetailMessage from '../../pages/DetailMessage';
import Landing from '../../pages/Landing';
import Result from '../Result/Result';
import ScrollToTop from './ScrollToTop';
import VotingPage from '../../pages/Voting';

const Router = ({ reviewFlag, setReviewFlag }) => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
