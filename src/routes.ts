import { createBrowserRouter } from "react-router";

import App from './App.jsx'
import AboutSite from './components/routes/AboutSite.tsx'
import ContactPage from './components/routes/ContactSite.tsx';
import NotFoundPage from './components/routes/NotFoundPage.tsx';

const router = createBrowserRouter([
  { index: true, Component: App },
  { path: "/about", Component: AboutSite },
  { path: "/contact", Component: ContactPage },
  { path: "*", Component: NotFoundPage }
])

export default router;