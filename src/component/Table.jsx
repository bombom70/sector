import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import { Sort } from './Sort';

export const TablePosts = () => {
  const { search } = useLocation();
  const { page = 1 } = qs.parse(search) ?? 1;
  const posts = useSelector(({posts}) => {
    if (!posts.searchPosts.length) {
      return posts.posts.slice((page - 1) * 10, page * 10)
    }
    return posts.searchPosts.slice((page - 1) * 10, page * 10)
  });
 
  return (
    <Table striped bordered hover>
      <thead>
        <Sort/>
      </thead>
      <tbody>
      {posts && posts.map(({ body, id, title, userId }) => (
        <tr key={id}>
          <td className="text-center">{id}</td>
          <td>{title}</td>
          <td>{body}</td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
}
