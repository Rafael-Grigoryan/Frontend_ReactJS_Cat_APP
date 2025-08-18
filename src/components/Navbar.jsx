import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const CatCategory = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/categories",
          {
            headers: {
              "x-api-key":
                "live_lwVCzgY3P4RRqe2JJnETvuJrSorLIyg6wrhpMfi4mQk81mm80mobsGXItWBDwwCg",
            },
          }
        );
        const data = await response.json();
        setCategory([...data, { id: "random", name: "random" }]);
      } catch (error) {
        console.log("Error", error);
      }
    };
    CatCategory();
  }, []);

  return (
    <div className="category-container">
      {category.map((elem) => (
        <div key={elem.id}>
          <NavLink
            className="category"
            to={`${elem.id}`}
            style={({ isActive }) => ({
              color: isActive ? "goldenrod" : "black",
            })}
          >
            {elem.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
