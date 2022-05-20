//Styled-component imports
import GlobalStyles from "./styles/global";
import { Toaster } from "react-hot-toast";

//Router-dom imports
import Routes from "./Routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />
    </>
  );
}

export default App;
