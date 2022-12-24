import "../styles/globals.css";
import TopBar from "../Components/TopBar";
import { StyledEngineProvider } from "@mui/styled-engine-sc";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <TopBar />
        <Component {...pageProps} />
      </StyledEngineProvider>
    </div>
  );
}

export default MyApp;
