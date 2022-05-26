import { css } from '@emotion/css';
import './App.css';
import Link from './Link';
import { Row } from './Row';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <div className='element'>Global style</div>
      <Row direction='vertical'>
        <div className={css`
          color: red;
          margin-left: 20px;
        `}>Test</div>
        <div style={{
          color: 'red',
          marginLeft: '20px'
        }}>Test 2</div>
        <Title text='Cool Text!' />
      </Row>
      <Link url='https://create.kahoot.it/my-library/kahoots/f29fe0a1-f8d8-4b70-85bc-d2ade89e015c'>
        <h1>Hello</h1>
      </Link>
      <input type='text' />
    </div>
  );
}

export default App;
