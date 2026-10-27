import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { EnquiryProvider } from "./hooks/useEnquiry";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* "user" makes every Framer Motion animation respect prefers-reduced-motion */}
    <MotionConfig reducedMotion="user">
      <ErrorBoundary>
        <EnquiryProvider>
          <App />
        </EnquiryProvider>
      </ErrorBoundary>
    </MotionConfig>
  </StrictMode>
);
