import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TermsPage from "./pages/TermsPage";
import AcceptableUsePolicyPage from "./pages/AcceptableUsePolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import FAQPage from "./pages/FAQPage";
import ChildPrivacyPage from "./pages/ChildPrivacyPage";
import RevenueParticipationPage from "./pages/RevenueParticipationPage";
import GiftingPolicyPage from "./pages/GiftingPolicyPage";
import ReferralIncentivePage from "./pages/ReferralIncentivePage";
import QuarterlyAmbassadorPage from "./pages/QuarterlyAmbassadorPage";


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
]);
