import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

const Container = styled.div`
  display: grid;
  grid-template-rows: 156px calc(100vh - 156px);
  justify-items: center;
`;

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
