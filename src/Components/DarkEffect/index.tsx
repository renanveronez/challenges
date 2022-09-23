import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, SwitchIcon } from './styles';
import MoonIcon from '../../Assets/moon.png';
import SunIcon from '../../Assets/sun.png';

interface DarkEffectProps {
  toggleTheme: () => void;
}

const DarkEffect: React.FC<DarkEffectProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      {/* <h1>Dark <span>Effect</span></h1> */}
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={<SwitchIcon src={SunIcon} alt="Sun" />}
        uncheckedIcon={<SwitchIcon src={MoonIcon} alt="Moon" />}
        onColor={colors.primary}
        offColor={colors.switch}
      />

    </Container>
  )
}

export default DarkEffect;