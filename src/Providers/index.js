import { CandidatesProvider } from "./Candidates";
import { ColaProvider } from "./Cola";
import { HomeProvider } from "./Home";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

const Providers = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <CandidatesProvider>
          <ColaProvider>
            <HomeProvider>{children}</HomeProvider>
          </ColaProvider>
        </CandidatesProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
