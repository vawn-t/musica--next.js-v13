const getMe = async () => {
  const res = await fetch(`${process.env.DB_HOST}/users/1?populate=*`, {
    method: 'GET'
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default async function Home() {
  const me = await getMe();

  return (
    <main>
      {/* TODO: Just for test. Will be removed soon */}
      Fetch me information from DB
      <p>{me.username}</p>
      <p>{me.email}</p>
    </main>
  );
}
