import { useTranslation } from 'react-i18next';
import {
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

const links = [
  {
    name: 'Github',
    comp: <FaGithubSquare />,
    url: 'https://github.com/ashymee',
  },
  {
    name: 'LinkedIn',
    comp: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/aswinhimawan/',
  },
  {
    name: 'Instagram',
    comp: <FaInstagramSquare />,
    url: 'https://www.instagram.com/ashymeeid',
  },
  {
    name: 'Facebook',
    comp: <FaFacebookSquare />,
    url: 'https://www.facebook.com/aswin.himawan.sahlan',
  },
  {
    name: 'Mail',
    comp: <FaEnvelopeSquare />,
    url: 'mailto:ashymee@gmail.com',
  },
];

const Links = () => {
  const { t } = useTranslation();

  return (
    <div className=''>
      <div className='divider'>{t('tautan')}</div>
      <div className='flex flex-wrap justify-center space-x-2'>
        {links.map((link, index) => (
          <a
            className='btn btn-square text-2xl'
            key={link.name}
            href={link.url}
            target='_blank'
            title={link.name}
            rel='noopener noreferrer nofollow'>
            {link.comp}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Links;
