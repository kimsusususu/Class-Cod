import React from "react" ;
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"김범수"} comment={"안녕하세요. 만나서 반갑습니다"}/>
            <Comment name={"김범수"} comment={"제 점심은 올이고기입니다"}/>
        </div>
    );
}

export default CommentList;