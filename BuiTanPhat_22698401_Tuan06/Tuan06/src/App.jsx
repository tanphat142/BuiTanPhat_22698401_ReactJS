import Header from "./components/Header";

import SideBar from "./components/Sidebar";

const App = () => {
  return (
    <div className="grid grid-cols-[2fr_8fr]">
      <div>
        <SideBar />
      </div>
      <div>
        <Header />
        {/* <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes> */}
      </div>
    </div>
  )
}

export default App;