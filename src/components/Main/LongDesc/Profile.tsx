import { useTranslation } from 'react-i18next';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div id={`#${t('profil')}`} className='p-3'>
      {/* header title */}
      <div className='flex text-xl lg:text-2xl items-center space-x-3 mb-5'>
        <FaUser />
        <div className='uppercase'>{t('profil')}</div>
      </div>
      {/* description */}
      <p className='text-xl lg:text-2xl'>{t('profile_desc')}</p>
    </div>
  );
};

export default Profile;