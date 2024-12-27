import React, { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../context/Datacontext";

const TopContainer = () => {
  const { filterData ,setFilterData, data } = useContext(DataContext);
  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === "") {
      setFilterData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };
  // const filterFood = (type) => {
  //   if (type === "all") {
  //     setFilterData(data);
  //     selectedBtn("all");
  //     return;
  //   }
  //   const filter = data?.filter((food) =>
  //     food.type.toLowerCase().includes(type.toLowerCase())
  //   );
  //   setFilterData(filter)
  //   selectedBtn(type)
  // };
  return (
    <React.Fragment>
      <div className="topContainer">
        <div className="logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/971/638/non_2x/food-logo-design-template-restaurant-free-png.png"
            alt="logo"
          />
        </div>
        <div className="search">
          <input type="text" onChange={searchFood} placeholder="search food" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default TopContainer;
