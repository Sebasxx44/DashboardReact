import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './dataTable.scss'
import { Link } from 'react-router-dom';


type Props = {
    columns : GridColDef[],
    rows : object[],
    slug : string
}

const handleDelete = (id:number) => {

    console.log(`YOU REALLY DELETE ?, HERE HIS ID ${id}`)
}

const DataTable = (props: Props) => {

    const actionColumn:GridColDef = {

        field : 'action',
        headerName : 'Action',
        width : 200,
        renderCell : (params) => {
            return (
                <div className='action'>
                    <Link to={`/${props.slug}/${params.row.id}`}>
                    <img src="/view.svg" alt="" />
                    </Link>

                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="" />
                    </div>
                </div>

            )
        }

    }

  return (
    <div className='dataTable'>
        <DataGrid
            className='dataGrid'
            rows={props.rows}
            columns={props.slug != 'no' ? [...props.columns,actionColumn] : props.columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 10,
                },
            },
            }}
            slots={{
                toolbar: GridToolbar
            }}
            slotProps={{
                toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: {
                        debounceMs: 500,
                    }
                }
            }}
            pageSizeOptions={[5,10,20]}
            disableRowSelectionOnClick
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector
        />
    </div>
  )
}

export default DataTable