import "../styles/globals.css";
import TopBar from "../Components/TopBar";
import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
      <StyledEngineProvider injectFirst>
        <TopBar />
        <Component {...pageProps} />
      </StyledEngineProvider>
      </DndProvider>
    </div>
  );
}

export default MyApp;
