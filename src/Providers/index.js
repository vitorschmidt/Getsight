import { CandidatesProvider } from "./Candidates";
import { ColaProvider } from "./Cola";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

const Providers = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <CandidatesProvider>
          <ColaProvider>{children}</ColaProvider>
        </CandidatesProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
