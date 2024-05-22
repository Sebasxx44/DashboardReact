import { GridColDef } from '@mui/x-data-grid';
import './add.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


type Props = {
    slug: string,
    columns : GridColDef[],
    setOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props : Props) => {

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
    }

  return (
    <div className='add'>
        <div className='modal'>
            <span className="close" onClick={() => props.setOpen(false)}>X</span>
            <h1>Add new {props.slug}</h1>

            <form onSubmit={handleSubmit}>
                {props.columns.filter(item => item.field !== 'id' && item.field !== 'img')
                .map((column,index) => (
                    <div className='item' key={column.field}>
                        <TextField  id={index.toString()} type={column.type} label={column.field} variant="outlined" />
                    </div>
                ))}

                <Button variant="contained">Register</Button>
            </form>
        </div>
    </div>
  )
}

export default Add