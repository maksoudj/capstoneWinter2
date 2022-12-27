import ListOfStandards from "./ListOfStandards";
import DnD from "./DnD";
import SubjectCircle from "./SubjectCircle";
import Box from "@mui/material/Box";
import LinkButton from "./LinkButton";



export default function Matching({page, setPage}) {
  return (
    <div>
      <ListOfStandards />
      <DnD/>
      <footer style={{ display: "block" }}>
        <Box
          sx={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "fixed",
            bottom: "0",
            width: "100%",
          }}
        >
          <LinkButton
            disabled={false}
            onClick={() => {
              {
                setPage(page - 1);
              }
            }}
            text="Prev"
          />
          <LinkButton
            disabled={false}
            onClick={() => {
              {
                setPage(page + 1);
              }
            }}
            text="Next"
          />
        </Box>
      </footer>
    </div>
  );
}
