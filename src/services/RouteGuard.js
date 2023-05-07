import { Navigate, Outlet } from 'react-router-dom';

const GuardedRoute = (props)  =>  props.isRouteAccessible ? <Outlet /> : <Navigate to={props.redirectRoute} />;

export default GuardedRoute;