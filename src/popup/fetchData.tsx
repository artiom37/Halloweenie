import React, { useEffect, useState } from "react";
import { Language, createApi } from "unsplash-js";

type Photo = {
  id: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
};

const ACCESS_KEY = "hpFf84M0LCQOlDQuh-KWk7SjOwFrth8mleCN27Giwk8";

// const unsplashAPI = createApi({
//   accessKey: "hpFf84M0LCQOlDQuh-KWk7SjOwFrth8mleCN27Giwk8",
// });

const FetchImages = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // unsplashAPI.search
    //   .getPhotos({
    //     query: "Halloween pumpkins",
    //     orientation: "portrait",
    //     orderBy: "relevant",
    //     lang: Language.English,
    //   })
    //   .then((result) => {
    //     result.type === "success"
    //       ? setImagesResponse(result.response)
    //       : result.errors[0];
    //   })
    //   .catch((err) => console.log(err));
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&per_page=25&orientation=portrait&query=Halloween carved pumpkins`
    )
      .then((response) => response.json())
      .then((res) => setItems(res.results))
      .catch((err) => setError(err));
  }, []);
  return (
    <div>
      <ul>
        {items.map((item: Photo) => {
          return (
            <div key={item.id}>
              <li>
                <img src={item.urls.regular} alt={item.alt_description} />
              </li>
              <hr />
            </div>
          );
        })}
      </ul>
      <div>{error && <p>There have been some errors: ${error}</p>}</div>
    </div>
  );
};

export default FetchImages;
