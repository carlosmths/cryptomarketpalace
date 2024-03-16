import { Container } from 'components/container/Container';
import { LinkButton } from 'components/link-button/LinkButton';
import { Navigation } from 'components/navigation/Navigation';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as LogoIcon } from 'assets/logo-icon.svg';
import BurgerMenu from 'components/burger-menu/BurgerMenu';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const Header = () => {
  const BREAKPOINT_LG = 1024;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOnClick = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const mm = window.matchMedia(`(min-width: ${BREAKPOINT_LG}px)`);
    const handleResize = () => setIsMenuOpen(isMenuOpen && !mm.matches);
    mm.addEventListener('change', handleResize);

    return () => {
      mm.removeEventListener('change', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <Container className="flex justify-between items-center py-4 gap-x-4 relative">
        <div className="logo-container w-auto h-full">
          <Logo className="main-logo w-full h-full" />
        </div>
        <BurgerMenu
          isMenuOpen={isMenuOpen}
          onClick={menuOnClick}
          className="flex lg:hidden z-20 flex-shrink-0"
        />
        <div
          className={classNames(
            isMenuOpen
              ? 'absolute inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity opacity-100 w-screen h-screen'
              : 'hidden',
            'backdrop'
          )}
        ></div>
        <div
          className={classNames(
            'navigation-container ml-auto gap-6 lg:flex',
            isMenuOpen
              ? 'flex absolute w-[min(20rem,calc(100vw-theme(spacing.10)))] h-screen flex-col top-0 right-0 bg-white items-start p-4 z-10'
              : 'hidden items-center'
          )}
        >
          <LogoIcon className={classNames(isMenuOpen ? 'h-14' : 'hidden')} />
          <hr
            className={classNames(
              isMenuOpen ? 'block' : 'hidden',
              'w-full mt-4'
            )}
          />
          <Navigation
            className={classNames({ 'flex-col': isMenuOpen })}
            onLinkClick={closeMenu}
          />
          <hr
            className={classNames(isMenuOpen ? 'block' : 'hidden', 'w-full')}
          />
          <div
            className={classNames(
              { 'flex-col w-full': isMenuOpen },
              'flex gap-4'
            )}
          >
            <LinkButton href={''} onClick={closeMenu}>
              Login
            </LinkButton>
            <LinkButton href={''} onClick={closeMenu} variant="secondary">
              Register
            </LinkButton>
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header };
