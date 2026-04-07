import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import Preloader from './components/Preloader';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Procedures = lazy(() => import('./pages/Procedures'));
const Contact = lazy(() => import('./pages/Contact'));
const AboutHairLoss = lazy(() => import('./pages/About'));
const Results = lazy(() => import('./pages/Results'));
const Insights = lazy(() => import('./pages/Insights'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ProcedureDetail = lazy(() => import('./pages/ProcedureDetail'));
const NewsArticle = lazy(() => import('./pages/NewsArticle'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Team = lazy(() => import('./pages/Team'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark-950">
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 border-2 border-dark-800 rounded-full"></div>
      <div className="absolute inset-0 border-2 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Custom Cursor Component (Optimized)
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const cursor = { x: 0, y: 0 };
    const outline = { x: 0, y: 0 };
    
    const moveCursor = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      
      // Use requestAnimationFrame for the smoothest possible movement
      requestAnimationFrame(() => {
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`;
        }
        if (outlineRef.current) {
          outlineRef.current.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`;
        }
      });
    };

    window.addEventListener('mousemove', moveCursor);

    const handleHover = () => {
      if (outlineRef.current) outlineRef.current.classList.add('hovered');
    };

    const handleLeave = () => {
      if (outlineRef.current) outlineRef.current.classList.remove('hovered');
    };

    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial attach
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block"></div>
      <div ref={outlineRef} className="cursor-outline hidden md:block"></div>
    </>
  );
};

// Animated Routes Wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-page-enter">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about-hair-loss" element={<AboutHairLoss />} />
        <Route path="/about" element={<Navigate to="/about-hair-loss" replace />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/procedures/:id" element={<ProcedureDetail />} />
        <Route path="/results" element={<Results />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/news" element={<Navigate to="/insights" replace />} />
        <Route path="/news/:id" element={<NewsArticle />} />
        <Route path="/blog" element={<Navigate to="/insights" replace />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-noise"></div>
      <CustomCursor />
      
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className="flex flex-col min-h-screen bg-dark-950 text-slate-300 font-sans selection:bg-gold-500/30">
        <Navbar />
        <WhatsAppFloat />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;