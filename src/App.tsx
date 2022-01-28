import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <div className='flex justify-center w-screen h-screen p-10 bg-base-300 overflow-hidden'>
      <div className='w-full h-full rounded-xl glass flex flex-col items-center p-5 overflow-hidden'>
        {/* header */}
        <Header />
        {/* main */}
        <Main />
      </div>
    </div>
  );
};

export default App;
