const Home = () => {
  const history = useHistory();
  const handleNavegation = (path) => history.push(path)
  return (
  <>
  <div>Home</div>
  <button onClick={()=> handleNavegation("/")}>Landing</button>
  <button onClick={()=> handleNavegation("/login")}>Login</button>
  <button onClick={()=> handleNavegation("/register")}>Register</button>
  <button onClick={()=> handleNavegation("/candidates")}>Candidates</button>
  </>
  );
};

export default Home;
