import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, deleteItem } from "../store/CartSlice";

function Cart() {
  const user = useSelector((state) => state.user); // user 상태 가져오기
  const cart = useSelector((state) => state.cart); // cart 상태 가져오기
  const dispatch = useDispatch();

  // 유저 정보가 없을 경우 예외 처리
  if (!user || !user.name) {
    return <div>유저 정보가 없습니다.</div>;
  }

  return (
    <div>
      <h5>{user.name}님의 장바구니</h5>
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <tr key={item.id}>
              <td>{item.id +1}</td> {/* 번호 표시 */}
              <td>{item.name}</td> {/* 상품 이름 표시 */}
              <td>{item.count}</td> {/* 수량 표시 */}
              <td>
                {/* 수량 증가 버튼 */}
                <button
                  onClick={() => {
                    dispatch(changeCount({ id: item.id, count: item.count + 1 }));
                  }}
                >
                  +
                </button>
                {/* 수량 감소 버튼 */}
                <button
                  onClick={() => {
                    if (item.count > 1) {
                      dispatch(changeCount({ id: item.id, count: item.count - 1 }));
                    }
                  }}
                  disabled={item.count <= 1} // 수량이 1일 때 비활성화
                >
                  -
                </button>
              </td>
              <td>
                {/* 삭제 버튼 */}
                <button
                  onClick={() => {
                    dispatch(deleteItem(item.id));
                  }}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
