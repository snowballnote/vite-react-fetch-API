import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';

import List from './page/List';
import Add from './page/Add';
import Home from './page/Home';

export default function App() {
    /*
        컴포넌트
        1) 컴포넌트(재활용 가능한 사용자 정의 태그 - 컴포넌트가 모여 하나의 페이지 될 수 있다.)
            페이지의 일부 컴포넌트 역할, 파셜 페이지(include)
        2) 페이지(하나의 페이지 역할을 하는 컴포넌트) - 라우팅 대상
    */

    return (
        <>
            {/* 공통 헤드 부분(파셜뷰)*/}
            <h1>App Component</h1>
            <Header />
            <hr />
            
            <BrowserRouter>
                {/* URL Link */}
                <nav>
                    {/* 웹브라우저 주소창의 URL을 변경 */}
                    <Link to="/">Home</Link> | 
                    <Link to="/List">List</Link> | 
                </nav>

                {/* 라우팅 로직 - URL(path)과 컴포넌트를 맵핑 */}
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/List' element={<List />}></Route>
                    <Route path='/Add' element={<Add />}></Route>
                </Routes>
            </BrowserRouter>
            
            <hr />
            {/* 공통 푸터 부분(파셜뷰)*/}
            <Footer />
        </>
    );
}
