import { useNavigate, useLocation } from 'react-router-dom';
import qs from 'query-string';

export const useNavigationHook = () => {
  const { search } = useLocation();
  const { page = 1 } = qs.parse(search) ?? 1;
  const currentPage = Number(page);
  const navigate = useNavigate();
  const { pathname } = useLocation();
 
  const handlePrev = () => {
    if (Number(page) <=1 ) {
      return ;
    }
    const newUrl = qs.stringifyUrl({
      url: pathname,
      query: {
        page: currentPage - 1
      }
    }, {
      skipEmptyString: true,
      skipNull: true,
    });
    navigate(newUrl);
  }

  const handleNext = () => {
    if (Number(page) >= 10) {
      return ;
    }
    const newUrl = qs.stringifyUrl({
      url: pathname,
      query: {
        page: currentPage + 1
      }
    }, {
      skipEmptyString: true,
      skipNull: true,
    });
    navigate(newUrl);
  }

  return {
    page: Number(page),
    handlePrev,
    handleNext
  }

}
