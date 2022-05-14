import { useHistory } from "react-router-dom";
import Header from "../../Components/Header";
const Home = () => {
  const history = useHistory();
  const handleNavegation = (path) => history.push(path)
  return (
  <>
   {/* coloquei a header aqui da versao não logada pra testar */}
   <Header bg="#C2D8DA" height="130px" headerVersion="dashboard"/>
  <Header bg="#C2D8DA" height="130px" headerVersion="home"/>
  <div>Home</div>
  <button onClick={()=> handleNavegation("/")}>Landing</button>
  <button onClick={()=> handleNavegation("/login")}>Login</button>
  <button onClick={()=> handleNavegation("/register")}>Register</button>
  <button onClick={()=> handleNavegation("/candidates")}>Candidates</button>
  </>
  );
};

export default Home;
