
import './App.css';
import { Address } from "./component/Profile/Adress"
import { ProfilePhoto } from "./component/Profile/ProfilePhoto"
import { FullName } from "./component/Profile/FullName"


function App() {
  return (
    <div className="App">
      <FullName/>
      <Address/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
