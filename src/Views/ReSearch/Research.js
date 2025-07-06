import { Box, Divider } from '@mui/material';

import TopNavBar from './Components/NavBar/TopNavBar';
import BookNavBar from './Components/NavBar/BookNavBar';
import BottomNavBar from './Components/NavBar/BottomNavBar';
import JournalInfo from './Components/JournalInfo';
import IssuesPanel from './Components/IssuesPanel';
import ArticlesSection from './Components/ArticleSection';
import Footer from './Components/Footer';

const Research = () => (
  <Box sx={{ width: '100%', boxSizing: 'border-box' }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <TopNavBar />
    </Box>
    <BookNavBar />
    <BottomNavBar />
    <Divider sx={{ background: '#fdd663' }} />
    <JournalInfo />
    <Box sx={{ display: 'flex', ml:'220px', mt: 5 }}>
      <IssuesPanel />
      <ArticlesSection />
    </Box>
    <Footer/>
  </Box>
);

export default Research;
