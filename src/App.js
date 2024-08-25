import WelcomeBar from "./components/WelcomeBar";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import './styles/App.css'
import {useState} from "react";
//import ClassCounter from "./components/ClassCounter";

function App() {
    const [posts, setPosts] = useState([
        {
            id:1,
            header: 'dark-crater 89',
            body: 'You did good, slick'
        },
        {
            id:2,
            header: 'Reaper of Coal',
            body: 'Rights of Wetto'
        }
    ]);

  return (
    <div className="App">
        <WelcomeBar/>
        <Counter/>
        <form>
            <input type="text" placeholder='Название'/>
            <input type="text" placeholder='Описание'/>
            <button>Создать пост</button>
        </form>
        <PostList posts={posts} title={'Список постов'}/>
    </div>
  );
}

export default App;
