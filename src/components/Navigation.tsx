import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface NavigationProps {
  onLinkClick?: () => void;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ onLinkClick, className }) => {
  const links = [
    ['Home', '/'],
    ['Exchange', '/exchange'],
    ['Resources', '/resources'],
  ];

  return (
    <nav className={classNames('navigation flex gap-x-4 w-full lg:w-auto', className)} role="navigation">
      {links.map(([title, url]) => (
        <NavLink
          key={uuidv4()}
          to={url}
          className={({ isActive }) =>
            classNames(
              'py-2 font-semibold uppercase text-lg lg:normal-case lg:text-base',
              'relative lg:after:content-[""] lg:after:h-1 lg:after:bg-purple-600 lg:after:absolute lg:after:top-full lg:after:w-full lg:after:left-0 lg:after:scale-0 lg:hover:after:scale-100',
              isActive ? 'lg:after:scale-100' : ''
            )
          }
          onClick={onLinkClick}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

export { Navigation };
