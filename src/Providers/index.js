import { CandidatesProvider } from "./Candidates";
import { ColaProvider } from "./Cola";
import { HomeProvider } from "./Home";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { NoticiaProvider} from "./Noticia";

const Providers = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <CandidatesProvider>
          <ColaProvider>
            <NoticiaProvider>
              <HomeProvider>{children}</HomeProvider>
            </NoticiaProvider>
          </ColaProvider>
        </CandidatesProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
