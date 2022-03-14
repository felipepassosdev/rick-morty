import React from "react";
import { useQuery } from "react-query";
import ErrorComponent from "../Error/ErrorComponent";
import Loading from "../Loading/Loading";

const CardList = () => {
  const getCharacters = async () => {
    const info = await fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .catch((e) => "error");
    return info;
  };

  const query = useQuery("getCharacters", getCharacters);

  const { isLoading, data, isError } = query;

  return (
    <>
      {isError && <ErrorComponent />}
      {isLoading && <Loading />}

      <div className="grid-container">
        {data?.results &&
          !isLoading &&
          data.results.map((item) => (
            <div className="card" key={`${item.name}-´${item.id}`}>
              <img className="card-img" src={item?.image} alt={item?.name} />
              <span>{item?.name}</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default CardList;
