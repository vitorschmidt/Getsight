//Styled-component imports
import { Container } from "./styles";

//Components imports
import Header from "../../Components/Header";
import ListCandidates from "../../Components/ListCandidates";

const Candidates = ({ authenticated }) => {
  return (
        <>
        {authenticated 
            ? (
                <>
                    <Header bg="#C2D8DA" headerVersion="dashboardCandidates" />
                    <Container>
                    <ListCandidates />
                    </Container>
                
                
                </>  
        
            ):(

                <>
                    <Header bg="#C2D8DA" headerVersion="homeCandidates" />
                    <Container>
                    <ListCandidates />
                    </Container>
                    
            
                </>  
        )}
        </>
      
 
   
     
  );
};

export default Candidates;
