import Logo from '../../assets/logo.jpeg';
import { ImageHolder, Title } from './styles';

const Header = () => {
  return (
    <>
      <ImageHolder src={Logo} alt="Weather application logo" tabIndex="0" />
      <Title role="heading" tabIndex="0">
        Lets see How is the weather today at your search location
      </Title>
    </>
  );
};

export default Header;
