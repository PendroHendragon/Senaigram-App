import AppService from "../services/appService";
import {useState,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import userIcon from "../../public/user-icon.png";




export default function ProfileComponent({user}){

    const [data,setData] = useState([{photos:[
        {url:""}
    ],email:"NOT A USER"
        
    }]);

    const app = new AppService();

    
    useEffect(()=>{
        app.loadUser(user).then((data)=>{setData(data)}).catch((error)=>console.log(error)); 

        
    },[]);
    const dados = () =>{

    }
    const style = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        backgroundColor:"white",
        padding:"10px",
        borderRadius:"0px 0px 5px 5px"
    }
    const imageStyle = {
        borderRadius: "50%"
    }
    return (
        <div>
            <div style={{padding:"10px 10px",borderRadius:"5px 5px 0px 0px", backgroundColor:"white",textAlign:"left",display:"flex",alignItems:"center",borderBottom:"2px solid black",justifyContent:"space-between"}}><Image src={userIcon} width="90px" height="90px" /><h2 style={{margin:"0px 5px"}}>{data.email!=undefined?<span>{data.email}</span>:<span></span>}</h2><Link href="/"><a>Voltar</a></Link></div>
            <div style={style}>
                
                {data.photos && data.photos.map((data,index)=>{
                    console.log(data.url)
                    return data.url && <div style={{margin:"0px 0px 10px 0px"}}><Link href={"/photo?photo="+data.id}><a><Image src={data.url} width="150px" height="150px" key={index} /></a></Link></div>

                })}
                {}
                
            </div>
        </div>
    );



}