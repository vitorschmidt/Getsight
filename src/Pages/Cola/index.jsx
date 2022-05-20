//Styled-component imports
import { Container } from "./styles";

//Components imports
import Header from "../../Components/Header";
import ListCola from "../../Components/listCola";
import { toast, Toaster } from "react-hot-toast";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Cola = ({ authenticated }) => {
  const history = useHistory();

  if (!authenticated) {
    toast.error("Logar para ver a cola!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    history.push("/home");
  }

  return (
    <Container>
      <Toaster />
      <Header bg="#C2D8DA" height="130px" headerVersion="cola"></Header>
      <ListCola />
    </Container>
  );
};

export default Cola;
