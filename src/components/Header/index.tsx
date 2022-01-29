import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFilePdf } from 'react-icons/fa';
import flagEN from '../../assets/en.jpg';
import flagID from '../../assets/id.jpg';
import Tooltip from '../Tooltip';
import Avatar from './Avatar';
import CurrentJob from './CurrentJob';
import Fullname from './Fullname';

const languages = [
  {
    id: 'id',
    name: 'Bahasa',
    flag: flagID,
  },
  {
    id: 'en',
    name: 'English',
    flag: flagEN,
  },
];

const Header = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState('id');

  return (
    <div className='w-full flex flex-col lg:flex-row mb-2 lg:flex-none lg:h-full lg:space-x-2'>
      <div className='lg:flex-none flex lg:flex-col lg:space-x-0 lg:space-y-2 lg:justify-between lg:h-full lg:w-min bg-gray-900/50 p-2 rounded-xl lg:mb-0'>
        {languages.map((item, index) => (
          <Tooltip title={item.name} direction='tooltip-right' key={item.id}>
            <button
              className={`btn btn-square ${
                lang === item.id ? 'opacity-100' : 'opacity-25'
              }`}
              onClick={() => {
                setLang(item.id);
                i18n.changeLanguage(item.id);
              }}>
              <div className='avatar'>
                <div className='mb-8 rounded-btn w-12 h-12 p-2'>
                  <img src={item.flag} alt={item.id} />
                </div>
              </div>
            </button>
          </Tooltip>
        ))}

        <div className='divider flex-none'></div>

        <Tooltip
          title='Export PDF (under maintainance)'
          direction='tooltip-right'>
          <button
            className='btn btn-square text-3xl btn-ghost cursor-not-allowed'
            disabled>
            <FaFilePdf />
          </button>
        </Tooltip>
      </div>
      <div className='flex w-full lg:flex-1 flex-col items-center bg-gray-900/50 py-3 rounded-btn'>
        <Avatar />
        <Fullname />
        <CurrentJob />
      </div>
    </div>
  );
};

export default Header;
