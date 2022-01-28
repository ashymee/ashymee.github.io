import { FaArrowDown } from 'react-icons/fa';
import Courses from './Courses';
import Education from './Education';
import EmploymentHistory from './EmploymentHistory';
import Organizations from './Organizations';
import Profile from './Profile';

const LongDesc = () => (
  <>
    <p className='hidden mt-[-50px] absolute bg-base-300 p-2 rounded lg:flex lg:space-x-2 items-center right-scroll-down'>
      <span>scroll</span>
      <FaArrowDown />
    </p>
    <div className='rounded lg:rounded-xl lg:flex-1 lg:p-2 h-full bg-gray-900/50 space-y-10 lg:space-y-5 overflow-y-auto right-container'>
      <Profile />
      <EmploymentHistory />
      <Education />
      <Courses />
      <Organizations />
    </div>
  </>
);

export default LongDesc;
