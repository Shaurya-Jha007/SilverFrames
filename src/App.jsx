const apiKey = import.meta.env.VITE_API_KEY;
function App() {
  console.log(apiKey);
  return (
    <>
      <h1 className="text-5xl text-red-400">Hello</h1>
    </>
  );
}

export default App;
