import { FaArrowDown } from 'react-icons/fa';
import Details from './Details';
import Hobbies from './Hobbies';
import Languages from './Languages';
import Links from './Links';
import Skills from './Skills';

const ShortDesc = () => (
  <div className='rounded-xl flex-none w-96 p-2 bg-gray-900/50 left-container'>
    <p className='mt-[-50px] absolute bg-base-300 p-2 rounded flex space-x-2 items-center left-scroll-down'>
      <span>scroll</span>
      <FaArrowDown />
    </p>
    <div className='overflow-auto space-y-10 h-full w-full pb-10'>
      {/* details */}
      <Details />
      {/* social media links */}
      <Links />
      {/* skillset */}
      <Skills />
      {/* languages */}
      <Languages />
      {/* hobbies */}
      <Hobbies />
    </div>
  </div>
);

export default ShortDesc;
