import { createContext } from 'react';

import { IGithubUser } from './../models/githubuser';
const User: IGithubUser = {
    avatar_url: "",
    created_at: "",
    id: 0,
    login: "",
    repos_url: "",
    url: "",
}
export const ApiContext = createContext(User);