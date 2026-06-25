import { createBrowserRouter } from "react-router";

import App from './App.jsx'
import AboutSite from './components/routes/AboutSite.tsx'
import ContactPage from './components/routes/ContactSite.tsx';
import NotFoundPage from './components/routes/NotFoundPage.tsx';
import ProductsSite from './components/routes/ProductsSite.tsx';
import PrivacySite from './components/routes/PrivacySite.tsx';
import CookieSite from './components/routes/CookieSite.tsx';
import BlogSite from './components/routes/BlogSite.tsx';
import {default as ModelV_SpecsPage} from './components/routes/modelV/specs.tsx';
import {default as ModelV_CapabilitiesPage} from './components/routes/modelV/capabilities.tsx';
import {default as ModelV_KitsPage} from './components/routes/modelV/kits.tsx';

const router = createBrowserRouter([
  { index: true, Component: App},
  //{ path: "/", Component: App },
  { path: "/about", Component: AboutSite },
  { path: "/contact", Component: ContactPage },
  { path: "/products", Component: ProductsSite },
  { path: "/blog", Component: BlogSite },
  { path: "/model-v", Component: ModelV_KitsPage },
  { path: "/model-v/specs", Component: ModelV_SpecsPage },
  { path: "/model-v/capabilities", Component: ModelV_CapabilitiesPage },
  { path: "/privacy", Component: PrivacySite },
  { path: "/cookies", Component: CookieSite },
  { path: "*", Component: NotFoundPage }
])

export default router;