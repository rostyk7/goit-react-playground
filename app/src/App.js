import { useState } from 'react';
import Button from './Button';
import List from './List';
import UserProfile from './UserProfile';

function App() {
  const [item, setItem] = useState(0);
  return (
    <div className="App">
      <UserProfile
        name='Cool user'
        avatarUrl='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
      />
      <br />
      <UserProfile
        name='Not cool user'
      />
    </div>
  );
}

export default App;
