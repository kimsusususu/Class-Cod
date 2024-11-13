import logo from './logo.svg';
import {useState} from 'react';

import './App.css';

function App() {
  const [liked, setLiked]=useState([0,0,0]);
  const [posts,setPosts]= useState([
    {title: "남자 코트 추천", date: "2022-07-21"},
    {title: "강남 우동 맛집", date: "2022-07-14"},
    {title: "서울 데이트 명소", date: "2022-07-10"},
  ]);
  const [modal, setModal] = useState(false);
  const [selected,setSelected] = useState(0);
  const [input,setInput] = useState("");



  return (
    <div className="App">
      <div className="black-nav">
        <div>My Blog</div>
        </div>

        {posts.map((post,index) => {
          return(
        <div key={index} className="list">
        <h4 
        onClick={()=>{
          setModal(true);
        }}
        >
          {post.title}
          <span onClick={(e)=>{
            e.stopPropagation();
            const newLiked = [...liked];
            newLiked[index] += 1;
            setLiked(newLiked);
          }}>❤️
          </span>

          <button
          onClick={(e)=> {
            e.stopPropagation();
            const newPosts = [...posts];
            const newLiked = [...liked];
            newPosts.splice(index,1);
            newLiked.splice(index,1);
            setPosts(newPosts);
            setLiked(newLiked);
          }}
          >
            삭제
          </button>


           {liked[index] + ""}
        </h4>
        <p>{post.date}</p>
        <hr/>
      </div>
            );
          })}
          <div>
            <input
            onChange={(e)=>{
              setInput(e.target.value);
            }}
            />
            &nbsp;
            <button onClick={addPost}>입력</button>
          </div>
      {modal == true ? <Modal selected={selected} posts={posts}/>: ""}
      </div>
  );
      

function Modal(props){
  const i = props.selected;
  return (
    <div className="modal">
      <h4>{props.posts[i].title}</h4>
      <p>{props.posts[i].date}</p>
      <p>상세내용</p>
    </div>
  );
}

function addPost() {
  if (input.trim() === "" || input === null) {
    alert("글자를 입력해주세요!");
    return false;
  }
  const today = new Date(+new Date() + 3240 * 10000)
    .toISOString()
    .split("T")[0];
  const newPosts = [...posts];
  newPosts.unshift({ 
    title: input,
    date: today,
  });
  setPosts(newPosts);
  const newLiked = [...liked];
  newLiked.unshift(0);
  setLiked(newLiked);
}
}
export default App;
