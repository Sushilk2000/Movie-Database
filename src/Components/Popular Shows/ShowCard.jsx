function ShowCard({ item }) {
  return (
    <div key={item.id} className="rounded-lg">
      <Link to={`/tv/${item.id}`}>
        <div className="w-[190px] h-[370px]  gap-5 cursor-pointer shadow-md relative">
          <div className="w-full">
            <img
              src={
                item.poster_path
                  ? `${base_url}${item.poster_path}`
                  : defaultImage
              }
              className="h-[280px] w-full object-contain rounded-md"
              alt=""
            />
          </div>
          <div className="pt-2 px-2">
            <div className="absolute bottom-[75px] left-2.5 bg-black rounded-full font-bold p-1">
              <div className="w-[30px] h-[30px]">
                <CircularProgressbar
                  value={item.vote_average * 10} // Assuming rating is on a scale of 0 to 10
                  text={`${Math.trunc(item.vote_average * 10)}%`}
                  styles={buildStyles({
                    backgroundColor: "black",
                    textColor: "#FFF", // White text color
                    pathColor: "#FFD700", // Gold path color
                    trailColor: "transparent", // Transparent trail color
                    textSize: "32px",
                  })}
                />
              </div>
            </div>
            <p className="font-bold line-clamp-2 my-2">{item.name}</p>
            <p className="font-light">{item.release_date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShowCard;
