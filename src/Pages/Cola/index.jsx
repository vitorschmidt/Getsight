import { useHistory } from "react-router-dom";
import Header from "../../Components/Header";
import ListCola from "../../Components/listCola";
const Cola = () => {
    const history = useHistory();
    const handleNavegation = (path) => history.push(path);
    return (
    <>
    
    <Header bg="#C2D8DA" height="130px" headerVersion="cola">
    </Header>
    <div>Cola</div>
    <button onClick={()=> handleNavegation("/home")}>Home</button>
    <ListCola/>
    </>
    );
  };
  
  export default Cola;
  