import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavLinkContainer } from './styles';

interface Props {
  path: string;
  includes?: boolean;
  children?: ReactNode;
}

export default function NavLink({ path, includes = false, children }: Props) {
  const router = useLocation();

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();
  return (
    <NavLinkContainer isActive={isActive}>
      <Link to={path} >
        <a>{children}</a>
      </Link>
    </NavLinkContainer>
  );
}
