import { useTranslation } from 'react-i18next';
import { FaRunning } from 'react-icons/fa';

const Organizations = () => {
  const { t } = useTranslation();

  const organizations = [
    {
      title: t('lab'),
      as: t('labkom'),
      start: '2002',
      end: '2005',
      location: `UNPAD - ${t('loc_bdg')}`,
    },
    {
      title: t('ento'),
      as: t('asdos'),
      start: '2002',
      end: '2005',
      location: `UNPAD - ${t('loc_bdg')}`,
    },
    {
      title: 'Raudlatul Athfal, Jatinangor',
      as: t('paud'),
      start: '2002',
      end: '2005',
      location: `UNPAD - ${t('loc_bdg')}`,
    },
    {
      title: t('iaas'),
      as: t('sekretaris'),
      start: '2002',
      end: '2003',
      location: t('loc_bdg'),
    },
    {
      title: t('paskib'),
      as: t('anggota'),
      start: '1999',
      end: '2001',
      location: `${t('sma')} - ${t('loc_bdg')}`,
    },
    {
      title: t('osis'),
      as: t('ka_bid'),
      start: '2002',
      end: '2005',
      location: `${t('sma')} - ${t('loc_bdg')}`,
    },
    {
      title: 'Taekwon-do',
      as: t('ka_unit'),
      start: '2002',
      end: '2005',
      location: `${t('sma')} - ${t('loc_bdg')}`,
    },
  ];

  return (
    <div className='p-3'>
      {/* header title */}
      <div className='flex text-xl lg:text-2xl items-center space-x-3 mb-5'>
        <FaRunning />
        <div className='uppercase'>{t('eksskul')}</div>
      </div>
      {/* description */}
      <div className='space-y-3'>
        {organizations.map((item, index) => (
          <div className='flex text-xl label-link' key={item.title}>
            <div className='flex items-start space-x-3 hover:bg-slate-900/25 w-full p-2 rounded-xl'>
              <div className='text-xl'>
                <h1 className='text-xl lg:text-2xl'>
                  <span className='lg:font-bold'>{item.as}</span> -{' '}
                  <span className='font-extralight'>{item.title}</span>
                </h1>
                <div className='flex items-center text-slate-500'>
                  <h1 className='space-x-3 mr-5'>{item.location}</h1>
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

export default Organizations;
