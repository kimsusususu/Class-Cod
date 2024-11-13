import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        // 컴포넌트가 여러개일땐 부모폴더로 감싸야됨 <>안에 태그는 없어도됨
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library;
//export default Library; 내보내다