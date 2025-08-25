import { useState } from "react";
import "./Menu.css"

const menuData = [
  {
    id: 1,
    title: "Home",
    children: [{
        id: 3,
        title: "Laptops",
        children: [
          { id: 4, title: "MacBook Pro", children: [] },
          { id: 5, title: "Dell XPS", children: [] },
        ],
      },],
  },
  {
    id: 2,
    title: "Products",
    children: [
      {
        id: 3,
        title: "Laptops",
        children: [
          { id: 4, title: "MacBook Pro", children: [] },
          { id: 5, title: "Dell XPS", children: [] },
        ],
      },
      {
        id: 6,
        title: "Phones",
        children: [
          { id: 7, title: "iPhone", children: [] },
          { id: 8, title: "Samsung Galaxy", children: [] },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "About",
    children: [],
  },
];

export function Menu() {
  return (
    <>
      {menuData.map((element) => {
        return <MenuItem key={element.id} element={element} />;
      })}
    </>
  );
}

export function MenuItem({ element }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (element.children.length > 0) {
      setOpen(!open);
    }
  };

  return (
    <>
      <div key={element.id} onClick={handleClick} className="menu">{element.title}</div>
      {open && (
        <div className="menu-item">
          {element.children.map((child) => {
            return <MenuItem key={child.id} element={child} />;
          })}
        </div>
      )}
    </>
  );
}
