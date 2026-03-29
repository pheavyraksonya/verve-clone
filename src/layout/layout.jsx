import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import PagesLayout from "./pagesLayout";
import LandingPage from "../pages/landing-page/LandingPage";
import LocationPage from "../pages/location/LocationPage";
import StoryPage from "../pages/story/StoryPage";
import CollectionLayout from "./collectionLayout";
import AllCoffee from "../pages/all-coffee/AllCoffee";
import LoginPage from "../pages/auth/login/loginPage";
import RegisterPage from "../pages/auth/register/registerPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PagesLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/collection" element={<CollectionLayout />}>
        <Route path="/collection/all-coffee" element={<AllCoffee />} />
      </Route>
    </Route>,
  ),
);
