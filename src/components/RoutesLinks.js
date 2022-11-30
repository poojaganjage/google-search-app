import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Results from './Results';

function RoutesLinks() {
  //const navigate = useNavigate();
  return (
    <div className='p-4'>
        <Routes>
            <Route exact path='/' element={<Navigate to='/search' />}></Route>
            <Route path='/search' element={<Results />}></Route>
            <Route path='/images'element={<Results />}></Route>
            <Route path='/news' element={<Results />}></Route>
            <Route path='/videos' element={<Results />}></Route>
        </Routes>
    </div>
  );
}
export default RoutesLinks;
