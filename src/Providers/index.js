import { CandidatesProvider } from "./Candidates";

const Providers = ({ children }) => {
  return <CandidatesProvider>{children}</CandidatesProvider>;
};

export default Providers;
