import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/Datacontext";
const FilterContainer = () => {
  const { filterFood, filterBtns ,selectedBtn } = useContext(DataContext);
  return (
    <React.Fragment>
      <div className="filterContainer">
        {filterBtns.map((value) => (
          <button 
          // isSelected={selectedBtn ===value.type}
          key={value.name}
          onClick={() => filterFood(value.type)}>{value.name}
          </button>
        ))}
        {/* <button onClick={()=>filterFood("breakfast")}>Breakfast</button>
        <button onClick={()=>filterFood("lunch")}>Lunch</button>
        <button onClick={()=>filterFood("dinner")}>Dinner</button> */}
      </div>
    </React.Fragment>
  );
};
export default FilterContainer;
