import { TablePosts as Table } from './component/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';
import { Navigation } from './component/Navigation';
import { Search } from './component/Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './store/post/postSlice';
import { useEffect } from 'react';

function App() {
  const { fetchStatus } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (fetchStatus === 'pending') {
    return (<div>loading...</div>);
  }

  if (fetchStatus === 'rejected') {
    return (<div>Упс..что-то пошло не так</div>);
  }

  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}><Search /></Col>
      </Row>
      <Row>
        <Col>
          <Table/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Navigation/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
