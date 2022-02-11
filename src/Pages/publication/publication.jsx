import React from "react";
import { DATA } from "../../Components/DATA/data";
import { ReactComponent as Steam } from "../../Assets/Steam_icon_logo.svg";
import { ReactComponent as Windows } from "../../Assets/windows-svgrepo-com.svg";
import { ReactComponent as Apple } from "../../Assets/apple-logo-svgrepo-com.svg";
import { ReactComponent as Search } from "../../Assets/search-svgrepo-com.svg";
import { useState } from "react";

import "./publication.styles.scss";

export default function Publication() {
  const [search, setSearch] = useState("");

  const searchField = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-wrap">
      <input
        type="text"
        placeholder="Search by title"
        className="searchfield"
        onChange={searchField}
      ></input>
      <Search className="lupa" />
      <div className="wrapper">
        {DATA.filter((query) => {
          if (search === "") {
            return query;
          } else if (query.name.toLowerCase().includes(search.toLowerCase())) {
            return query;
          }
        }).map((query, index) => (
          <div key={query.id} className="card">
            <h1>{query.name}</h1>
            <img src={query.img} alt="poster" className="poster"></img>
            <div className="price">Price: {query.price}</div>
            <div className="date">Release Date: {query.release}</div>
            <div className="all-genres">
              {query.genre.map((genre, index) => {
                return (
                  <div className="genre" key={index}>
                    {genre}
                  </div>
                );
              })}
            </div>
            <div className="svg-icons">
              {query.apple === "yes" ? <Apple className="svg" /> : ""}
              {query.steam === "yes" ? <Steam className="svg" /> : ""}
              {query.windows === "yes" ? <Windows className="svg" /> : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
