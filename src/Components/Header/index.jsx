import React from 'react';
import Logo from '../../Assets/logo.png'
import Menu from './menu'
import { Link } from 'react-router-dom';
import * as S from './style'

export default function Header() {
    return (
        <>
            <header>
                <S.Container>
                    <S.Img src={Logo} alt="Logo" />
                    <Menu />
                    <S.Nav>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/work"><li>Work</li></Link>
                            <Link to="/about"><li>About</li></Link>
                            <Link to="/onu"><li>ONU</li></Link>
                        </ul>
                    </S.Nav>
                </S.Container>
            </header>
        </>
    );
}