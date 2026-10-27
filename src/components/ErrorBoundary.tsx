import { Component, type ErrorInfo, type ReactNode } from "react";

interface State {
  error: Error | null;
}

/** Last line of defence: if any part of the app crashes, show a message instead of a blank page. */
export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("MNP APPS site error:", error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{ maxWidth: 560, margin: "18vh auto 0", padding: 24, lineHeight: 1.55, color: "#cbd5e1", fontFamily: "system-ui, sans-serif" }}>
        <b style={{ color: "#fff" }}>MNP APPS</b>
        <p>Something went wrong while showing this page. Please refresh (Ctrl+Shift+R).</p>
        <p>
          <button type="button" onClick={() => window.location.reload()} style={{ padding: "10px 18px", borderRadius: 10, border: 0, background: "#2a7bff", color: "#fff", fontWeight: 600, cursor: "pointer" }}>
            Reload
          </button>
        </p>
        <small style={{ opacity: 0.7 }}>{this.state.error.message}</small>
      </div>
    );
  }
}
