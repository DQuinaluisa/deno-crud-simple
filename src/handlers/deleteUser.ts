import { remove } from '../repository/user.ts'
import * as doesUserExists from '../libs/doesUserExists.ts';

export async function deleteUser ({params, response}: any) {
    const userExist = await doesUserExists.findById(params.id);

    if(userExist) {
       response.status = 200;
        response.body = await remove(params.id);
       
    }else {
        response.status = 404;
        response.body = {message: 'User not found'}
    }

};