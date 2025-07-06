import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Research from './Views/ReSearch/Research';

import Login from './Views/AuthorViews/Landing/Login';
import SignUp from './Views/AuthorViews/Landing/Signup';

import AuthorLayout from './Views/AuthorViews/Components/Layout';
import MainContent from './Views/AuthorViews/Dashboard';
import SubmitMainContent from './Views/AuthorViews/Submit';
import TrackMainContent from './Views/AuthorViews/Track';
import AuthorAccount from './Views/AuthorViews/Components/Account';

import AdminLayout from './Views/AdminViews/Components/Layout';
import Submissions from './Views/AdminViews/Submission';
import SubmissionView from './Views/AdminViews/Components/SubmissionView';
import VolumeManagement from './Views/AdminViews/Volume';
import AcceptedArticle from './Views/AdminViews/Accepted';
import AdminAccount from './Views/AdminViews/Components/Account';
import ArticleDetails from './Views/AdminViews/Components/ArticleDetails';

import themeOption from './css/main';

const App = () => {
  const theme = createTheme(themeOption);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/*Public Routes*/}
        <Route path="/" element={<Research/>}/>
        {/* Signin and Signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Redirect /author to dashboard */}
        <Route path="/author" element={<Navigate to="/author/dashboard" replace />} />

        {/* Author Layout Routes */}
        <Route path="/author/dashboard" element={<AuthorLayout />}>
          <Route index element={<MainContent />} />
          <Route path="submit" element={<SubmitMainContent />} />
          <Route path="track" element={<TrackMainContent />} />
          <Route path="account" element={<AuthorAccount />} />
        </Route>

        {/* Admin Layout Routes */}
        <Route path="/admin/submission" element={<AdminLayout />}>
          <Route index element={<Submissions />} />
          <Route path="submission/:id" element={<SubmissionView />} />
          <Route path="volume" element={<VolumeManagement />} />
          <Route path="account" element={<AdminAccount />} />
          <Route path="accept" element={<AcceptedArticle />} />
          <Route path="accept/:id" element={<ArticleDetails />} /> {/* Dynamic route for article details */}
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

