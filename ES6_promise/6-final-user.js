import { signUpUser} from "4-user-Promise.js";
import { uploadPhoto } from "5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(firstName),
    ]).then ((result) => {
        if(result.status === 'fulfilled') {
            return{
                status: result.status,
                value: result.value
            };
        }
        return {
            status: result.status,
             value: result.reason,
        }
    })
}
