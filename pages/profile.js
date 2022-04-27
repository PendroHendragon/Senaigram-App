
import {useRouter} from 'next/router'
import ProfileComponent from '../src/components/profileComponent';
import {Main} from '../src/components/styles'



function Profile(){
    const router = useRouter()



    const id = router.query



 


    return (<Main>
        {id.user===undefined?<div>not user</div>:<ProfileComponent user={id.user} />}
        </Main>);
}






export default Profile;


// export function getServerSideProps(){

//     return{
//         props:{
//             user: id.user
//         },
//     }

// }