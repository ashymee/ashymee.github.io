import avatar from '../../assets/ash.jpg';

const Avatar = () => (
  <div className='avatar'>
    <div className='w-48 h-48 lg:w-24 lg:h-24 mb-8 rounded-btn'>
      <img src={avatar} alt='Profile Ash' />
    </div>
  </div>
);

export default Avatar;
