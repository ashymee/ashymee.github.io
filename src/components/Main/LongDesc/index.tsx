import { FaArrowDown } from 'react-icons/fa';
import Courses from './Courses';
import Education from './Education';
import EmploymentHistory from './EmploymentHistory';
import Profile from './Profile';

const LongDesc = () => (
  <div className='rounded-xl flex-1 p-2 h-full bg-gray-900/50 space-y-10 overflow-y-auto right-container'>
    <p className='mt-[-50px] absolute bg-base-300 p-2 rounded flex space-x-2 items-center right-scroll-down'>
      <span>scroll</span>
      <FaArrowDown />
    </p>
    <Profile />
    <EmploymentHistory />
    <Education />
    <Courses />
  </div>
);

export default LongDesc;
