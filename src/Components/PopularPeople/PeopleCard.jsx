function PeopleCard({ item }) {
  return (
    <Link to={`/person/${item.id}`}>
      <div
        className="min-w-[140px] w-[240px] pb-2.5 overflow-hidden border border-gray-500  h-[350px]  shadow-lg cursor-pointer rounded-md"
        key={item.id}
      >
        <img
          src={
            item.profile_path !== null
              ? `${base_url}${item?.profile_path}`
              : defaultImage
          }
          height={175}
          className="rounded-tl-md rounded-tr-md object-fill w-full min-h-[175px]"
          alt={`${item.name}'s profile`}
        />
        <div className="flex flex-col pb-4 px-2">
          <p className="font-bold">{item.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default PeopleCard;
