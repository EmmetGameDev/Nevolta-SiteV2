import { createBrowserRouter } from "react-router";

import App from './App.jsx'
import AboutSite from './components/routes/AboutSite.tsx'
import ContactPage from './components/routes/ContactSite.tsx';
import NotFoundPage from './components/routes/NotFoundPage.tsx';
import PrivacySite from './components/routes/PrivacySite.tsx';
import CookieSite from './components/routes/CookieSite.tsx';
import BlogSite from './components/routes/BlogSite.tsx';
import {default as Nevolta32_SpecsPage} from './components/routes/nevolta32/specs.tsx';
import {default as Nevolta32_CapabilitiesPage} from './components/routes/nevolta32/capabilities.tsx';

const router = createBrowserRouter([
  { index: true, Component: App},
  //{ path: "/", Component: App },
  { path: "/about", Component: AboutSite },
  { path: "/contact", Component: ContactPage },
  { path: "/blog", Component: BlogSite },
  { path: "/nevolta32/specs", Component: Nevolta32_SpecsPage },
  { path: "/nevolta32/capabilities", Component: Nevolta32_CapabilitiesPage },
  { path: "/privacy", Component: PrivacySite },
  { path: "/cookies", Component: CookieSite },
  { path: "*", Component: NotFoundPage }
])

export default router;