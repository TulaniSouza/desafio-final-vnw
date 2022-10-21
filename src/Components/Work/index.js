import React from "react";
import projetos from '../../Data/projetos'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from"./style";

export default function Work(){

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <S.PrevArrow />,
    nextArrow: <S.NextArrow />,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    };

    return(
        <>
        <main>
            <S.Container>
                 <S.Carrossel>
                    <h2>Meus Projetos</h2>
                    <Slider {...settings}>
                        {projetos.map((item, index) => (
                            <S.CarroselBox key={index}>
                                <img src={item.img} alt={item.alt} />
                            </S.CarroselBox>
                        ))}
                    </Slider>
                 </S.Carrossel>
                 <S.LinkBox >
                    {projetos.map((item, index) => (
                        <a key={index} href={item.link} target='_blank' rel='noreferrer'>
                            <button>{item.alt}</button>
                        </a>
                    ))}
                </S.LinkBox>
            </S.Container>
        </main>
        </>
    );
}