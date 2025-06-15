import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import { AppContextProvider } from "./app-context";
import SigninPage from "./pages/auth/signin";
import ProfilePage from "./pages/profile";
import SignupPage from "./pages/auth/signup";
import AppGuard from "./components/guard";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          {/* Grouped auth routes */}
          <Route path="/auth">
            <Route path="signin" element={<SigninPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>

          {/* Regular route */}
          <Route
            path="/"
            element={
              <AppGuard>
                <HomePage />
              </AppGuard>
            }
          />
          <Route
            path="/my-profile"
            element={
              <AppGuard>
                <ProfilePage />
              </AppGuard>
            }
          />

          {/* Route with param */}
          {/* <Route path="/profile/:id" element={<Profile />} /> */}

          {/* Fallback route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
