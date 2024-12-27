import React, { useEffect, useState } from "react";
import { useContext } from "react";
import DataContextProvider,  {DataContext}  from "../context/Datacontext";

 export const BASE_URL = "http://localhost:9000";


const MainContent = () => {
  const {fetchDataFood, error, loading ,data } = useContext(DataContext);
  useEffect(() => {
    fetchDataFood();
  }, []);
  
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading ...</div>;

  return (
    <React.Fragment>
      <div className="mainContant">
        <div className="foodCards">
          {data?.map(({name , image , text ,price}) => (
            <div className="foodCard" key={name}>
              <div className="food_image">
              <img src={BASE_URL+image}></img>
              </div>
              <div className="food_info">
                <div className="info">
                 <h3>{name}</h3> 
                  <p>{text}</p>
                </div>
                <button>${price.toFixed(4)}</button>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </React.Fragment>
  );
};
export default MainContent;
