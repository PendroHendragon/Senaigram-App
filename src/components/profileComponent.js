import AppService from "../services/appService";
import {useState,useEffect} from "react";
import Image from "next/image";


export default function ProfileComponent({user}){

    const [data,setData] = useState([{photos:[
        {url:""}
    ]
        
    }]);

    const app = new AppService();

    
    useEffect(()=>{
        app.loadUser(user).then((data)=>{ setData(data)}).catch((error)=>console.log(error)); 

        
    },[]);
    console.log(data[0].photos)
    const dados = () =>{

    }

    return (
        <div>
            <div>
                {data[0].photos && data[0].photos.map((data,index)=>{
                    console.log(data.url)
                    return data.url && <Image src={data.url} width="100px" height="100px" key={index}/>

                })}
                
            </div>
        </div>
    );



}