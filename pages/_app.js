import "../styles/globals.css";
import TopBar from "../Components/TopBar";
import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DataProvider } from "../Context/FormContext";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <DataProvider>
      <DndProvider backend={HTML5Backend}>
        <StyledEngineProvider injectFirst>
          
              <TopBar />
              <Component {...pageProps} />
        </StyledEngineProvider>
      </DndProvider>
      </DataProvider>


    </div>
  );
}

export default MyApp;
