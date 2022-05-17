import { Link } from "react-router-dom";

import {ReactComponent as Logo} from "../img/logo.svg"
import { Button } from "../Button";
import {FaSearch} from "react-icons/fa"
import Inputs from "../Input";

import {
    Container, 
    HeaderTop, 
    Headers, 
    ColRight, 
    LogoContainer,
    ColLeft, 
    ElectionType,
    Row
} from  "./style.js"

import { useHistory } from "react-router-dom";
 
import { HeaderMediaQueries } from "./HeaderMediaQueries";

const Header = ({bg, height, headerVersion, user = "teste,"}) =>{
    const history = useHistory()

    return (
        <Container bg={bg} height={height} >
            <HeaderMediaQueries version={headerVersion}>
                {
                    /*  versão não logada*/
                    headerVersion === "home" ? (
                        <Headers version={headerVersion}>
                            <ColLeft >
                                <LogoContainer width="100%" maxWidth="200px">
                                    <Logo />
                                </LogoContainer>
                                
                            </ColLeft>
                            
                            <ColRight>
                                <Link to="/login">Login</Link>

                                <Button onClick={()=> history.push("/register")} 
                                backGround="#000000" textColor="#fff" 
                                >Cadastrar</Button>
                            </ColRight>
                            
                        </Headers>
                    
                    ):

                    headerVersion === "homeCandidates" ? (
                    <Headers version={headerVersion}>
                        <HeaderTop version={headerVersion}>
                            <LogoContainer width="100%" maxWidth="150px">
                                <Logo />
                            </LogoContainer>
                            <Button onClick={()=> history.push("/login")} 
                                backGround="#000000" textColor="#fff"
                                >LOGIN</Button>
                        </HeaderTop>

                        <Row>
                            <ColLeft  maxWidth="800px">
                                <Inputs InputContainerClass="inputContainer"
                                        inputClass="inputBox"
                                        icon={FaSearch}
                                        placeholder="Pesquisar Candidato"/>
                            </ColLeft>    

                            <ColRight  maxWidth="500px"  >
                                <ElectionType>
                                    <label>Tipo de Eleição</label>

                                    <select>
                                        <option>Municipal</option>
                                        <option>Estadual</option>
                                    </select>
                                </ElectionType>

                                
                            </ColRight>

                        </Row>
                        
                    
                    </Headers>
                    /* versão não logada vai até aqui */
                    ):

                    /* versão logada */
                    headerVersion === "dashboard" ? (
                    <Headers version={headerVersion}>
                        <ColLeft width="100%">
                            <LogoContainer width="100%" maxWidth="200px">
                                <Logo />
                            </LogoContainer>
                        </ColLeft>
                        
                        <ColRight maxWidth="350px" aTagFontSize="clamp(14px, 2vw, 18px)" pTagFontSize="clamp(16px, 3vw, 22px)">
                            {/* aqui será inserido o nome do usuário  */}
                            <p>{user}</p>
                            <Link to="/candidates">Candidatos</Link>
                            
                            <Button onClick={()=> history.push("/")} 
                                backGround="#000000" textColor="#fff" 
                                >Sair</Button>
                        </ColRight>
                    
                    
                    </Headers>
            
                    ):

                    headerVersion === "dashboardCandidates" ? (
                    <Headers version={headerVersion}>
                        <HeaderTop>
                            <Button onClick={()=> history.push("/")}  
                                    backGround="#000000" textColor="#fff">SAIR</Button>
                        </HeaderTop>

                        <ColLeft width="70%">
                            <Inputs InputContainerClass="inputContainer"
                                inputClass="inputBox"
                                icon={FaSearch}
                                placeholder="Pesquisar Candidato"/>
                        </ColLeft>

                        <ColRight>
                            <Button onClick={()=> history.push("/")}  
                                    backGround="#000000" textColor="#fff">SAIR</Button>
                        
                        </ColRight> 
                    
                    </Headers>
                    ):("")
                    /* versão logada vai até aqui */
                
                }
            </HeaderMediaQueries>
        </Container>
    )
}

export default Header;
