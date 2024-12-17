import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './signin';
import Signup from './signup';
import Landed from './landing';

function App() {
  const [users, setUsers] = useState([
    {
      username: "john",
      password: "123",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Pass props to components via the `element` */}
        <Route path="/" element={<Signin users={users} />} />
        <Route path='/landed' element={<Landed></Landed>}></Route>
        <Route
          path="/signup"
          element={<Signup users={users} setUsers={setUsers} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// Render the App component
export default App
