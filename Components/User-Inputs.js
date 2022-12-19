import textfield from "./TextField";

import { TextField } from "@mui/material";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import LinkButton from "./LinkButton";
import { Button } from "@mui/material";

function UserInput(props) {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }
  const rows = [
    {
      id: 1,
      col1: "john doe",
      col2: "Jaafarabdulatheam@gmail.com",
      col3: "teacher",
    },
    { id: 2, col1: "DataGridPro", col2: "aaaa", col3: "teacher" },
    { id: 3, col1: "MUI", col2: "aaaa", col3: "teacher" },
    {
      id: 1,
      col1: "john doe",
      col2: "Jaafarabdulatheam@gmail.com",
      col3: "teacher",
    },
    { id: 2, col1: "DataGridPro", col2: "aaaa", col3: "teacher" },
    { id: 3, col1: "MUI", col2: "aaaa", col3: "teacher" },
  ];

  const columns = [
    {
      field: "col1",
      headerName: "Full Name",
      flex: 1,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "col2",
      headerName: "Email",
      flex: 1,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "col3",
      headerName: "Role",
      flex: 1,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
  ];
  return (
    <div>
      <div
        style={{
          height: 300,
          width: 600,
          flexGrow: 1,
          marginLeft: "auto",
          marginRight: "auto",
          background: "white",
          borderRadius: "5%",
          marginTop: "2%",
        }}
      >
        <DataGrid
          rows={rows}
          density="compact"
          components={{
            Toolbar: CustomToolbar,
          }}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          sx={{
            borderRadius: "5%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            id="Full-Name"
            label="Full Name"
            variant="filled"
            margin="normal"
            size="small"
          />
          <TextField
            id="Email"
            label="Email"
            variant="filled"
            margin="normal"
            size="small"
          />
          <TextField
            id="Role"
            label="Role"
            variant="filled"
            margin="normal"
            size="small"
          />
        </div>
      </div>

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
                props.setPage(props.page - 1);
              }
            }}
            text="Prev"
          />
          <LinkButton
            disabled= {false}
            onClick={() => {
              {
                props.setPage(props.page + 1);
              }
            }}
            text="Next"
          />
        </Box>
      </footer>
    </div>
  );
}
export default UserInput;
