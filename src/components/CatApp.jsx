import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CatAppStyle.css";

export function CatApp() {
  const { id } = useParams();
  const [catsData, setCatsData] = useState([]);
  const [selectedCat, setSelectedCat] = useState(false);
  const [page, setPage] = useState(1);

  const categoryLimit = 5;
  const randomLimit = 5;

  const fetchCatData = async () => {
    try {
      let url;
      if (id === "random") {
        url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=${page}&limit=${randomLimit}`;
      } else {
        url = `https://api.thecatapi.com/v1/images/search?limit=${categoryLimit}&order=ASC&page=1&category_ids=${id}`;
      }

      const response = await fetch(url, {
        headers: {
          "x-api-key":
            "live_lwVCzgY3P4RRqe2JJnETvuJrSorLIyg6wrhpMfi4mQk81mm80mobsGXItWBDwwCg",
        },
      });
      
      const data = await response.json();
      setCatsData(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, [id, page]);

  return (
    <div className="image-container">
      {catsData.map((cat) => {
        return (
          <div key={cat.id}>
            <img
              className="cat-image"
              src={cat.url}
              alt="cat"
              onClick={() => setSelectedCat(cat)}
            />
          </div>
        );
      })}

      {id === "random" && (
        <div className="pagination">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <span> Page {page} </span>
          <button onClick={() => setPage((p) => p + 1)}>Next</button>
        </div>
      )}

      {selectedCat && (
        <div
          onClick={() => setSelectedCat(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={selectedCat.url}
            alt="foto cat"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
}
