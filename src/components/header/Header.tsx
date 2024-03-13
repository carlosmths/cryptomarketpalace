import { Container } from 'components/container/Container';
import { LinkButton } from 'components/link-button/LinkButton';
import { Navigation } from 'components/navigation/Navigation';
import { ReactComponent as Logo } from 'assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <Container className="flex justify-between items-center py-4 gap-x-4">
        <div className="w-auto h-full">
          <Logo className="w-full h-full" />
        </div>
        <Navigation />
        <div className="ml-auto flex gap-4">
          <LinkButton href={''}>Login</LinkButton>
          <LinkButton href={''} variant="secondary">
            Register
          </LinkButton>
        </div>
      </Container>
    </header>
  );
};

export { Header };
