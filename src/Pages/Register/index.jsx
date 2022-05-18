//Styled-component imports
import { Container, Content, FormContainer } from "./style";

//Assets
import banner from "../../Assets/img//banner.jpg";
import Logo from "../../Assets/img/logo.png";

//Components imports
import { Button } from "../../Components/Button";
import Inputs from "../../Components/Input";

//Icons imports
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

//Libs Imports
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Provider imports
import { useRegister } from "../../Providers/Register";

//Router-dom imports
import { useHistory } from "react-router-dom";

//Reacts imports
import { useState } from "react";

const Register = () => {
  const history = useHistory();

  const [showOrHidePass, setShowOrHidePass] = useState({
    password: false,
    confirmPassword: false,
  });

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
    history.push("/login");
    Location.reload();
  };

  const handleShowPassword = (type) => {
    if (type === "pass") {
      if (showOrHidePass.password) {
        setShowOrHidePass((passValor) => {
          return { ...passValor, password: false };
        });
      } else {
        setShowOrHidePass((passValor) => {
          return { ...passValor, password: true };
        });
      }
    }

    if (type === "confirmPass") {
      if (showOrHidePass.confirmPassword) {
        setShowOrHidePass((passValor) => {
          return { ...passValor, confirmPassword: false };
        });
      } else {
        setShowOrHidePass((passValor) => {
          return { ...passValor, confirmPassword: true };
        });
      }
    }
  };

  const handleNavegation = () => {
    history.push("/login");
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
              type={showOrHidePass.password ? "text" : "password"}
              placeholder="Digite sua senha"
              register={register}
              error={errors.password?.message}
              handleShowPassword={() => handleShowPassword("pass")}
              icon={showOrHidePass.password ? FaEyeSlash : FaEye}
            />

            <Inputs
              name="confirmPassword"
              type={showOrHidePass.confirmPassword ? "text" : "password"}
              label="Confirmar senha"
              placeholder="Digite seu email"
              register={register}
              error={errors.confirmPassword?.message}
              handleShowPassword={() => handleShowPassword("confirmPass")}
              icon={showOrHidePass.confirmPassword ? FaEyeSlash : FaEye}
            />

            <Button
              type="submit"
              backGround="teal"
              textColor="white"
              backGroundHover="red"
            >
              Cadastrar
            </Button>
            <div className="boxLogin">
              <p>
                Ja tem uma conta?{" "}
                <span onClick={() => handleNavegation("/login")}>
                  fazer Login
                </span>
              </p>
            </div>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
};
export default Register;
