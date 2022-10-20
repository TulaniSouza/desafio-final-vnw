import React, {useState} from 'react';
import data from '../../Data/data'
import * as S from './style'

export default function Card() {

    const [open, setOpen] = useState (false)

    const [content, setContent] = useState ([])

    const selectModal = (item) => {
        setContent ([item]);
    }

    const toggleModal = () => {
        setOpen(!open)
    }

    return (
        <>  
        {data.map((item, id) => (
            <>
            <S.Button key={id} open={open} onClick={() => {selectModal(item);toggleModal()}}>
                <img src={item.btn} alt={item.alt} title={item.name} />
            </S.Button> 
            </>
        ))}
        
        <S.Overlay open={open} onClick={() => {toggleModal(false)}}></S.Overlay>

        {content.map((item, id) => (
            <S.ModalBox open={open} aria-modal='true' aria-labelledby={item.title}>
                <>
                    <img src={item.img} alt={item.title} title={item.title}/>
                    <h2 key={id}>{item.title}</h2>
                    <p>{item.txt}</p>
                    <button onClick={() => {toggleModal()}}>Fechar</button>
                </>
            </S.ModalBox>
        ))}
        </>
    );
}