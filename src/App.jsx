import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {ProtectedRoute} from "./components/protectedRoute";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteAccount from "./pages/DeleteAccount";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
              <Login />
          }
        />
         <Route
          path="/privacyPolicy"
          element={
              <PrivacyPolicy />
          }
        />
        <Route
          path="/deleteAccount"
          element={
              <DeleteAccount />
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Router>
  );
}

export default App;