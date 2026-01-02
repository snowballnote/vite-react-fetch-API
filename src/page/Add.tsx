import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {

    const [board, setBoard] = useState({
        pw: "", 
        title: "", 
        content: ""
    });
       

    const navigate = useNavigate()

    function addBoard(): void{
        // Fetch API 사용 비동기로 데이터 전송
        fetch("http://localhost/add", {
            method: "POST", headers: {"Content-Type" : "application/json"},  
            // {id: "", title: "", content: ""}
            body: JSON.stringify(board), 
        }).then((res => {
            if(res.ok){
                alert("입력성공");
                // 링크 컴포넌트 없이 주소창 url을 "/List"변경하여 이동하는 API useNavigate
                navigate("/List");
            }else{
                alert("입력실패");
            }
        }));
    }

    return (
        <>
            <h1>Add Page</h1>
             <form>
                <table border={1}>
                    <tr>
                        <td>pw</td>
                        <td>
                            <input type="password" value={board.pw} 
                                    onChange={(e) => (setBoard({...board, pw:e.target.value}))}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>
                            <input type="text" value={board.title} 
                                    onChange={(e) => (setBoard({...board, title:e.target.value}))}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>
                            <input type="text" value={board.content} 
                                    onChange={(e) => (setBoard({...board, content:e.target.value}))}
                            />
                        </td>
                    </tr>
                </table>
                <input onClick={addBoard} type="button" value="글입력" /> 
            </form>
        </>
    )
}
