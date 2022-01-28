import LongDesc from './LongDesc';
import ShortDesc from './ShortDesc';

const index = () => (
  <main className='w-full h-full flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 font-extralight lg:flex-1 lg:overflow-hidden'>
    {/* short description */}
    <ShortDesc />
    {/* long description */}
    <LongDesc />
  </main>
);

export default index;
