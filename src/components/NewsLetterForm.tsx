import { Button, ButtonVariant } from 'components/Button';
import React from 'react';
import { Theme } from 'types/sharedTypes';

const NewsLetterForm: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);

  const onSubmit = (email: string) => {
    console.log('SUBMITTED', email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(email);
      setEmail('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValid(e.target.checkValidity());
  };

  return (
    <>
      <h6 className="mb-4">Subscribe to our newsletter</h6>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="py-2 px-4 rounded-lg w-full text-black"
          placeholder="Email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <Button theme={Theme.dark} variant={ButtonVariant.secondary}>
          Subscribe
        </Button>
      </form>
    </>
  );
};

export { NewsLetterForm };
