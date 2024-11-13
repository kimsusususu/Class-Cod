import { Container, Navbar, Nav , NavDropdown} from 'react-bootstrap';
import { Routes, Route,  useNavigate,useLocation } from "react-router-dom"
import { useState } from 'react';
import './App.css';
import Cart from "./routes/Cart";
import data from "./shoes";

import Detail from './routes/Detail';
import Home from './routes/Home';
import About from './routes/About';



function App() {
  const location = useLocation();
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  const addMoreShoes = () => {
    const newShoes = [
      {
        id: 3,
        title: "Four",
        content: "Hamster",
        price: 140000,
        src: require('./img/bg.jpg'), 
      },
      {
        id: 4,
        title: "Five",
        content: "Hamster",
        price: 140000,
        src: require('./img/bg.jpg'), 
      },
      {
        id: 5,
        title: "Six",
        content: "Hamster",
        price: 140000,
        src: require('./img/bg.jpg'), 
      },
      
    ];
    
    setShoes([...shoes, ...newShoes]); 
  };
  const [btnShow, setBtnShow] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            My shop
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="About" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={() => {
                  navigate("/about/member");
                }}
              >
                member
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/about/location");
                }}
              >
                location
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버정보</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>
      {location.pathname === "/" && btnShow ? (
        <button onClick={addMoreShoes}>더보기</button>
      ) : null}
      {loading == true ? <p>로딩중입니다.</p> : null}
    </div>
  );
}

export default App;
