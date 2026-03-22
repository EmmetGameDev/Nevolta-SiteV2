import App from './App.jsx'
import AboutSite from './components/routes/AboutSite.jsx'
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  { index: true, Component: App },
  { path: "/about", Component: AboutSite }
])

export default router;