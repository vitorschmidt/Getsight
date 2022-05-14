import { Container, Content, FormContainer } from "./style";
import { useHistory } from "react-router-dom";
import Logo from "../../Assets/img/logo.png";
import { Button } from "../../Components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../../Components/Input";
import { useRegister } from "../../Providers/Register";
import banner from "../../Assets/img//banner.jpg";
const Register = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatorio")
      .min(2, "No minimo duas caracteres")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Apenas letras e espaços"
      ),
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    cidade: yup.string().required("Cidade obrigatoria"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "E necessario  ter pelo menos 8 caracteres,1 letra maiuscula e uma minuscula,um caractere especial e um numero"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatoria")
      .oneOf([yup.ref("password"), null], "As senhas devem ser identicas"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { postUser } = useRegister();
  const onSubmitFunction = ({ name, email, cidade, password }) => {
    const user = { name, cidade, email, password };
    postUser(user);
    history.push("/home");
  };
  return (
    <Container>
      <div className="boxImg">
        <img src={banner} alt="banner" />
      </div>
      <Content>
        <picture>
          <img src={Logo} alt="Logo GetSight" />
        </picture>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Inputs
              name="name"
              label="Nome"
              placeholder="Digite seu nome"
              register={register}
              error={errors.name?.message}
            />
            <Inputs
              name="email"
              label="Email"
              placeholder="Digite seu email"
              register={register}
              error={errors.email?.message}
            />
            <Inputs
              name="cidade"
              label="Cidade"
              placeholder="Digite sua cidade"
              register={register}
              error={errors.cidade?.message}
            />
            <Inputs
              name="password"
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              register={register}
              error={errors.password?.message}
            />
            <Inputs
              name="confirmPassword"
              type="password"
              label="Confirmar senha"
              placeholder="Digite seu email"
              register={register}
              error={errors.confirmPassword?.message}
            />
            <Button backGround="#47777b" textColor="#f3f3f3" type="submit">
              Cadastrar
            </Button>
          </form>
        </FormContainer>
        {/* <Button onClick={()=> handleNavegation("/home")}>Home</Button> */}
      </Content>
    </Container>
  );
};
export default Register;
