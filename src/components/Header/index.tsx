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
    <div className='w-full flex mb-5 flex-none'>
      <div className='flex-none flex flex-col space-y-2 h-min bg-slate-700 p-2 rounded-xl'>
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
        <div className='divider'></div>
        <button className='btn btn-square text-2xl bg-gradient-to-r from-blue-700 to-blue-600 border-0 hover:from-blue-600 hover:to-blue-700'>
          <FaFilePdf />
        </button>
      </div>
      <div className='flex flex-1 flex-col items-center'>
        <Avatar />
        <Fullname />
        <CurrentJob />
      </div>
      <div className='h-full'>
        <a
          className='flex-none btn bg-base-300 text-2xl font-extralight hover:text-orange-400 rotate-90 mt-16 mr-[50px] fixed'
          href='https://devstreetlab.my.id'>
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default Header;
