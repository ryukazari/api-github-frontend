import Main from '../pages/Main';
import Error404 from '../pages/Error404';

const Routes =  [
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