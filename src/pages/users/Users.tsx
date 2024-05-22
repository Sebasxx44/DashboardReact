import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../Components/dataTable/DataTable'
import './users.scss'
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../Components/add/Add';
import Button from '@mui/material/Button';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];


const Users = () => {

  const [open,setOpen] = useState(false)

  return (
    <div className='users'>

      <div className="info">
        <h1>Users</h1>
        <Button variant="contained" onClick={() => setOpen(true)}>Add New Users</Button>
      </div>

      <DataTable slug='users' columns={columns} rows={userRows}/>

      {open && <Add slug='user' columns={columns} setOpen={setOpen}/>}

    </div>
  )
}

export default Users