import { Link } from "react-router-dom";

import {ReactComponent as Logo} from "../img/logo.svg"
import { Button } from "../Button";
import {Container, LogoContainer, Headers, ColRight, Input, InputContainer, Description} from  "./style.js"
import { useHistory } from "react-router-dom";

const Header = ({
    bg, 
    height,
    headerVersion,
    user = "Paulo,"
}) =>{

    const history = useHistory()

    return (
        <Container bg={bg} height={height} >
            {
                /*  versão não logada*/
                headerVersion === "home" ?
                    <Headers>
                        <LogoContainer width="100%" height="80px" maxWidth="300px">
                            <Logo/>

                        </LogoContainer>
                        
                        <ColRight width="300px">
                            <Link to="/login">Login</Link>
                            <Button onClick={()=> history.push("/register")} width="100%" maxWidth="200px" height="50px" 
                            backGround="#000000" textColor="#fff" borderRadius="20px">Cadastrar</Button>
                        </ColRight>
                        
                         
                    </Headers>
                
                :

                headerVersion === "homeCandidates" ?
                <Headers position="relative">
                     <LogoContainer width="100%" height="30px" maxWidth="143px" position="absolute">
                            <Logo/>
                           
                    </LogoContainer>

                    <InputContainer paddingLeft="40px" width="70%">
                        <Input placeholder="Pesquisar Candidato, categoria, partido, numero, cargo"/>
                        <Button backGround="#22333B" textColor="#FFFFFF" width="100%" 
                        maxWidth="160px" height="45px" borderRadius="0 8px 8px 0">PESQUISAR</Button>
                    </InputContainer>    

                    <ColRight paddingRight="20px" width="50%"  >
                        <Description>
                            <p className="positionTop">Tipo de eleição</p>
                            <p>Municipal</p>
                        </Description>
                        <Button onClick={()=> history.push("/login")} width="100%" maxWidth="200px" height="50px" 
                            backGround="#000000" textColor="#fff" borderRadius="20px">LOGIN</Button>
                    </ColRight>
                
                </Headers>
                /* versão não logada vai até aqui */
                :

                /* versão logada */
                headerVersion === "dashboard" ?
                <Headers>
                    <LogoContainer width="100%" height="80px" maxWidth="300px">
                        <Logo/>

                    </LogoContainer>
                    
                    <ColRight width="350px" fontSize="22px">
                        {/* aqui será inserido o nome do usuário  */}
                        <p>{user}</p>
                        <Link to="/candidates">Candidatos</Link>
                        <Button onClick={()=> history.push("/")} width="100%" maxWidth="200px" height="50px" 
                        backGround="#000000" textColor="#fff" borderRadius="20px">Sair</Button>
                    </ColRight>
                
                 
                </Headers>
        
                :

                headerVersion === "dashboardCandidates" ?
                <Headers>
                 
                    <InputContainer width="70%">
                        <Input placeholder="Pesquisar Candidato, categoria, partido, numero, cargo"/>
                        <Button backGround="#22333B" textColor="#FFFFFF" width="100%" 
                        maxWidth="160px" height="45px" borderRadius="0 8px 8px 0">PESQUISAR</Button>
                    </InputContainer> 
                
                    <ColRight width="20%"  >
                   
                        <Button onClick={()=> history.push("/")} width="100%" maxWidth="100px" height="50px" 
                            backGround="#000000" textColor="#fff" borderRadius="20px">SAIR</Button>
                    </ColRight>
                 </Headers>
                :

                /* versão vai até aqui */
                ""
        
            }
            
        </Container>
    )
}

export default Header;
