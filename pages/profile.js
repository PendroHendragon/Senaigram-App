
import {useRouter} from 'next/router'





function Profile(){
    const router = useRouter()



    const id = router.query



 


    return (<div>{id.user===undefined?<p>not user</p>:<h1>{id.user}</h1>}</div>);
}






export default Profile;


// export function getServerSideProps(){

//     return{
//         props:{
//             user: id.user
//         },
//     }

// }