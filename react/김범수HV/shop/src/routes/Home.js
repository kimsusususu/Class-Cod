// 메인화면

import Shoe from "../Component/Shoe";

function Home(props) {
  return (
    <>
      <div className="main-bg">
        <h1 className="main-h1">hamster village</h1>
      </div>
      <Shoe shoes={props.shoes} />
    </>
  );
}

export default Home;