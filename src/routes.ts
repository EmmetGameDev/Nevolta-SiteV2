import { createBrowserRouter } from "react-router";

import App from './App.jsx'
import AboutSite from './components/routes/AboutSite.tsx'
import ContactPage from './components/routes/ContactSite.tsx';
import NotFoundPage from './components/routes/NotFoundPage.tsx';
import ProductsSite from './components/routes/ProductsSite.tsx';
import {default as ModelV_SpecsPage} from './components/routes/modelV/specs.tsx';
import {default as ModelV_CapabilitiesPage} from './components/routes/modelV/capabilities.tsx';
import {default as ModelV_KitsPage} from './components/routes/modelV/kits.tsx';

const router = createBrowserRouter([
  { path: "/Nevolta-SiteV2/", Component: App },
  { path: "/Nevolta-SiteV2/about", Component: AboutSite },
  { path: "/Nevolta-SiteV2/contact", Component: ContactPage },
  { path: "/Nevolta-SiteV2/products", Component: ProductsSite },
  { path: "/Nevolta-SiteV2/model-v", Component: ModelV_KitsPage },
  { path: "/Nevolta-SiteV2/model-v/specs", Component: ModelV_SpecsPage },
  { path: "/Nevolta-SiteV2/model-v/capabilities", Component: ModelV_CapabilitiesPage },
  { path: "*", Component: NotFoundPage }
])

export default router;