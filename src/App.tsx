import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="flex justify-center h-full w-full lg:p-5 bg-base-300">
      <div className="w-full h-full rounded-xl glass flex flex-col items-center p-2 lg:p-5 lg:overflow-hidden">
        {/* header */}
        <Header />
        {/* main */}
        <Main />
      </div>
    </div>
  );
};

export default App;
