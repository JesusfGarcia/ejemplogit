import "./App.css";
import { router } from "./routes";

function App() {
  return (
    <div className="container">
      {router.map((item) => {
        return <item.component />;
      })}
    </div>
  );
}

export default App;
