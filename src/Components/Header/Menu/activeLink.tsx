import { Link, useLocation } from 'react-router-dom'
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export default function NavLink({ title, path, includes = false }: Props) {
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
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
