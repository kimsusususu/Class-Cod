import "./App.css";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, createContext,useContext } from "react";
import axios from "axios";
import data from "./shoes";
import Cart from "./routes/Cart";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import About from "./routes/About";
import { Provider } from "react-redux"; // Provider 불러오기
import store from "./store/Storee"; // store 불러오기

export const ShoesContext = createContext();



function App() {
  const [btnShow, setBtnShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [재고] = useState([10, 11, 12]);
  const [shoes, setShoes] = useState(data); // 기존의 shoes 상태는 여기서 관리

  const navigate = useNavigate();

  function btnMore() {
    setLoading(true);
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        setShoes([...shoes, ...result.data]);
        setBtnShow(false);
        setLoading(false);
      })
      .catch(() => {
        console.log("실패함");
        setLoading(false);
      });
  }

  return (
    <Provider store={store}>
      <ShoesContext.Provider value={{ 재고, shoes }}>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand onClick={() => navigate("/")}>My shop</Navbar.Brand>
              <Nav className="me-auto">
                <NavDropdown title="About" id="navbarScrollingDropdown">
                  <NavDropdown.Item onClick={() => navigate("/about/member")}>
                    member
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/about/location")}>
                    location
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home shoes={shoes} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />}>
              <Route path="member" element={<div>멤버정보</div>} />
              <Route path="location" element={<div>위치정보</div>} />
            </Route>
            <Route path="*" element={<div>없는 페이지입니다.</div>} />
          </Routes>

          {btnShow ? <button onClick={btnMore}>더보기</button> : null}
          {loading ? <p>로딩중입니다.</p> : null}
        </div>
      </ShoesContext.Provider>
    </Provider>
  );
}

export default App;
