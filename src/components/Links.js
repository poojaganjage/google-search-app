import React from 'react';
import {NavLink} from 'react-router-dom';

const links = [
    {url: '/search', text: '🔎 All'},
    {url: '/news', text: '📰 News'},
    {url: '/images', text: '📷 Images'},
    {url: '/videos', text: '📺 Videos'}
];

function Links() {
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
        {links.map(({url, text}, index) => {
            return (
                // <NavLink key={index} to={url} style={{color: 'blue', borderBottom: '2px', paddingBottom: '2px'}}>
                //     {text}
                // </NavLink>
                <NavLink key={index} to={url} activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2'>
                    {text}
                </NavLink>
            );
        })}
    </div>
  );
}
export default Links;
