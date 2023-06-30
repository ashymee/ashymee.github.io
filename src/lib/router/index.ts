import EduPage from "@/components/pages/EduPage";
import ExpPage from "@/components/pages/ExpPage";
import HomePage from "@/components/pages/HomePage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/experiences",
    Component: ExpPage,
  },
  {
    path: "/education",
    Component: EduPage,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
]);

export default router;
