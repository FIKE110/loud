import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TermsPage from "./pages/TermsPage";
import AcceptableUsePolicyPage from "./pages/AcceptableUsePolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/payment-success",
    element: <App />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/acceptable-use-policy",
    element: <AcceptableUsePolicyPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicyPage />,
  },
]);
