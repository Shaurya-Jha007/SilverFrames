export default function Streaming() {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const streaming_networks = [
    {
      service_name: "Netflix",
      jpg: "wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
    },
    {
      service_name: "Disney",
      jpg: "wdrCwmRnLFJhEoH8GSfymY85KHT.png",
    },
    {
      service_name: "HBO",
      jpg: "nmU0UMDJB3dRRQSTUqawzF2Od1a.png",
    },
    {
      service_name: "Prime",
      jpg: "ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png",
    },
    {
      service_name: "Hulu",
      jpg: "pqUTCleNUiTLAVlelGxUgWn1ELh.png",
    },
    {
      service_name: "AppleTV",
      jpg: "4KAy34EHvRM25Ih8wb82AuGU7zJ.png",
    },
    {
      service_name: "Paramount",
      jpg: "fi83B1oztoS47xxcemFdPMhIzK.png",
    },
    {
      service_name: "Peacock",
      jpg: "gIAcGTjKKr0KOHL5s4O36roJ8p7.png",
    },
    {
      service_name: "Crunchyroll",
      jpg: "81QfupgVijSH5v1H3VUbdlPm2r8.png",
    },
    {
      service_name: "Starz",
      jpg: "GMDGZk9iDG4WDijY3VgUgJeyus.png",
    },
    {
      service_name: "Marvel",
      jpg: "hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
    },
    {
      service_name: "DC",
      jpg: "2Tc1P3Ac8M479naPp1kYT3izLS5.png",
    },
  ];

  return (
    <section className="h-[50vh] flex flex-col items-center bg-gray-900/90">
      <h2 className="text-5xl font-semibold">Streaming Networks</h2>
      <div className="grid grid-cols-5 my-16 mx-auto w-11/12">
        {streaming_networks.slice(0, 6).map((network, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-t from-indigo-500/60 to-transparent text-center px-16 py-8 mx-6"
            >
              <img
                src={`${baseUrl}/${network.jpg}`}
                alt={network.service_name}
                className="h-auto hover:scale-110 duration-500"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
