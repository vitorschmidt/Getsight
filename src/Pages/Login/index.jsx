//Styled-component imports
import { Container, Content, FormContainer } from "./style";

//Assets
import banner from "../../Assets/img//banner.jpg";
import logo from "../../Assets/img/logo.png";

//Libs Imports
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Inputs from "../../Components/Input";
import * as yup from "yup";

//Components imports
import { Button } from "../../Components/Button";

//Icons imports
import {FaEye} from "react-icons/fa"
import {FaEyeSlash} from "react-icons/fa"

//Provider imports
import { useLogin } from "../../Providers/Login";

//Router-dom imports
import { useHistory } from "react-router-dom";

//Reacts imports
import { useState } from "react";

const Login = () => {
  const history = useHistory();

  const handleNavegation = () => {
    history.push("/register")
  }
  const handleLogin =() =>{
    document.location.reload(true)
  }
  
 

  // const handleNavegation = (path) => history.push(path);
  const [showOrHidePass, setShowOrHidePass] = useState(false)
  const formSchema = yup.object().shape({

    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "E necessario  ter pelo menos 8 caracteres,1 letra maiuscula e uma minuscula,um caractere especial e um numero"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { getUser } = useLogin();

  const onSubmitFunction = ({ email, password }) => {
    const user = { email, password };

    getUser(user);

    history.push("/home");

  };

  const handleShowPassword = ()=>{
    if(showOrHidePass){
        setShowOrHidePass(false)
    }else{
        setShowOrHidePass(true)
    }

  }
  return (
    <>
      <Container>
        <div className="boxImg">
          <img src={banner} alt="banner" />
        </div>
        {/* Header apenas para vizualisação */}
        <Content>
          <img src={logo} alt="Logo GetSight" />
          <FormContainer>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <Inputs
                name="email"
                label="email"
                placeholder="Digite seu email"
                register={register}
                error={errors.email?.message}
              />

              <Inputs
                name="password"
                label="Senha"
                type={showOrHidePass? "text" : "password"}
                placeholder="Digite sua senha"
                register={register}
                error={errors.password?.message}
                handleShowPassword={handleShowPassword} 
                icon={showOrHidePass? FaEyeSlash : FaEye} 
              />

              <Button backGround="#47777b" textColor="#f3f3f3" type="submit">
                Login
              </Button>
              {/* <button type="submit">Logar</button> */}
            </form>
            <div className="boxCadastro">
              <p>
                Não tem uma conta?{" "}
                <span onClick={handleNavegation}>
                  fazer cadastro
                </span>
              </p>
            </div>
          </FormContainer>
        </Content>
      </Container>
    </>
  );
};

export default Login;
