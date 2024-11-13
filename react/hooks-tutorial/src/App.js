import logo from './logo.svg';
import './App.css';
import Counter from "./Chapter01/Counter";
import Info from "./Chapter01/Info";
import {useState} from "react";
import Average from "./Chapter01/Average";



//             ---useEffect--- 
// const App = () => {
//   const [visible,setVisible] = useState(false);
//   return (
//     <div>
//       <button onClick={() => {setVisible(!visible);}}>
//         {visible ? '숨기기':'보이기'}
//       </button>
//       <hr/>
//       {visible && <Info/>}
//     </div>
//   )
// }


// export default App;

//              ---useReducer--- 02-88ppt

const App = () => {
  return <Average/>
}
export default App;

