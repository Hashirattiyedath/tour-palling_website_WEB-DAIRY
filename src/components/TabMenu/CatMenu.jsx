import React from 'react';
// import Menu from "./Menu";

function CatMenu({filterItems, catItems}) {
    return (
        <>
        <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">

                    {
                        catItems.map((curElem, index)=> {
                             return <button className="btn btn-warning" key={index} onClick={() => { filterItems(curElem) }}>{curElem}</button>

                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

export default CatMenu
