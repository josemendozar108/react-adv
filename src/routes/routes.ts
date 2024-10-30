import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';


type JSXComponent = () => JSX.Element; 

interface Routes {
    to: string; 
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string; 
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "lazyLayout"*/ '../01-lazyload/layout/LazyLayout')); 


export const routes: Routes[]= [
    {
        to: '/lazyload/*',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]; 