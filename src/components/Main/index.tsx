import LongDesc from './LongDesc';
import ShortDesc from './ShortDesc';

const index = () => (
  <main className='w-full h-full flex space-x-2 font-extralight flex-1 overflow-hidden'>
    {/* short description */}
    <ShortDesc />
    {/* long description */}
    <LongDesc />
  </main>
);

export default index;
