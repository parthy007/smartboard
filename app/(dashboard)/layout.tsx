import OrgSidebar from "./_components/OrgSidebar";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-full">
      <Sidebar />
      <div className="h-full pl-[60px]">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
