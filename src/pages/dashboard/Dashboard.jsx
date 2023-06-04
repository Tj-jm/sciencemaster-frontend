import { Outlet } from "react-router-dom";
import { Header, Sidebar,SmallSidebar } from "../../components";

const Dashboard = () => {
  return (
    <section>
      <main className="dashboard">
        <SmallSidebar/>
        <Sidebar />
        <div>
          <Header />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
