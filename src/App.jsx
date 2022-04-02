import './App.css';
import { CricbuzzHomepage } from './components/CriccbuzzHomepage';
import { Navbar } from './components/Navbar';
import { NewsDetailPage } from './components/NewsDetails';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { Footer } from './components/Footer';
import { LoginPage } from './components/LoginPage';
import { Home } from './components/Home';
import { OtpPage } from './components/OtpPage';
import { LiveScores } from './components/LiveScores';
import { Schedule } from './components/Schedule';
import { Series } from './components/Series';
import { Teams } from './components/Teams';
import { Archives } from './components/Archives';
import { LatestNews } from './components/LatestNews';
import { Videoscb } from './components/Videos';
import { Photos } from './components/Photos';
import { PhotosGallery } from './components/PhotosGallery';
import { Rankings } from './components/Ranking';
import { Careers } from './components/Careers';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsofUses } from './components/TermsofUses';
import { Advertises } from './components/Advertises';
import { TvAds } from './components/TvAds';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Theme customization
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: red[600],
      },
      secondary: {
        main: grey[900],
      },
      background: {
        default: darkMode ? '#121212' : '#edf1fd',
      },
    },
  });

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          minHeight: '100vh',
          backgroundColor: darkMode ? '#121212' : '#edf1fd',
        }}>
        <Navbar handleTheme={handleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/livescores" element={<LiveScores />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/news" element={<LatestNews />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/series" element={<Series />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/videos" element={<Videoscb />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/ranking" element={<Rankings />} />
          <Route path="/photos/:id" element={<PhotosGallery />} />
          <Route path="/crickbuzzplus" element={<CricbuzzHomepage />} />
          <Route path="/login-otp" element={<OtpPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<TermsofUses />} />
          <Route path="/advertise" element={<Advertises />} />
          <Route path="/tvads" element={<TvAds />} />
        </Routes>
      </Paper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
