import React from 'react';


const Menu = ({items}) => {
  return <div className="section-center">{
        items.map((alllItems) => {
          // deconstruct of properties of our object (here is items)
          const {id, title, img, desc, price} = alllItems;

          return <article key={id} className="menu-item">
            <img src={img} alt={title} className='photo'/>

            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        })
      }</div>
    {/* <h2>menu component</h2>; */
  }
};

export default Menu;
