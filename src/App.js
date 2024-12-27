import "./App.css";
import TopContainer from "./components/Topcontainer";
import MainContent from "./components/Maincontent";
import FilterContainer from "./components/Filtercontainer";
import  DataContextProvider from "./context/Datacontext";

function App() {
  return (
    <div className="mainContainer">
      <DataContextProvider>
      <TopContainer />
      <FilterContainer/>
      <MainContent />
      </DataContextProvider>
    </div>
  );
}

export default App;
