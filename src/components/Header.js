import useWindowSize from '../hooks/useWindowSize';
import styled from 'styled-components';
import bgMob from '../images/bg-header-mobile.svg';
import bgDesk from '../images/bg-header-desktop.svg';

const HeaderContainer = styled.header`
  background-color: var(--primary);
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
`;

const Header = () => {
  const windowSize = useWindowSize();
  const bg = windowSize.width > 375 ? bgDesk : bgMob;

  return <HeaderContainer bg={bg} />;
};

export default Header;
