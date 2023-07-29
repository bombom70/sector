import React from 'react'
import { sortBy } from '../store/post/postSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Sort = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSort = ({ target }) => {
    dispatch(sortBy(target.getAttribute('data-sort')));
    navigate("/?page=1");
  }

  return (
    <tr>
      <th className="th-bg-black col-1">
        <div onClick={handleSort} data-sort="id" className="text-center d-flex align-items-center flex-grow-1 justify-content-center gap-10">
          id
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC"/>
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white"/>
          </svg>
        </div>
      </th>
      <th className="th-bg-black col-5">
        <div onClick={handleSort} data-sort="title" className="text-center d-flex align-items-center flex-grow-1 justify-content-center gap-10">
          Заголовок
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC"/>
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white"/>
          </svg>
        </div>
      </th>
      <th className="th-bg-black col-4">
        <div onClick={handleSort} data-sort="body" className="text-center d-flex align-items-center flex-grow-1 justify-content-center gap-10">
          Описание
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC"/>
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white"/>
          </svg>
        </div>
      </th>
    </tr>
  )
}
