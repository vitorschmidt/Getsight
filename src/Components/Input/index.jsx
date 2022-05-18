//Styled-component imports
import { useCandidate } from "../../Providers/Candidates";
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
  const { setSearch, filter } = useCandidate();

  const handleDual = (evt) => {
    setSearch(evt.target.value);
    filter();
  };

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
          <input {...rest} onChange={(evt) => handleDual(evt)} />
        )}
        {Icon && <Icon onClick={handleShowPassword} />}
      </InputContainer>
    </Container>
  );
};
export default Inputs;
