import { useHistory } from "react-router-dom";
const Landing = () => {
  const history = useHistory();
  const handleNavegation = (path) => history.push(path)
  return (
  <>
  <div>Landing</div>
  <button onClick={()=> handleNavegation("/home")}>Home</button>
  <button onClick={()=> handleNavegation("/login")}>Login</button>
  <button onClick={()=> handleNavegation("/register")}>Register</button>
  <button onClick={()=> handleNavegation("/candidates")}>Candidates</button>
  </>
  );
};

export default Landing;