//로그인 페이지
function Login() {
    const [id,setId] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({ user_id: id, password}),
        });
        
        const result = await response.json();
        if (response.ok) {
            //로그인 성공 시
            console.log("로그인 성공");
        }else {
            //로그인 실패 시
            console.log("로그인 실패");
        }
    };
}