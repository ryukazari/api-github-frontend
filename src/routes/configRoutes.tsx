import Main from '../pages/Main';
import Error404 from '../pages/Error404';
import Repository from '../pages/Repository';
import Commit from '../pages/Commit';

const Routes =  [
    {
        path: '/commit/:id',
        exact: true,
        page: Commit
    },
    {
        path: '/repositories',
        exact: true,
        page: Repository
    },
    {
        path: '/',
        exact: true,
        page: Main
    },
    {
        path: '*',
        page: Error404
    }
]

export default Routes;