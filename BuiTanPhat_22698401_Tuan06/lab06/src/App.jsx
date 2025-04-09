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
      </div>
    </div>
  )
}

export default App;