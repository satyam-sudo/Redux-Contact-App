import "./App.css";
import Menubar from "./Component/Menubar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ContactTable from "./Component/ContactTable";
import AddContact from "./Component/AddContact";
import Edit from "./Component/Edit";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Menubar/>
      <Switch>
        <Route exact path="/">
          <ContactTable />
        </Route>
        <Route path="/addcontact">
        <AddContact/>
        </Route>
        <Route path="/edit/:id">
          <Edit/>           
             </Route>
      </Switch>
    </div>
  );
}

export default App;
