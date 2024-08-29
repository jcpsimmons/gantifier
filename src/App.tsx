import "./App.css";
import Mermaid from "./components/Mermaid";

function App() {
  return (
    <div className="App">
      <p>test</p>
      <Mermaid chart="graph TD; A-->B; A-->C; B-->D; C-->D;" />
    </div>
  );
}

export default App;
