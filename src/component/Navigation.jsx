import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigationHook } from '../hooks/useNavigateHook';

const PER_PAGE = 10;

export const Navigation = () => {
  const { page, handlePrev, handleNext } = useNavigationHook();
  const getPages = useSelector(({posts}) => {
    if (!posts.searchPosts.length) {
      return Math.ceil(posts.posts.length / PER_PAGE);
    }
    return Math.ceil(posts.searchPosts.length / PER_PAGE)
  });
  const navCount = Array(getPages).fill().map((_e, i) => i + 1);

  return (
    <div className='d-flex align-items-center justify-content-between flex-wrap'>
      <button onClick={handlePrev} className='btn-nav mob-order-2'>Назад</button>
      <div className='nav-pages d-flex align-items-center gap-10'>
        {navCount.map(n => <div className={page === n ? 'nav-pages-current' : ''} key={n}>{n}</div>)}
      </div>
      <button onClick={handleNext} className='btn-nav mob-order-3'>Далее</button>
    </div>
  )
}
