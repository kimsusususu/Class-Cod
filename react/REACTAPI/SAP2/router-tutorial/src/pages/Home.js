import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>홈</h1>
            <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
            <ul>
            <li><Link to="/about">소개</Link></li>
            <li><Link to="/profiles/void">존재x프로필</Link></li>
            <li><Link to="/profiles/velopert">김범수프로필</Link></li>
            <li><Link to="/profiles/gildong">홍길동프로필</Link></li>
            </ul>
        </div>
    );
};

export default Home;