//서버에 회원 정보 보내기
//클라이언트에서 서버로 요청보낼 때는 서버의 전체 URL을 사용해야 함.

const response = await fetch("http://localhost:5000/users",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify({ user_id: id, password}),
});