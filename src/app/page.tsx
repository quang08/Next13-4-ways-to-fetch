"use client";

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
  - If you want want to fetch the data on the CLIENT, it'd be like any react app
  - specify "use client" at the top of the file and now the data is fetched on the client
*/
