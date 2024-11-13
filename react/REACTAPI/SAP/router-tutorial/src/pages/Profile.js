import { useParams } from "react-router-dom"; //객체를 파라미터로받을수있게 도와줌

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    gildong:{
        name:'김범수',
        description:'전래동화 흥부전의 주인공'
    }
};

const Profile = () => {
    const params = useParams();  //객체를 받아옴
    const profile = data[params.username]; //params데이터에 username가 있다면

return(
    <div>
        <h1> 사용자 프로필 </h1>
        { profile? (
            <div>
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
                </div>
        ) : ( <p>존재하지 않는 프로필 입니다.</p>)
        
    }

    </div>
);
};
export default Profile;