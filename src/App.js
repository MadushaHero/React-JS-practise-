import logo from './logo.svg';
import './App.css';
import './components/Post'
import Post from './components/Post';
import Teacher from './components/Teacher';

function App() {
  return (
    <div className="App">
      <Post />
      <Teacher name= 'Madusha' email= 'madu@123.com' phone='01026354'/>
    </div>
  );
}

export default App;
