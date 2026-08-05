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
import CreatorContentPage from "./pages/CreatorContentPage";
import USDataCompliancePage from "./pages/USDataCompliancePage";
import HealthContentPolicyPage from "./pages/HealthContentPolicyPage";
import PatentsPage from "./pages/PatentsPage";
import NotFoundPage from "./pages/NotFoundPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: NotFoundPage,
  },
  {
    path: "/payment-success",
    Component: App,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/terms",
    Component: TermsPage,
  },
  {
    path: "/patents",
    Component: PatentsPage,
  },
  {
    path: "/acceptable-use-policy",
    Component: AcceptableUsePolicyPage,
  },
  {
    path: "/health-content-policy",
    Component: HealthContentPolicyPage,
  },
  {
    path: "/privacy",
    Component: PrivacyPolicyPage,
  },
  {
    path: "/faq",
    Component: FAQPage,
  },
  {
    path: "/child-privacy",
    Component: ChildPrivacyPage,
  },
  {
    path: "/revenue-participation",
    Component: RevenueParticipationPage,
  },
  {
    path: "/gifting-policy",
    Component: GiftingPolicyPage,
  },
  {
    path: "/referral-incentive",
    Component: ReferralIncentivePage,
  },
  {
    path: "/quarterly-ambassador",
    Component: QuarterlyAmbassadorPage,
  },
  {
    path: "/creator-content-policy",
    Component: CreatorContentPage,
  },
  {
    path: "/us-data-compliance",
    Component: USDataCompliancePage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
