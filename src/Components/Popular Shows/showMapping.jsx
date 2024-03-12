import ShowCard from "./ShowCard";
function ShowMapping({ tvData }) {
  return (
    <>
      {tvData.map((item) => (
        <ShowCard item={item} />
      ))}
    </>
  );
}

export default ShowMapping;
