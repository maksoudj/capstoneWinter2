import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DataGrid,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import LinkButton from "./LinkButton";
import React from "react";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
/**************************************************************************************
Component: UserInput
Function: This component is responsible for rendering the UI for adding and editing user data. 
It uses Material-UI components such as TextField, DataGrid, and GridActionsCellItem to create a form for inputting user data and displaying the data in a grid format. 
It also provides functionality for deleting and editing the data.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Parameters - 
page: The current page number 
setPage: A function that sets the current page number,
Output:
Return – Returns the UI for the UserInput component.
**************************************************************************************/

function UserInput({ page, setPage}) {
  const {users, setUsers} = useContext(DataContext)
  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setUsers((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [setUsers]
  );

  

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

  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="rounded-2xl"
          style={{
            height: 300,
            width: 600,
            flexGrow: 1,
            marginLeft: "auto",
            marginRight: "auto",
            background: "white",
            marginTop: "2%",
          }}
        >
          <DataGrid className="rounded-2xl justify-center "
            id="dt"
            rows={users}
            onCellEditCommit = {(params) => {handleEdit(params)}}
            density="compact"
            
            columns={columns}
           // experimentalFeatures={{ newEditingApi: true }}
            sx={{
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField className="bg-white rounded-t-md"
              id="fullName"
              label="Full Name"
              variant="filled"
              margin="normal"
              size="small"
              required={true}
            />
            <TextField className="bg-white rounded-t-md"
              id="Email"
              label="Email"
              variant="filled"
              margin="normal"
              size="small"
              required={true}
            />
            <TextField className="bg-white rounded-t-md"
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
              className="mt-6 flex w-addUser items-center justify-center rounded-md border border-transparent bg-codeVa-blue py-3 px-8 text-base font-medium text-white hover:bg-codeVa-lightBlue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
