import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaLink } from 'react-icons/fa';

const Education = () => {
  const { t } = useTranslation();

  const education = [
    {
      title: t('sarjana'),
      institution: 'Universitas Padjadjaran',
      location: t('loc_bdg'),
      link: 'https://karawangkab.go.id',
      start: 'Jan, 2019',
      end: 'Dec, 2021',
      img: '/images/unpad.png',
    },
    {
      title: t('sma'),
      institution: 'SMU Negeri 3 Karawang',
      location: 'Karawang, West Java, Indonesia',
      link: 'https://karawangkab.go.id',
      start: 'Jan, 2019',
      end: 'Dec, 2021',
      img: '/images/sma.png',
    },
    {
      title: t('smp'),
      institution: 'SLTP Negeri 1 Karawang',
      location: 'Karawang, West Java, Indonesia',
      link: 'https://karawangkab.go.id',
      start: 'Jan, 2019',
      end: 'Dec, 2021',
      img: '/images/smp.png',
    },
    {
      title: t('sd'),
      institution: 'SD Negeri Nagasari 1 Karawang',
      location: 'Karawang, West Java, Indonesia',
      link: 'https://karawangkab.go.id',
      start: 'Jan, 2019',
      end: 'Dec, 2021',
      img: '/images/sd.png',
    },
  ];

  return (
    <div className='p-3'>
      {/* header title */}
      <div className='flex text-2xl items-center space-x-3 mb-5'>
        <FaGraduationCap />
        <div className='uppercase'>{t('edu')}</div>
      </div>
      {/* description */}
      {education.map((item, index) => (
        <div className='flex text-xl label-link' key={item.institution}>
          <div className='flex items-start space-x-3 hover:bg-slate-900/25 w-full p-2 rounded-xl'>
            <div className='avatar rounded-xl p-2'>
              <div className='rounded-btn w-16 h-16 label-img'>
                <img
                  src={item.img}
                  alt={item.institution}
                  className='rounded-xl'
                />
              </div>
            </div>
            <div className='text-xl'>
              <h1 className='font-bold text-2xl'>{item.title}</h1>
              <div className='flex items-center text-slate-500'>
                <h1 className='space-x-3 mr-5'>
                  <span className='font-bold'>{item.institution}</span>
                  <span>{item.location}</span>
                </h1>
                <a
                  href={item.link}
                  className='label-icon'
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
  );
};

export default Education;
