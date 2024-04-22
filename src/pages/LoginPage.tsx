import { Container } from 'components/Container';
import { LoginRegisterForm } from 'components/LoginRegisterForm';

const LoginPage: React.FC = () => {
  return (
    <section>
      <Container>
        <LoginRegisterForm isLogin />
      </Container>
    </section>
  );
};

export { LoginPage };
