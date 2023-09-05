const Album = ({ params }: { params: { id: string } }) => {
  return <section>Album: {params.id}</section>;
};
export default Album;
