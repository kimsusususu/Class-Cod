import { useState,useCallback }from "react";
import NewsList from "./componets/NewsList";
import Categories from "./componets/Categories";

const App = () => {
    const [category,setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category),[]);

    return(
    <>
    <Categories category={category} onSelect={onSelect}/>
    <NewsList category={category}/>
    </>
    )
}

export default App;