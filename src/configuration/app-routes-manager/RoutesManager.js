import { useContext, useEffect } from "react";
import { LanguageContext } from "../app-context-manager/LanguageContext";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";
import { Home, Accommodations, Region, Policy, Contacts } from "pages";

export const RoutesManager = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate(`/${language}/${location.pathname.substring(4)}`, {
      replace: true,
    });
  }, [language, setLanguage, location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${language}/`} />} />
      <Route path={`/${language}`} element={<Home />} />
      <Route
        path={`/${language}/accommodations`}
        element={<Accommodations />}
      />
      <Route path={`/${language}/region`} element={<Region />} />
      <Route path={`/${language}/policy`} element={<Policy />} />
      <Route path={`/${language}/contacts`} element={<Contacts />} />
    </Routes>
  );
};
