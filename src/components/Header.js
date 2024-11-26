import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // 스크롤 이벤트 핸들링
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 모바일 메뉴 토글
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    // 사용자 키 삭제 (로그아웃)
    const removeKey = () => {
        localStorage.removeItem('userKey');
        alert('로그아웃 되었습니다.');
    };

    return (
        <div id="container">
            <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-left">
                    <div className="logo">
                        <Link to="/">
                            <i className="fas fa-ticket-alt" style={{ color: '#E50914' }}></i>
                        </Link>
                    </div>
                    <nav className="nav-links desktop-nav">
                        <ul>
                            <li><Link to="/">홈</Link></li>
                            <li><Link to="/popular">대세 콘텐츠</Link></li>
                            <li><Link to="/wishlist">내가 찜한 리스트</Link></li>
                            <li><Link to="/search">찾아보기</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    <button className="icon-button" onClick={removeKey}>
                        <i className="fas fa-user"></i>
                    </button>
                    <button className="icon-button mobile-menu-button" onClick={toggleMobileMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </header>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={toggleMobileMenu}>
                    <i className="fas fa-times"></i>
                </button>
                <nav>
                    <ul>
                        <li><Link to="/" onClick={toggleMobileMenu}>홈</Link></li>
                        <li><Link to="/popular" onClick={toggleMobileMenu}>대세 콘텐츠</Link></li>
                        <li><Link to="/wishlist" onClick={toggleMobileMenu}>내가 찜한 리스트</Link></li>
                        <li><Link to="/search" onClick={toggleMobileMenu}>찾아보기</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
