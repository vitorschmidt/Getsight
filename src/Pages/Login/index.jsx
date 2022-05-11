import { Container } from "./style";
import Inputs from "../../Components/Input";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

    history.push("/");
  };

  return (
    <Container>
      <header>
        <picture>
          <img src="#" alt="Logo GetSight" />
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

          <button type="submit">Logar</button>
        </form>

        <div>
          <p>
            Não tem uma conta?{" "}
            <span onClick={() => handleNavegation("/register")}>
              fazer cadastro
            </span>
          </p>
        </div>
      </main>
    </Container>
  );
};

export default Login;
