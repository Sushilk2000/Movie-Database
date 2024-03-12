import PeopleCard from "./PeopleCard";
function PeopleMapping({ people }) {
  return (
    <>
      {people?.map((item) => (
        <PeopleCard item={item} />
      ))}
    </>
  );
}

export default PeopleMapping;
