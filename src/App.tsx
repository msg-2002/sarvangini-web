// FIX: Replaced placeholder content with the main App component, including routing.
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import MarriageSection from './pages/MarriageSection';
import ProfilesPage from './pages/ProfilesPage';
import SocialWorkPage from './pages/SocialWorkPage';
import ContactUsPage from './pages/ContactUsPage';
import DonatePage from './pages/DonatePage';
import JoinUsPage from './pages/JoinUsPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/marriage" element={<MarriageSection />} />
            <Route path="/profiles" element={<ProfilesPage />} />
            <Route path="/social-work" element={<SocialWorkPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/join-us" element={<JoinUsPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
