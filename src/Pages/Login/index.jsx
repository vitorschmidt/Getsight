import { Container } from "./style";
import { Button } from "../../Components/Button";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../../Components/Input";
import Logo from "../../Components/img/logo.png"
import { InputContainer } from "../../Components/Input/styles";
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

  const onSubmitFunction = ({ email, password }) => {
    const user = { email, password };
    console.log(user);

    history.push("/home");
  };

  return (
    <Container>
      <header>
        <picture>
          <img src={Logo} alt="Logo GetSight"/>
        </picture>
      </header>
      <main>
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

          <Button type="submit">Logar</Button>
          <div>
            <p>
              Não tem uma conta?{" "}
              <span onClick={() => handleNavegation("/register")}>
                fazer cadastro
              </span>
            </p>
          </div>
        </form>

        
        <Button onClick={()=> handleNavegation("/home")}>Home</Button>
      </main>
    </Container>
  );
};

export default Login;
