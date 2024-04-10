import { Container } from 'components/Container';
import { ButtonVariant, Button } from 'components/Button';
import { Navigation } from 'components/Navigation';
import BurgerMenu from 'components/BurgerMenu';
import React from 'react';
import classNames from 'classnames';
import { MainLogo } from 'components/MainLogo';

const Header: React.FC = () => {
  const BREAKPOINT_LG = 1024;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuOnClick = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  React.useEffect(() => {
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
        <a className="w-auto h-full" href="/">
          <MainLogo className="main-logo w-full h-full" />
        </a>
        <BurgerMenu isMenuOpen={isMenuOpen} onClick={menuOnClick} className="flex lg:hidden z-50 flex-shrink-0" />
        <div
          className={classNames(
            isMenuOpen
              ? 'absolute inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity opacity-100 w-screen h-screen z-40'
              : 'hidden',
            'backdrop'
          )}></div>
        <div
          className={classNames(
            'navigation-container ml-auto gap-6 lg:flex',
            isMenuOpen
              ? 'flex absolute w-[min(20rem,calc(100vw-theme(spacing.10)))] h-screen flex-col top-0 right-0 bg-white items-start p-4 z-10'
              : 'hidden items-center'
          )}>
          <MainLogo className={classNames(isMenuOpen ? 'h-14' : 'hidden')} iconOnly />
          <hr className={classNames(isMenuOpen ? 'block' : 'hidden', 'w-full mt-4')} />
          <Navigation className={classNames({ 'flex-col': isMenuOpen })} onLinkClick={closeMenu} />
          <hr className={classNames(isMenuOpen ? 'block' : 'hidden', 'w-full')} />
          <div className={classNames({ 'flex-col w-full': isMenuOpen }, 'flex gap-4')}>
            <Button href="#" onClick={closeMenu}>
              Login
            </Button>
            <Button href="#" onClick={closeMenu} variant={ButtonVariant.secondary}>
              Sign Up
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header };
