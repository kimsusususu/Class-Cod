import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostView from './page/post/PostView';
import PostMain from './page/post/PostMain';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/postView/:no" element={<PostView />} />
          <Route path="/" element={<PostMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
