import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSlidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props{
  children: React.ReactNode;
}

const Layout = ({ children}: Props) => {
  return (
    <SidebarProvider>
      <DashboardSlidebar />
      <main className="flex flex-col h-screen w-screen bg-muted">
        {children}
      </main>
    </SidebarProvider>
  );
}

export default Layout;