import { Container, Content, FormContainer } from "./style";

import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../../Components/Input";
import logo from "../../Components/img/logo.png";
import banner from "../../Components/img/banner.jpg";

import { Button } from "../../Components/Button";
import { useLogin } from "../../Providers/Login";
const Login = () => {
  const history = useHistory();
  const handleNavegation = (path) => history.push(path);

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

  const {getUser} = useLogin()

  

  const onSubmitFunction = ({ email, password }) => {
    const user = { email, password };
    
    getUser(user)

    history.push("/home");
  };

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
                type="password"
                placeholder="Digite sua senha"
                register={register}
                error={errors.password?.message}
              />

              <Button backGround="teal" textColor="white" backGroundHover="red" type="submit">
                Login
              </Button>
              {/* <button type="submit">Logar</button> */}
            </form>
            <div className="boxCadastro">
              <p>
                Não tem uma conta?{" "}
                <span onClick={() => handleNavegation("/register")}>
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
