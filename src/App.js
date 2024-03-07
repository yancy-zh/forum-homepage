import logo from "./logo.svg";
import "./App.css";
import PostTable from "./PostTable.js";
import Header from "./Header.js";
function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* list of posts */}
      <PostTable />
    </div>
  );
}

export default App;
