import { Container, InputContainer } from "./styles";

//INPUT ALINHADO COM E AJUSTADO PARA USO NO REACT-HOOK-FORM
const Inputs = ({
  handleShowPassword,
  label,
  icon: Icon,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <div className="label">
        {label}
        {!!error && <span> - {error}</span>}
      </div>
      <InputContainer>
        <input {...register(name)} {...rest} />
        {Icon && <Icon onClick={handleShowPassword} />}
      </InputContainer>
    </Container>
  );
};
export { Inputs };
