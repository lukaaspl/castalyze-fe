import { PrivateRouteWrapper } from "@/components/private-route-wrapper";
import { DashboardLayout } from "@/pages/dashboard-layout";
import { LoginPage } from "@/pages/login-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { Route, Routes } from "react-router";
import { CreateInsightPage } from "./pages/create-insight-page";
import { HomePage } from "./pages/home-page";
import { InsightPage } from "./pages/insight-page";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRouteWrapper />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/insight/new" element={<CreateInsightPage />} />
          <Route path="/insight/:id" element={<InsightPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
