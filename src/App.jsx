import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Notices from "./pages/Notices";
import Syllabus from "./pages/Syllabus";
import TimeTable from "./pages/TimeTable";
import PreviousPapers from "./pages/PreviousPapers";
import Faculty from "./pages/Faculty";
import Downloads from "./pages/Downloads";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/Admin/login";
// import SelectProgram from "./pages/Admin/selectProgram";
import AdminLayout from "./components/admin/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import Dashboard from "./pages/Admin/Dashboard";
import Documents from "./pages/Admin/Documents";
import AddDocument from "./pages/Admin/AddDocument";
import EditDocument from "./pages/Admin/EditDocument";
import Achievements from "./pages/Achievements";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/previous-papers" element={<PreviousPapers />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="documents" element={<Documents />} />
        <Route path="add-document" element={<AddDocument />} />
        <Route path="edit/:id" element={<EditDocument />} />
      </Route>
    </Routes>
  );
}
