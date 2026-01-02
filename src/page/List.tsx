import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// useState: 상태변수가 변경되면 컴포넌트를 리렌더링
// useEffect: 컴포넌트 상태나 지정된 변수가 변경되면 핸들러를 호출

export default function List() {

    // 상태변수 초기값은 boardList=[](빈배열)이고 setBoardList(변경될boardList) 호출될때마다 컴포넌트는 리렌더링
    const[boardList, setBoardList] = useState([]);

    // 컴포넌트 로드되고 나면
    useEffect(()=> {
        // 비동기로 /list 호출
        fetch("http://localhost/list", { // 옵션
            method: "GET"
        }).then((res) => {
            return res.json();
        }).then((result) => {
            console.log(result);
            setBoardList(result); // 상태변수 변경 -> 리렌더링
        });
    }, 
    []);

    return (
        <>
            <h1>List Page</h1>
            <Link to="/Add">글입력</Link>
            <table border={1}>
                <tr>
                    <th>no</th>
                    <th>pw</th>
                    <th>title</th>
                </tr>

                {boardList.map((b) => (
                        <tr>
                            <td>{b.no}</td>
                            <td>{b.pw}</td>
                            <td><Link to="상세보기 라우팅 PATH">{b.title}</Link></td>
                        </tr>
                    ))}
            </table>
        </>
    )
}
