import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import TermsPage from "./pages/TermsPage";
import AcceptableUsePolicyPage from "./pages/AcceptableUsePolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import FAQPage from "./pages/FAQPage";
import ChildPrivacyPage from "./pages/ChildPrivacyPage";
import RevenueParticipationPage from "./pages/RevenueParticipationPage";
import GiftingPolicyPage from "./pages/GiftingPolicyPage";
import ReferralIncentivePage from "./pages/ReferralIncentivePage";
import QuarterlyAmbassadorPage from "./pages/QuarterlyAmbassadorPage";
import PatentsPage from "./pages/PatentsPage";
import NotFoundPage from "./pages/NotFoundPage";


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
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/patents",
    element: <PatentsPage />,
  },
  {
    path: "/acceptable-use-policy",
    element: <AcceptableUsePolicyPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/child-privacy",
    element: <ChildPrivacyPage />,
  },
  {
    path: "/revenue-participation",
    element: <RevenueParticipationPage />,
  },
  {
    path: "/gifting-policy",
    element: <GiftingPolicyPage />,
  },
  {
    path: "/referral-incentive",
    element: <ReferralIncentivePage />,
  },
  {
    path: "/quarterly-ambassador",
    element: <QuarterlyAmbassadorPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
