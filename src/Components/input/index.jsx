import { Container } from "./style";


const Input = ({ label, error, register, name, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>

      <input {...register(name)}
        {...rest}/>
        
      
      {!!error && <p>{error}</p>}
    </Container>
  );
};

export default Input
