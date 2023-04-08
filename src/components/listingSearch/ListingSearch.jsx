import React from "react";
import OperationType from "../searchFilter/OperationType";
import Ranger from "../searchFilter/Ranger";
import PropTypeSelect from "../searchFilter/TypeSelect";
import ZoneSelect from "../searchFilter/ZoneSelect";
import "./ListingSearch.css";
import { BiSearch } from "react-icons/bi";
import SubZone from "../searchFilter/SubZone";
import { useState } from "react";
const ListingSearch = () => {
  const [zone, setZone] = useState("");
  console.log(Object.values(zone));
  const Zone = (zone) => {
    setZone(zone);
  };
  var selectedZone;
  Object.values(zone) == "Ariana"
    ? (selectedZone = [
        { location: "Tous" },
        { location: "Ariana" },
        { location: "nouvelle Ariana" },
        { location: "Ariana soughra" },
        { location: "Riadh andalous" },
        { location: "Ghazela" },
      ])
    : Object.values(zone) == "Soukra"
    ? (selectedZone = [
        { location: "Tous" },
        { location: "Soukra" },
        { location: "Borj Louzir" },
        { location: "Choutrana 1" },
        { location: "Chotrana 2" },
      ])
    : Object.values(zone) == "Menzah"
    ? (selectedZone = [
        { location: "Tous" },
        { location: "Menzah 1" },
        { location: "Menzah 4" },
        { location: "Menzah 5" },
        { location: "Menzah 6" },
        { location: "Menzah 7" },
        { location: "Menzah 9A" },
        { location: "Menzah 9B" },
        { location: "Menzah 9C" },
      ])
    : Object.values(zone) == "Ennacer"
    ? (selectedZone = [{ location: "Ennaser 1" }, { location: "Ennaser 2" }])
    : Object.values(zone) == "Jardin el menzah"
    ? (selectedZone = [
        { location: "Tous" },
        { location: "Jardin el menzah 1" },
        { location: "Jardin el Menzah 2" },
      ])
    : Object.values(zone) == "Manar"
    ? (selectedZone = [
        { location: "Tous" },
        { location: "Manar 1" },
        { location: "Manar 2" },
      ])
    : Object.values(zone) == "Tunis"
    ? (selectedZone = [
        { location: "Tous" },
        { location: "jardin de Carthage" },
        { location: "ain Zaghouan" },
        { location: "ain Zaghouan nord" },
        { location: "Marsa" },
        { location: "L'aouina" },
      ])
    : (selectedZone = [{ location: "Tous" }]);
  console.log(selectedZone);
  return (
    <div className="weszak">
      <form className="form" action="#">
        <input
          className="search-box"
          type="text"
          name="search"
          placeholder="Search your keyword..."
        />
        {/* <button className="search-btn" type="submit">
          <BiSearch />
        </button> */}
      </form>
      <ZoneSelect style={{ width: "240px" }} Zone={Zone} />
      <SubZone selectedZone={selectedZone} />
      <PropTypeSelect style={{ width: "240px" }} />
      <OperationType style={{ width: "350px" }} />
      <Ranger />
    </div>
  );
};

export default ListingSearch;
