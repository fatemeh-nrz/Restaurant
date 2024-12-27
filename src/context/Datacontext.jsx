import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { createContext, useState } from "react";

export const DataContext = createContext({
data: '',
filterData : null,
fetchDataFood: function () {} ,
filterFood :()=>{},
loading:false,
error : null ,
selectedBtn :null ,
filterBtns:[],
setFilterData :null

});

const DataContextProvider = (props) => {
  const BASE_URL = "http://localhost:9000";
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  const fetchDataFood = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setData(json);
      setFilterData(json);
      setLoading(false);
    } catch (error) {
      setError("unable to fetch data");
    }
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
  ];
 
//  const contextValue = {selectedBtn,setSelectedBtn,fetchDataFood,data,setData,filterData,setFilterData,
//     loading,setLoading,error,setError,filterFood,filterBtns};
    const contextValue = {selectedBtn,fetchDataFood,data,filterData,
      loading,error,filterFood,filterBtns ,setFilterData };
  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
