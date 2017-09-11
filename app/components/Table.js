import React from 'react';
import cupcake3 from '../assets/img/cupcake3.jpg';
import { menuBookAnimation } from '../utils/utils';

const BackPage = ({ index }) => {
    return (
        <div className={index}>
            <div className="back-page-wrapper">
                <div className="back-page-item">
                    <a href=""><img src={cupcake3} alt="" /></a>
                    <h3>Something</h3>
                </div>
                <div className="back-page-item">
                    <a href=""><img src={cupcake3} alt="" /></a>
                    <h3>Something</h3>
                </div>
                <div className="back-page-item">
                    <a href=""><img src={cupcake3} alt="" /></a>
                    <h3>Something</h3>
                </div>
                <div className="back-page-item">
                    <a href=""><img src={cupcake3} alt="" /></a>
                    <h3>Something</h3>
                </div>
                <div className="back-page-item">
                    <a href=""><img src={cupcake3} alt="" /></a>
                    <h3>Something</h3>
                </div>
                <div className="back-page-item">
                    <a href=""><img src={cupcake3} alt="" /></a>
                    <h3>Something</h3>
                </div>
            </div>
                <button
                    onClick={menuBookAnimation}
                    className="menu-book-page-button">Дальше</button>
        </div>
    )
}

const FrontPage = () => {
    return (
        <div className="menu-book-page first-page">
            <h2 className="menu-book-page-title">
                Deserunt accus earum asperiores
            </h2>
            <p className="menu-book-page-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates nostrum inventore molestias. Lorem ipsum dolor sit amet consectetur.
            </p>
            <button
                onClick={menuBookAnimation}
                className="menu-book-page-button">
                Read
            </button>
        </div>
    )
}

const MenuBook = () => {
    const data = [
        {
            "classes" : "menu-book-page back-page second-page"
        },
        {
            "classes" : "menu-book-page back-page third-page"
        },
        {
            "classes" : "menu-book-page back-page foutrh-page"
        }
    ]
    return (
        <div className="menu-book">
            <FrontPage />
            {data.map((item, index)=>{
                return(
                    <BackPage index={item.classes} />
                )
            })}
        </div>
    )
}

const Table = () => {
    return (
        <div className="menu">
            <div className="menu-wrapper">
                <MenuBook />

                <div className="menu-info">
                </div>
            </div>
        </div>
    )
}

export default Table;