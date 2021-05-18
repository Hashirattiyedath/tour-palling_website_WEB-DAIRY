import React from 'react';

const MenuItems = ({items}) => {
    
    return (
        <>
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                            {
                                items.map((elemn) => {
                                    const { id, image, name, price, description } = elemn;
                                    return (
                                        <>
                                            <div className="item1 col-12 col-md-6 col-lg-4 p-5" key={id}>
                                                <div className="row Item-inside">
                                                    {/* for images */}
                                                    <div className="col-12 col-sm-4 img-div">
                                                        <img src={image} alt="menu image" className="img-fluid" />
                                                    </div>

                                                    {/* menu item details */}
                                                    <div className="col-12 col-sm-8">
                                                        <div className="main-title pt-4 pb-3">
                                                            <h1>{name}</h1>
                                                            <p>{description}</p>
                                                        </div>
                                                        <div className="menu-price-book">
                                                            <div className="price-book-divide d-flex justify-content-between align-items-center">
                                                                <h2>{price}</h2>
                                                                <a href="#">
                                                                    <button className="btn btn-primary">Order Now</button>
                                                                </a>
                                                            </div>
                                                            <p className="text-danger h5">*Price may very on selected date</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuItems
