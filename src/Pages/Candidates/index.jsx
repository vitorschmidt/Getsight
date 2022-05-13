import { useHistory } from "react-router-dom";
import Header from "../../Components/Header";



const Candidates = () => {
  const history = useHistory();
  const handleNavegation = (path) => history.push(path)
  return (
  <>
  {/* coloquei a header aqui da versao não logada pra testar */}
  <Header bg="#C2D8DA" height="130px" headerVersion="homeCandidates">
    
  </Header>
  <div>Candidates</div>
  <button onClick={()=> handleNavegation("/home")}>Home</button>
  </>
  );
};

export default Candidates;
