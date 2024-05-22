import { GridColDef } from '@mui/x-data-grid'
import Add from '../../Components/add/Add'
import DataTable from '../../Components/dataTable/DataTable'
import './products.scss'
import { useState } from 'react'
import { products } from '../../data'
import Button from '@mui/material/Button';

const Products = () => {
  const [open,setOpen] = useState(false)

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 70,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 200,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 80,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 100,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 100,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 100,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];


  return (

    <div className='products'>

      <div className="info">
        <h1>Products</h1>
        <Button variant="contained" onClick={() => setOpen(true)}>Add New Products</Button>
      </div>

      <DataTable slug='products' columns={columns} rows={products}/>

      {open && <Add slug='product' columns={columns} setOpen={setOpen}/>}

    </div>
  )
}

export default Products