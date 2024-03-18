import Sidebar from "./sidebar";
import Tools from "./tools"

export default function WmsLayout({ children }) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      {children}
      <Tools />
    </div>
  );
}