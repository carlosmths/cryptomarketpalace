import { Container } from 'components/Container';
import { LoginRegisterForm } from 'components/LoginRegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <section>
      <Container>
        <LoginRegisterForm />
      </Container>
    </section>
  );
};

export { RegisterPage };
