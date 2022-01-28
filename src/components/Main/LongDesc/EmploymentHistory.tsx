import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaLink } from 'react-icons/fa';

const EmploymentHistory = () => {
  const { t } = useTranslation();

  const employmentHistories = [
    {
      title: t('webdev'),
      employer: t('kominfo'),
      link: 'https://karawangkab.go.id',
      start: 'Jan, 2019',
      end: `${t('des')}, 2021`,
      location: t('loc_krw'),
      img: '/images/krw.png',
    },
    {
      title: t('asman'),
      employer: 'PT Perkebunan Nusantara 1',
      link: 'http://ptpn1.co.id/',
      start: 'Jan, 2011',
      end: `${t('des')}, 2018`,
      location: 'Aceh, Indonesia',
      img: '/images/ptpn1.png',
    },
    {
      title: t('asman'),
      employer: 'PT Teladan Prima Agro',
      link: 'https://www.teladanprima.com/',
      start: 'Jan, 2008',
      end: 'Sep, 2021',
      location: t('loc_kaltim'),
      img: '/images/tpg.png',
    },
  ];

  return (
    <div className='p-3'>
      {/* header title */}
      <div className='flex text-xl lg:text-2xl items-center space-x-3 mb-2 lg:mb-5'>
        <FaBriefcase />
        <div className='uppercase'>{t('pengalaman_kerja')}</div>
      </div>
      {/* description */}
      <div className='space-y-2 lg:space-y-3'>
        {employmentHistories.map((item, index) => (
          <div className='flex text-xl label-link' key={item.employer}>
            <div className='flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-3 hover:bg-slate-900/25 w-full lg:p-2 rounded-xl'>
              <div className='avatar rounded-xl p-2 m-auto hidden lg:flex lg:flex-none'>
                <div className='rounded-btn lg:w-16 lg:h-16 label-img'>
                  <img src={item.img} alt={item.employer} />
                </div>
              </div>
              <div className='text-xl lg:flex-1'>
                <h1 className='font-bold text-xl lg:text-2xl'>{item.title}</h1>
                <div className='lg:flex lg:items-center text-slate-500'>
                  <h1 className='lg:space-x-3 flex flex-col lg:flex-row lg:mr-5'>
                    <span className='lg:font-bold'>{item.employer}</span>
                    <span>{item.location}</span>
                  </h1>
                  <a
                    href={item.link}
                    className='hidden label-icon'
                    target='_blank'
                    rel='noopener noreferrer nofollow'>
                    <FaLink />
                  </a>
                </div>
                <div className='flex space-x-3 text-slate-500'>
                  <div>{item.start}</div>
                  <div>-</div>
                  <div>{item.end}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmploymentHistory;
