import 'bootstrap/dist/css/bootstrap.min.css';
import URL from './Components/URL';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container className='mx-auto'>
      	<h1 className='my-4'>QR Generator</h1>
        <URL />
    </Container>
  );
}

export default App;
