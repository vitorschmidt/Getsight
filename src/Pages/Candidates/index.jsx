import { useHistory } from "react-router-dom";
const Candidates = () => {
  const history = useHistory();
  const handleNavegation = (path) => history.push(path)
  return (
  <>
  <div>Candidates</div>
  <button onClick={()=> handleNavegation("/")}>Home</button>
  </>
  );
};

export default Candidates;
