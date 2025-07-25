import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ProtectedRoute } from "./components/protectedRoute";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteAccount from "./pages/DeleteAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin">
          <Route index element={<Login />} /> {/* /admin */}
          <Route path="login" element={<Login />} />
          <Route path="privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="deleteAccount" element={<DeleteAccount />} />
          <Route
            path="dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Optional: Redirect any unknown routes to /admin/login */}
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
