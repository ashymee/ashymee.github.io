import { useTranslation } from 'react-i18next';

const languages = [
  {
    name: 'Indonesian',
    level: 100,
    status: 'Native',
  },
  {
    name: 'English',
    level: (2 / 3) * 100,
    status: 'Fluent',
  },
];

const Languages = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='divider'>{t('bahasa')}</div>
      <div className='flex flex-col justify-center space-y-2'>
        {languages.map((language, index) => (
          <div className='text-2xl' key={language.name}>
            <div className=''>
              {language.name} (
              {language.status === 'Native' ? t('native') : t('fasih')})
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

export default Languages;
