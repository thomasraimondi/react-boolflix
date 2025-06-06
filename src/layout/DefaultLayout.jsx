import { Outlet } from "react-router-dom";
import Headers from "../components/layout/Headers";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <Outlet />
    </div>
  );
}
