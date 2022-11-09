import { Route, Routes } from "react-router-dom";

import { Layout, PrivateRoute } from "./components";
import { Dashboard, HomePage, LoginPage, NotFoundPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Catch all */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
