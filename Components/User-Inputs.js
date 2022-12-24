import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import LinkButton from "./LinkButton";
import React from "react";

function UserInput({ page, setPage, users, setUsers }) {
  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setUsers((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [setUsers]
  );

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }

  const columns = React.useMemo(
    () => [
      {
        field: "fullName",
        headerName: "Full Name",
        flex: 1,
        editable: true,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        editable: true,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "role",
        headerName: "Role",
        flex: 1,
        editable: true,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "actions",
        type: "actions",
        editable: "false",
        width: 80,
        getActions: (params) => [
          // eslint-disable-next-line react/jsx-key
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
        ],
      },
    ],
    [deleteUser]
  );
  

  function handleSubmit(event) {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    event.target.fullName.value = null;

    const email = event.target.Email.value;
    event.target.Email.value = null;

    const role = event.target.Role.value;
    event.target.Role.value = null;
    
    const newId = Math.max(Math.max(...users.map((item) => item.id)) + 1, 1);
    setUsers([
      ...users,
      { id: newId, fullName: fullName, email: email, role: role },
    ]);
  }

  function handleEdit(params){
    const index = users.findIndex((user) => user.id === params.id)
    const field = params.field;
    const val = params.value
    const newValue = {...users[index],[field]:val}
    setUsers(users => {return[...users.slice(0, index), newValue, ...users.slice(index + 1)]})
    console.log(users)

  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
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
            id="dt"
            rows={users}
            onCellEditCommit = {(params) => {handleEdit(params)}}
            density="compact"
            components={{
              Toolbar: CustomToolbar,
            }}
            columns={columns}
           // experimentalFeatures={{ newEditingApi: true }}
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
              id="fullName"
              label="Full Name"
              variant="filled"
              margin="normal"
              size="small"
              required={true}
            />
            <TextField
              id="Email"
              label="Email"
              variant="filled"
              margin="normal"
              size="small"
              required={true}
            />
            <TextField
              id="Role"
              label="Role"
              variant="filled"
              margin="normal"
              size="small"
              required={true}
            />
            <button
              type="submit"
              value="Submit"
              className="mt-6 flex w-addUser items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add User
            </button>
          </div>
        </div>
      </form>

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
export default UserInput;
