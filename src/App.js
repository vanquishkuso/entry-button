import "./App.css";
import { Button } from "./Button";
import {makeStyles} from "@mui/styles"

function App() {
  return (
    <div className="App" style={{width: "auto"}}>
    
      <Button text="Ändra tid" round outline/>
    </div>
  );
}

export default App;
