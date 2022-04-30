import { useRouter } from "next/router";
import Link from "next/link";
import AppService from "../src/services/appService";
import { useState, useEffect } from 'react';
import Image from "next/image";
import userIcon from "../public/user-icon.png"


export default function Photo() {

  const [data, setData] = useState();


  const app2 = new AppService();
  const router = useRouter();
  const id = router.query;



  useEffect(() => {
    app2.loadPhotoById(id.photo).then((data) => {
      setData(data)
    }).catch((error) => console.log(error));
  });

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
  const user = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    padding: "10px 10px",
    borderRadius: "5px 5px 0px 0px"
  }

  const link = {
    display: "flex",
    alignItems: "center"
  }

  const p = {
    margin: "0px 10px"
  }
  const body = {
    backgroundColor: "whitesmoke",
    borderRadius: "0px 0px 5px 5px",
    margin: "0px 0px 20px 0px",
    padding: "10px 5px",
    textAlign:"left"
  }
  const zero = {
    margin:"0",
    padding:"0"
  }
  return (
    <div style={style}>

      {data && 
          <div>
            <div style={user}>
              <Link href={"/profile?user=" + data.user.email}>
                <a style={link}>
                  <Image src={userIcon} width="30px" height="30px" />
                  <p style={p}>{data.user.email}</p>
                </a>
              </Link>
            </div>
            <div style={{height:"auto"}}>
              <Image src={data.url} alt={data.text} width="550px" height="450px" />
            </div>
            
            <div style={body}>
              <p ><strong>{data.user.email+": "}</strong>{data.text}</p>
            </div>
          </div>

      }

    </div>
  );
}