import { useState } from "react";
import axios from "../node_modules/axios/index";

const App= () => {
  const [data,setData] = useState(null);
  const onClick = async () => {
    try{
    const response=axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=b39e548ba90940cd996fded54a4ed158'
    );
      setData(response.data);
    }catch(e){
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data,null,2)}readOnly={true}/>}
    </div>
  );
}

export default App;