const getData = async () => {
  const res = await fetch("https://swapi.dev/api/people/1", {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-white text-4xl">{data.name}</h1>
    </main>
  );
}

/*
  - If you like SSG, but want to refetch in an x amount of time, Incremental Static Regeneration (ISR) is the way to go.
  - The data is fetched on BUILD time, then cache it. 
  - On every request, the cached data is served.
  - If the data is older than the specified revalidate time, the data is refetched and the cache is updated.
*/
