const getData = async () => {
  const res = await fetch("https://swapi.dev/api/people/1");
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
  - This is the default way to fetch data in Next.js 13: Static Site Generation (SSG)
  - The data is fetched on BUILD time, then cache it. 
  - On every request, the cached data is served.
*/
