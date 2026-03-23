import { createBrowserRouter } from "react-router";

import App from './App.jsx'
import AboutSite from './components/routes/AboutSite.tsx'
import ContactPage from './components/routes/ContactSite.tsx';
import NotFoundPage from './components/routes/NotFoundPage.tsx';
import ProductsSite from './components/routes/ProductsSite.tsx';

const router = createBrowserRouter([
  { index: true, Component: App },
  { path: "/about", Component: AboutSite },
  { path: "/contact", Component: ContactPage },
  { path: "/products", Component: ProductsSite },
  { path: "*", Component: NotFoundPage }
])

export default router;