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
let repositories: any[] = [];

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

export async function setRepositoriesApi(arr: any[]){
    repositories = arr;
}
export async function getRepositoriesApi(arr: any[]){
    return repositories;
}
export function getUser(){
    return user;
}

export async function getAllRepos(){
    const response = await fetch(user.repos_url);
    const body = await response.json();
    return body;
}

export async function getAllCommits(idProject: number){
    let repositorySelected = repositories.find(e=> e.id === idProject);
    const url = `${API_HOST}/commit`
    const body = {
        username: user.login,
        project: repositorySelected.name,
        branch: ""
    }
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    try {
        const response = await fetch(url, params);
        return response.json();
    }
    catch (error) {
        return error;
    }

}