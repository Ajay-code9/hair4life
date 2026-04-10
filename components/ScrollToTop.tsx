import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Instant scroll to top — before paint, and bypasses global `scroll-behavior: smooth` on html */
function scrollToTopInstant() {
  const html = document.documentElement;
  const body = document.body;
  const prevHtmlBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  body.scrollTop = 0;
  requestAnimationFrame(() => {
    html.style.scrollBehavior = prevHtmlBehavior;
  });
}

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    scrollToTopInstant();
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;