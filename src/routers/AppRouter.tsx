import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';
export const AppRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/dashboard/*" element={<DashboardRoutes/>}/>
           {/* <Route path="/health">
                <h3>The App is Healthy</h3>
            </Route> */}
          <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

  