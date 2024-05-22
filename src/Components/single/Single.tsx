import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import './single.scss'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button';

type Props = {
    id: number;
    img? : string;
    title: string;
    info: object;
    chart?: {
        dataKeys : {name:string; color:string}[];
        data :object[]
    }
    activities? : {time:string, text:string}[];

}

const Single = (props : Props) => {
  return (
    <div className='single'>
        <div className="view">

            <div className='info'>

                <div className="topInfo">
                    {props.img &&
                        <img src={props.img} alt="" />
                    }
                    <h1>{props.title}</h1>
                    <Button variant="contained">Update </Button>
                </div>

                <div className="details">
                    {Object.entries(props.info).map((item) => (
                        <div className='item' key={item[0]}>
                            <span className='itemTitle'>{item[0]}</span>
                            <span className='itemvalue'>{item[1]}</span>
                        </div> 
                    ))}
                </div>
            </div>

            <hr />

            {props.chart && 
                <div className='chart'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={props.chart.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {props.chart.dataKeys.map((item) => (
                                <Line type="monotone" dataKey={item.name} stroke={item.color} />
                                
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            }

        </div>
        <div className="activities">
            <h2>Latest Activities</h2>
            {props.activities &&
                <ul>
                    {props.activities.map((item) => (
                        <li>
                            <div>
                                <p>{item.text}</p>
                                <time>{item.time}</time>
                            </div>
                        </li>
                        
                    ))}
                </ul>
            }
        </div>
    </div>
  )
}

export default Single