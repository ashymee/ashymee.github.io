import { useTranslation } from 'react-i18next';

const skills = [
  {
    name: 'ReactJS',
    level: 100,
    status: 'Expert',
  },
  {
    name: 'NextJS',
    level: 100,
    status: 'Expert',
  },
  {
    name: 'Redux',
    level: 100,
    status: 'Expert',
  },
  {
    name: 'Typescript',
    level: (2 / 3) * 100,
    status: 'Experienced',
  },
  {
    name: 'Firebase',
    level: 100,
    status: 'Expert',
  },
  {
    name: 'MySQL',
    level: 100,
    status: 'Expert',
  },
  {
    name: 'TaiwindCSS',
    level: 100,
    status: 'Expert',
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='divider'>{t('keahlian')}</div>
      <div className='flex flex-col justify-center space-y-2'>
        {skills.map((language, index) => (
          <div className='text-2xl' key={language.name}>
            <div className=''>
              {language.name} (
              {language.status === 'Expert' ? t('mahir') : t('berpengalaman')})
            </div>
            <progress
              className='progress progress-primary w-full'
              value={language.level}
              max='100'></progress>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
