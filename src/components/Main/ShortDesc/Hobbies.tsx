import { useTranslation } from 'react-i18next';

const Hobbies = () => {
  const { t } = useTranslation();

  const hobbies = [
    t('ngoding'),
    t('logo_design'),
    t('basket'),
    t('sepedahan'),
    t('baca'),
  ];

  return (
    <div>
      <div className='divider'>{t('hobi')}</div>
      <div className='flex flex-wrap justify-center space-x-2'>
        {hobbies.map((hobby, index) => (
          <div className='text-xl lg:text-2xl' key={hobby}>
            {/* add comma for each hoby, and remove comma for the last hobby */}
            {index !== hobbies.length - 1 ? `${hobby}, ` : `${hobby}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
