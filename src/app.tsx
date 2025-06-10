import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import { AppContextProvider } from "./app-context";
import SigninPage from "./pages/auth/signin";


function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          {/* Grouped auth routes */}
          <Route path="/auth">
            <Route path="signin" element={<SigninPage />} />
            {/* <Route path="register" element={<Register />} /> */}
          </Route>

          {/* Regular route */}
          <Route path="/" element={<HomePage />} />

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
