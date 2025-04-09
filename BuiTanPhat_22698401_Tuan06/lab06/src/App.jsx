import Header from "./components/Header";

import SideBar from "./components/Sidebar";
import DashBoard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="grid grid-cols-[2fr_8fr]">
      <div>
        <SideBar />
      </div>
      <div>
        <Header />
        <DashBoard />
      </div>
    </div>
  )
}

export default App;