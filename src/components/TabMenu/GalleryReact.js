import React, { useState } from 'react';
import "./tab.css";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import CatMenu from './CatMenu';

const allCatValues = [...new Set(Menu.map((curElem) => { return curElem.category })), "all"]
console.log(allCatValues)


function GalleryReact() {

    const [item, setItem] = useState(Menu);
    const [catItems, setCatItems] = useState(allCatValues)

    const filterItems = (categItem) => {

        if(categItem === "all") {
            setItem(Menu)
            return;
        }

        const updatedItems = Menu.filter((curElem) => {
            // ee condition statisfied cheyyunna elements aanu return cheyyuka, in filter method
            return categItem === curElem.category;
        })
        setItem(updatedItems)
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order You Favourite Dish</h1>
            <hr />

            {/* tabs items section */}
            <CatMenu filterItems={filterItems} catItems={catItems}/>

            {/* Main-items section */}
            <MenuItems items={item} />
        </>
    )
}

export default GalleryReact;
