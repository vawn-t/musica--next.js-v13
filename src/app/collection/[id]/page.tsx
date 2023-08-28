const Collection = ({ params }: { params: { id: string } }) => {
  return <div>My Collection: {params.id}</div>;
};
export default Collection;
