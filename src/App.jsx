import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Controls} from "./components/Controls";

function App() {
  return (
      <><Header/><Main>
        <Controls></Controls>
      </Main></>
  );
}

export default App;
