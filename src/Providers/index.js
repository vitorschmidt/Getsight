import { CandidatesProvider } from "./Candidates";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

const Providers = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <CandidatesProvider>{children}</CandidatesProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
