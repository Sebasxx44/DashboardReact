import DataTable from '../../Components/dataTable/DataTable'
import { GridColDef } from '@mui/x-data-grid'
import { orders } from '../../data'
import './order.scss'



const Order = () => {

    const columns: GridColDef[] = [
        { 
          field: 'img', 
          headerName: 'Profile', 
          width: 80,
          renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
          },
        },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'product', headerName: 'Product', width: 200 },
        { field: 'country', headerName: 'Country', width: 150 },
        { field: 'amount', headerName: 'Amount', width: 120 },
        { 
          field: 'status', 
          headerName: 'Delivered', 
          width: 120,
          type : 'boolean'
        },
        { field: 'createdAt', headerName: 'Created At', width: 150 },
    ];

    return (

    <div className='products'>

        <div className="info">
        <h1>Orders</h1>
        </div>

        <DataTable slug='no' columns={columns} rows={orders}/>

  </div>

  )
}

export default Order