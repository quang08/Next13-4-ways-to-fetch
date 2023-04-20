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
  - If you want the data is fetched on every request, simple use {cache: "no-store"}.
  - The data is fetched on RUN time, then won't be cached.

  => this has been 3 ways to fetch data on the server. We should assess to see what kind of data we're working with. Static or dynamic so that we can choose the right way to fetch data.
*/
