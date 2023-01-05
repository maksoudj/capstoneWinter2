import "../styles/globals.css";
import TopBar from "../Components/TopBar";
import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DataProvider } from "../Context/FormContext";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
      <StyledEngineProvider injectFirst>
        <DataProvider>
        <TopBar />
        <Component {...pageProps} />
        </DataProvider>
      </StyledEngineProvider>
      </DndProvider>
    </div>
  );
}

export default MyApp;
