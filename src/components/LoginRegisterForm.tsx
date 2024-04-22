import { Button, ButtonVariant } from 'components/Button';
import { MainLogo } from 'components/MainLogo';
import IconGoogle from 'assets/icon-google.svg';
import IconApple from 'assets/icon-apple.svg';
import { Checkbox } from 'components/Checkbox';
import React from 'react';
import { Link } from 'react-router-dom';

interface LoginRegisterFormProps {
  isLogin?: boolean;
}

const LoginRegisterForm: React.FC<LoginRegisterFormProps> = ({ isLogin }) => {
  const iconClass = 'absolute top-1/2 -translate-y-1/2 left-4 h-4 w-4 ml-0.5';
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="form flex flex-col gap-y-4 max-w-lg mx-auto p-6 border rounded-lg">
      <MainLogo className="w-64" />
      <h3>{isLogin ? 'Log In' : 'Welcome!'}</h3>
      <form className="flex flex-col gap-y-4">
        <label htmlFor="email" className="font-semibold">
          Email:
        </label>
        <input
          id="email"
          type="email"
          className="p-2 border rounded-lg hover:outline hover:outline-1 hover:outline-slate-950"></input>
        {!isLogin && (
          <Checkbox
            label={
              <>
                By creating an account, I agree to CryptoMarketPalace's <Link to="#"> Terms of Service </Link> and{' '}
                <Link to="#">Privacy Policy</Link>.
              </>
            }
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        )}
        <Button type="submit">Continue</Button>
      </form>
      <div className="flex items-center h-4 my-4">
        <div className="w-full border-t border-gray-400"></div>
        <div className="mx-4">or</div>
        <div className="w-full border-t border-gray-400"></div>
      </div>
      <Button variant={ButtonVariant.secondary} className="relative">
        <img src={IconGoogle} alt="Google icon" className={iconClass} />
        Continue with Google
      </Button>
      <Button variant={ButtonVariant.secondary} className="relative">
        <img src={IconApple} alt="Apple icon" className={iconClass} />
        Continue with Apple
      </Button>
      {isLogin ? (
        <p className="mt-4">
          Don't have an account yet?{' '}
          <Link to="/register" className="underline-none">
            Register
          </Link>
        </p>
      ) : (
        <p className="mt-4">
          Already have an account?{' '}
          <Link to="/login" className="underline-none">
            Login
          </Link>
        </p>
      )}
    </div>
  );
};

export { LoginRegisterForm };
