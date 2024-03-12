import React from "react";
import Movies from "./movies";
import TvShows from "./tvShows";
import People from "./people";
import Icon from "./icon";
import RightSide from "./RightSide";
function Header() {
  return (
    <>
      <div className="flex justify-between px-40 items-center h-16  font-sans font-semibold bg-[#032541] text-white">
        <div className="flex items-center gap-8">
          <Icon />
          <ul className="flex gap-8 items-center">
            <li>
              <Movies></Movies>
            </li>
            <li>
              <TvShows></TvShows>
            </li>
            <li>
              <People></People>
            </li>
          </ul>
        </div>
        <RightSide />
      </div>
    </>
  );
}
export default Header;
