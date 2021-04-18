import Container from '../Container';
import HomeActions from './HomeActions';
import HomeLogo from './HomeLogo';
import HomeText from './HomeText';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-center p-5'>
      <HomeLogo />
      <HomeText />
      <HomeActions />
    </div>
  );
}
