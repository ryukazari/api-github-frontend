import { API_HOST } from '../utils/constants';
import { ISearchUser } from '../models/searchuser';
import { IGithubUser } from './../models/githubuser';

let user: IGithubUser = {
    avatar_url: "",
    created_at: "",
    id: 0,
    login: "",
    repos_url: "",
    url: "",
};

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

export function setUser(userSended: IGithubUser){
    user = userSended;
}

export function getUser(){
    return user;
}