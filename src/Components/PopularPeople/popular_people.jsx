import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "./fetchData";
import PeopleMapping from "./peopleMapping";
function PopularPeople() {
  const base_url = "https://media.themoviedb.org/t/p/w138_and_h175_face";
  const defaultImage =
    "https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc";

  const [people, setPeople] = useState();

  useEffect(() => {
    setPeople(fetchData);
  }, []);
  return (
    <div className="flex flex-wrap gap-6 px-28 py-12">
      <PeopleMapping people={people} />
    </div>
  );
}
export default PopularPeople;
