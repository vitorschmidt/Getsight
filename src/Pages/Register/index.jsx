import Input from "../../Components/input";
import { Container } from "./style";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "react-router-dom";

const Register = () => {

  const history = useHistory()

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatorio")
      .min(2)
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Apenas letras e espaços"
      ),
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    city: yup.string().required("Cidade obrigatoria"),
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

  const onSubmitFunction = ({ name, email, city, password }) => {
    
    const user = {name, email, city, password}
    console.log(user);

    history.push("/")
  };

  return (
    <Container>
      <picture>
        <img src="#" alt="Logo GetSight" />
      </picture>

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="name"
          label="Nome"
          placeholder="Digite seu nome"
          register={register}
          error={errors.name?.message}
        />

        <Input
          name="email"
          label="email"
          placeholder="Digite seu email"
          register={register}
          error={errors.email?.message}
        />

        <Input
          name="city"
          label="Cidade"
          placeholder="Digite sua cidade"
          register={register}
          error={errors.city?.message}
        />

        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          register={register}
          error={errors.password?.message}
        />

        <Input
          name="confirmPassword"
          type="password"
          label="Confirmar senha"
          placeholder="Digite seu email"
          register={register}
          error={errors.confirmPassword?.message}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};

export default Register;
