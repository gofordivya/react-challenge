import UserProfile from "./components/UserProfile";
import UserRepository from "./components/UserRepository";

function App() {
  return (
    <div className="container mt-4">
      <div className="col-md-12">
        <UserProfile></UserProfile>
      </div>
      <div className="col-md-12">
        <UserRepository></UserRepository>
      </div>
    </div>
  );
}

export default App;
