import Layout from "./components/layout/Layout";
import Sidebar from "./components/layout/Sidebar";
import TopBar from "./components/layout/TopBar";
import StatusBar from "./components/layout/StatusBar";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Layout
      sidebar={<Sidebar />}
      header={<TopBar />}
      footer={<StatusBar />}
    >
      <Dashboard />
    </Layout>
  );
}

export default App;