import axios from 'axios';
import CONFIG_VAR from '../../config/config';




class AppService{

    

    constructor(){

    }


    async loadUser(name){
        return await axios.get(CONFIG_VAR.BASE_URL+`users/${name}`).then((response)=>{
            if(response.data==[]){
                return [{photos:[{url:""}]}];
            }else{
                return(response.data);
            }
            

            
        }).catch((error)=>{console.log(error)});
    }
    async loadPhotos(){
        return await axios.get(CONFIG_VAR.BASE_URL+`photos`).then((response)=>{
            return(response.data);
        }).catch((error)=>{console.log(error)});
    }
}


export default AppService;