import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


// 1*
// const allCategories = items.map((item) => item.category);
// console.log(allCategories);
// 2*const allCategories = new Set(items.map((item) => item.category));
// 3*                              Set is used to get only new values
const allCategories = ['all',...new Set(items.map((item) => item.category))];
console.log(allCategories);


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories,setCategories] = useState(allCategories);


const filterItems = (category) => {
  if (category === 'all') {
    setMenuItems(items);
    return;
  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
  console.log(setMenuItems);
};


    return (<section className="menu section">
      <div className= 'title'>
        <h2>Our menu</h2>

      <Categories
        // 4*
        categories = {categories}
        filterItems={filterItems}/>

      <Menu
        // creating props
      items={menuItems}/>
      </div>
    </section>
  )
}

export default App;
