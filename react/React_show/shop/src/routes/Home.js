import Shoe from "../components/Shoe";

function Home({ shoes }) {
  return (
    <>
      <div className="main-bg">
        <img src="/bg.jpg" alt="hamster image" className="main-image"/>
      </div>
      <Shoe shoes={shoes} />
    </>
  );
}

export default Home;