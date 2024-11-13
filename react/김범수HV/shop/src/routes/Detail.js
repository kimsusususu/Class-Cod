// 상세페이지가 보여줄 html

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem, changeCount } from "../store/CartSlice";
import { useNavigate } from "react-router-dom";


function Detail(props) {
  const { id } = useParams();
  const shoe = props.shoes.filter((shoe) => shoe.id === Number(id));
  const [event, setEvent] = useState(true);
  const [tab, setTab] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  //최근본 상품로직
  const ls = localStorage.getItem("saw");
  const lsArr = JSON.parse(ls) ? JSON.parse(ls).reverse() : [];// 초기값


  useEffect(() => {
    // 최근 본 상품 업데이트
    let arr = JSON.parse(localStorage.getItem("saw")) || [];
    if (!arr.includes(shoe[0].id)) {
      if (arr.length === 5) {
        arr.shift(); // 5개 초과 시 가장 오래된 상품 삭제
      }
      arr.push(shoe[0].id); // 최근 본 상품 추가
    } else {
      arr = arr.filter((el) => el !== shoe[0].id); // 중복 제거
      arr.push(shoe[0].id); // 다시 추가
    }
    localStorage.setItem("saw", JSON.stringify(arr));

    // 타이머 설정
    const to = setTimeout(() => {
      setEvent(false);
    }, 2000);
    return () => {
      clearTimeout(to);
    };
  }, [shoe]); // shoe 의존성 추가


  if (shoe.length === 0) {
    return (
      <div>
        <h3>해당 상품은 존재하지 않습니다.</h3>
      </div>
    );
  } else {
    return (
      <>
        {event === true ? (
          <div className="alert alert-warning">2초 이내 구매시 할인</div>
        ) : null}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={shoe[0].src}
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{shoe[0].title}</h4>
              <p>{shoe[0].content}</p>
              <p>{shoe[0].price}</p>
              <button className="btn btn-danger">주문하기</button>
              <button
	className="btn btn-danger"
    onClick={() => {
    	const index = cart.findIndex(
        	(pd) => pd.id === shoe[0].id
        );
        if (index < 0) {
        	dispatch(addItem(shoe[0]));
        } else {
        	dispatch(changeCount(shoe[0].id));
            }
        }}
>
장바구니
</button>
            </div>

            <Nav variant="tabs" defaultActiveKey="link1">
              <Nav.Item>
                <Nav.Link
                  eventKey="link1"
                  onClick={() => {
                    setTab(0);
                  }}
                >
                  1
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link2"
                  onClick={() => {
                    setTab(1);
                  }}
                >
                  2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link3"
                  onClick={() => {
                    setTab(2);
                  }}
                >
                  3
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab tab={tab} />
        </div>
        <div className="col-md-2">
          <Saw lsArr={lsArr} shoes={props.shoes} />
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
function Saw(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div>최근본상품</div>
      {props.lsArr.map((id, index) => {
        const item = props.shoes.find((it) => it.id === id);
        

        if (!item) return null;
        return (
          <div key={index}>
            <img
              src={require('../img/bg.jpg')}
              width="120px"
              title={item.title}
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Detail;