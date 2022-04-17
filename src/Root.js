import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import {
    sideBarMenu
} from './Constans/sideBarMenu';
import {
    useSelector,
    useDispatch
} from 'react-redux';

import AuthIndex from './Pages/Auth';

export default function Root() {

    const states = useSelector(states => states.MainReducers)

    React.useEffect(() => {
        console.log(states)
    }, [])

    React.useEffect(() => {
        console.log(states)
    }, [states.isLogin])

    return (
        <HashRouter>
            {states.isLogin ?
                <div className={`h-screen flex overflow-x-hidden`}>
                     <img src={require('./assets/waves.png')} className={`w-full absolute bottom-0 z-0 opacity-10`} />
                    <div className={`w-1/5 bg-white shadow-default py-5 px-4`}>
                        <ul>
                            {sideBarMenu.map((v, i) =>
                                <li key={i}>
                                    <NavLink to={v.url} className={`py-3 px-4 rounded-md cursor-pointer text-cyan text-sm flex hover:bg-cyan-100`}>
                                        <i className={`bx ${v.icon} bx-xs mr-4`}></i>
                                        {v.label}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={`w-4/5 bg-cyan-800 py-5 px-4`}>
                       
                        {sideBarMenu.map((v, i) =>
                            <Route key={i} path={v.url} component={v.page} />
                        )}
                    </div>
                </div>
                :
                <Route exact path="/" component={AuthIndex} />
            }
        </HashRouter>
    )
}


