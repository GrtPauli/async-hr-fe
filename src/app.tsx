import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import { AppContextProvider } from "./app-context";
import SigninPage from "./pages/auth/signin";
import ProfilePage from "./pages/profile";
import SignupPage from "./pages/auth/signup";
import AppGuard from "./components/guard";
import RecordAttendancePage from "./pages/attendance/record";
import AttendanceSummaryPage from "./pages/attendance/summary";
import EmployeesPage from "./pages/employees";
import EmployeeDetailPage from "./pages/employees/detail";
import AdminAttendancePage from "./pages/attendance/admin";

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
          <Route
            path="/attendance/summary"
            element={
              <AppGuard>
                <AttendanceSummaryPage />
              </AppGuard>
            }
          />
          <Route
            path="/attendance/record"
            element={
              <AppGuard>
                <RecordAttendancePage />
              </AppGuard>
            }
          />
          <Route
            path="/admin/employees"
            element={
              <AppGuard>
                <EmployeesPage />
              </AppGuard>
            }
          />
          <Route
            path="/admin/employees/:id"
            element={
              <AppGuard>
                <EmployeeDetailPage />
              </AppGuard>
            }
          />
          <Route
            path="/admin/attendance"
            element={
              <AppGuard>
                <AdminAttendancePage />
              </AppGuard>
            }
          />
          <Route
            path="/admin/attendance/:id"
            element={
              <AppGuard>
                <RecordAttendancePage />
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
