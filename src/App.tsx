import { Route, Routes } from "react-router-dom";

import { Layout, PrivateRoute } from "./components";
import { Dashboard, HomePage, LoginPage, NotFoundPage } from "./pages";
import BulkUpload from "./pages/productManagement/cardCatalogue/bulkUpload";

import CreateNewCard from "./pages/productManagement/cardCatalogue/createCard/createNewCard";
import CardCatalogue from "./pages/productManagement/cardCatalogue/landingScreen/cardCateloge";
import ProgramManagement from "./pages/productManagement/programmeManagement/landingScreen";
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
        {/* <Route
          path="/productManagement/cardCatalogue"
          element={<BulkUpload />}
        /> */}

        <Route
          path="/productManagement/programmeManagement"
          element={<ProgramManagement />}
        />

        <Route
          path="/productManagement/programmeManagement"
          element={<CardCatalogue />}
        />

        {/* Catch all */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
