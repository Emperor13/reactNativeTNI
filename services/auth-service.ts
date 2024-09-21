import AsyncStorage from '@react-native-async-storage/async-storage';
import { http } from './http-service';


export async function login(email:string, password:string) {
    const res = await http.post('https://api.codingthailand.com/api/login', {
        email:email,
        password:password
    });

    //save token to storage

    await AsyncStorage.setItem('@token', JSON.stringify(res.data));
    return res;
}

export async function logout() {
    await AsyncStorage.removeItem('@token');
}

export async function getPrfile() {
    const tokenString = await AsyncStorage.getItem('@token');
    // if no token
    if(!tokenString) {
        return null;
    }

    //if token exist
    const token = JSON.parse(tokenString);
    const res = await http.get('https://api.codingthailand.com/api/profile', {
        headers: {'Authorization':'Bearer ' + token.access_token}
    });

    return res;
}