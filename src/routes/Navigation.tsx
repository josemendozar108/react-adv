import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';

import logo from '../logo.svg';

import { routes } from './routes';
import { Suspense } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages'; 


export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(({to, name}) => (
                  <li key={to}>
                  <NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                    {name}
                  </NavLink>
                </li>
                ))
              }
          
            </ul>
          </nav>

          {/* Routes reemplaza a Switch en la v6 */}
          <Routes>
            {
              routes.map(({ path, Component}) => (
                <Route key={path} path={path} element={<Component/>} />
              ))
            }
            {/* Cerrar correctamente la etiqueta Route */}
            <Route path="/*" element={<Navigate to={ routes[0].to } replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
   
  );
};
