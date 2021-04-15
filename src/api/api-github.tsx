import { API_HOST } from '../utils/constants';
import { ISearchUser } from './../models/searchuser';

export async function searchUser(user: ISearchUser){
    const { username } = user;
    const url = `${API_HOST}/user/${username}`
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(url, params);
        return response.json();
    }
    catch (error) {
        return error;
    }
}