import { useEffect, useState } from "react"
import {getAllToDO} from '../API/ToDO.API'
import {ToDOCard} from './ToDOCard'

export function ToDOList(){
const [ToDO, setToDoList] = useState([])

    useEffect(() =>{
        async function loadToDO(){
            const res = await getAllToDO()
            setToDoList(res.data);
        }
        loadToDO();
    },[])
    return(
        <div className="grid grid-cols-3 gap-3">
            {ToDO.map(ToDO => (
                <ToDOCard key={ToDO.id} ToDO={ToDO}  />
            ))}
        </div>
    )
}