import { Container, InputContainer } from "./styles";

//INPUT ALINHADO COM E AJUSTADO PARA USO NO REACT-HOOK-FORM
const Inputs = ({
  handleShowPassword,
  label,
  icon: Icon,
  register,
  name,
  error,
  inputClass,
  InputContainerClass,
  ...rest
}) => {
  return (
    <Container className={InputContainerClass}>
      <div className="label">
        {label}
        {!!error && " -"}
        {!!error && <span> {error}</span>}
      </div>
      <InputContainer className={inputClass}>
        {register ? (
          <input {...register(name)} {...rest} />
        ) : (
          <input {...rest} />
        )}
        {Icon && <Icon onClick={handleShowPassword} />}
      </InputContainer>
    </Container>
  );
};
export default Inputs;
