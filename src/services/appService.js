import axios from 'axios';
import CONFIG_VAR from '../../config/config';




class AppService{

    

    constructor(){

    }


    async loadUser(name){
        return await axios.get(CONFIG_VAR.BASE_URL+`users/${name}`).then((response)=>{
            if(response.data==[]){
                return [{photos:[{url:""}],email:""}];
            }else{
                if(response.data.statusCode==404){
                    console.log('error');
                    return [{photos:[{url:""}],email:""}];

                }else{
                    return(response.data);
                }
                
            }
            

            
        }).catch((error)=>{return [{photos:[{url:""}],user:{email:"NOT A USER"}}];});
    }
    async loadPhotos(){
        return await axios.get(CONFIG_VAR.BASE_URL+`photos`).then((response)=>{
            return(response.data);
        }).catch((error)=>{console.log(error)});
    }
    async loadPhotoById(id){
        return await axios.get(CONFIG_VAR.BASE_URL+"photos/"+id).then((response)=>{
            return response.data;

            
        }).catch((error)=>{console.log(error)});
    }
}


export default AppService;