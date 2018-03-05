import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleWare = routerMiddleware(history);

export { history, middleWare as historyMiddleware };
