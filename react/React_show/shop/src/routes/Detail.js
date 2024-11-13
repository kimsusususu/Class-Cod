import { useEffect, useState,createContext,useContext  } from "react";
import { useParams } from "react-router-dom";
import shoes from "../shoes";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"; // Redux hooks import
import { addItem, changeCount } from "../store/CartSlice";
import { ShoesContext } from "../App";

function Detail() {
  const { id } = useParams();
  const {shoes} = useContext(ShoesContext);
  const shoe = shoes.find((shoe) => shoe.id === Number(id));
  
  const [event, setEvent] = useState(true);
  const [tab, setTab] = useState(0);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // cart.items 가져오기

  useEffect(() => {
    const to = setTimeout(() => {
      setEvent(false);
    }, 2000);
    return () => {
      clearTimeout(to);
    };
  }, []);

  if (!shoe) {
    return (
      <div>
        <h3>해당 상품은 존재하지 않습니다.</h3>
      </div>
    );
  } else {
    return (
      <>
        {event && (
          <div className="alert alert-warning">2초 이내 구매시 할인</div>
        )}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={"https://codingapple1.github.io/shop/shoes" + (Number(id)+1)+ ".jpg"}
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{shoe.title}</h4>
              <p>{shoe.content}</p>
              <p>{shoe.price}</p>
              <button className="btn btn-danger">주문하기</button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  const index = cartItems.findIndex((pd) => pd.id === shoe.id);
                  if (index < 0) {
                    dispatch(addItem({
                      id: shoe.id,
                      name: shoe.title, // 상품 이름 전달
                      price: shoe.price,
                      count: 1 // 초기 수량을 1로 설정
                    }));
                  } else {
                    const updatedCount = cartItems[index].count + 1;
                    dispatch(changeCount({ id: shoe.id, count: updatedCount }));
                  }
                }}
              >
                장바구니
              </button>
            </div>
            <Nav variant="tabs" defaultActiveKey="link1">
              <Nav.Item>
                <Nav.Link eventKey="link1" onClick={() => setTab(0)}>
                  1
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link2" onClick={() => setTab(1)}>
                  2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link3" onClick={() => setTab(2)}>
                  3
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab tab={tab} />
        </div>
      </>
    );
  }
}

function Tab({ tab }) {
  const [fade, setFade] = useState("");

  useEffect(() => {
    const to = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(to);
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
