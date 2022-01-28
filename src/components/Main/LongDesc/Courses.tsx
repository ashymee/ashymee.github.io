import { useTranslation } from 'react-i18next';
import { FaCertificate, FaLink } from 'react-icons/fa';

const Courses = () => {
  const { t } = useTranslation();

  const courses = [
    {
      title: t('prog'),
      institution: t('bnsp'),
      link: 'https://https://bnsp.go.id/',
      start: 'Apr, 2020',
    },
    {
      title: t('mobdev'),
      institution: t('bnsp'),
      link: 'https://https://bnsp.go.id/',
      start: 'Jan, 2019',
    },
    {
      title: 'Penetration Testing',
      institution: 'West Java Provincial Government Office',
      link: 'https://jabarprov.go.id/',
      start: 'Ags, 2020',
    },
    {
      title: 'Penetration Testing',
      institution: 'West Java Provincial Government Office',
      link: 'https://jabarprov.go.id/',
      start: 'Sep, 2019',
    },
    {
      title: t('lan'),
      institution: 'Universitas Padjadjaran',
      link: 'https://www.unpad.ac.id/',
      start: 'Jan, 2002',
    },
    {
      title: t('pc'),
      institution: 'Universitas Padjadjaran',
      link: 'https://www.unpad.ac.id/',
      start: 'Jan, 2002',
    },
    {
      title: t('kmpd'),
      institution: 'PT Perkebunan Nusantara 1',
      link: 'http://ptpn1.co.id/',
      start: 'Feb, 2013',
    },
    {
      title: t('ldk'),
      institution: 'PT Perkebunan Nusantara 1',
      link: 'http://ptpn1.co.id/',
      start: 'Feb, 2011',
    },
    {
      title: 'Planters',
      institution: 'PT Teladan Prima Agro',
      link: 'https://www.teladanprima.com/',
      start: 'Jan, 2008',
    },
  ];

  return (
    <div className='p-3'>
      {/* header title */}
      <div className='flex text-xl lg:text-2xl items-center space-x-3 mb-5'>
        <FaCertificate />
        <div className='uppercase'>{t('kursus')}</div>
      </div>
      {/* description */}
      <div className='space-y-3'>
        {courses.map((item, index) => (
          <div
            className='flex text-xl label-link'
            key={`${item.institution}-${index + 1}`}>
            <div className='flex items-start space-x-3 hover:bg-slate-900/25 w-full p-2 rounded-xl'>
              <div className='text-xl'>
                <h1 className='font-bold text-xl lg:text-2xl'>{item.title}</h1>
                <div className='flex items-center text-slate-500'>
                  <h1 className='mr-3 lg:font-bold'>{item.institution}</h1>
                  <a
                    href={item.link}
                    className='label-icon hidden lg:block'
                    target='_blank'
                    rel='noopener noreferrer nofollow'>
                    <FaLink />
                  </a>
                </div>
                <div className='text-slate-500'>{item.start}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
