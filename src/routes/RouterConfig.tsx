import { Routes, Route } from "react-router-dom";
import { Home } from "@/component/pages/home";
export const RouterConfig: React.FC = () => {
  return (
    <>
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </>
  );
};