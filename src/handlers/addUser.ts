import { Status } from "https://deno.land/std@0.82.0/http/http_status.ts";
import { insert } from '../repository/user.ts'

export async function addUser ({response, request}: any) {
    const body = await request.body();
    const user = await body.value;
    
    if (user.hasOwnProperty('name') && user.hasOwnProperty('country')){
       
        response.status = 200;
        response.body =  await insert(user);
        
    } else {
        response.body = {message: 'Invalid request'};
        response.status = 400;
    }

    
   
};