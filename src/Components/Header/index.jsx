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
                            <Link to="/desafio-final-vnw/"><li>Home</li></Link>
                            <Link to="/desafio-final-vnw/work"><li>Work</li></Link>
                            <Link to="/desafio-final-vnw/about"><li>About</li></Link>
                            <Link to="/desafio-final-vnw/onu"><li>ONU</li></Link>
                        </ul>
                    </S.Nav>
                </S.Container>
            </header>
        </>
    );
}