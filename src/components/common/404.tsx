import { CenterContent } from '../layout';
import { Link } from 'react-router-dom';
import svg from '../../assets/404-animated.svg';

export const NotFound = () => {
  return (
    <CenterContent>
      <h2 className='font-extrabold text-3xl'>Oops, that page doest exist!</h2>
      <div className='image-container'>
        <img className='drop-shadow-lg' src={svg} alt='404' />
      </div>
      <Link className='link' to='/'>
        Go Home
      </Link>
    </CenterContent>
  );
};
