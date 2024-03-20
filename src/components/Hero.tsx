import classNames from 'classnames';
import { Button, ButtonVariant } from 'components/Button';
import { Container } from 'components/Container';
import { Theme } from 'types/sharedTypes';

enum HeroVariant {
  fullHeight = 'fullHeight',
  simple = '',
}

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  primaryCta?: string;
  secondaryCta?: string;
  variant?: HeroVariant;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  primaryCta,
  secondaryCta,
  variant = HeroVariant.fullHeight,
}) => {
  return (
    <div
      className={classNames(
        'hero flex flex-1 items-center bg-no-repeat bg-cover bg-right-bottom bg-black/50 bg-blend-darken'
      )}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <Container className="hero-content flex py-24 text-white h-full">
        <div className="flex flex-col gap-8 w-full lg:w-6/12 min-w-min lg:pr-10">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {(primaryCta || secondaryCta) && (
            <div className="buttons flex gap-4 items-center">
              {primaryCta && <Button theme={Theme.dark}>{primaryCta}</Button>}
              {secondaryCta && (
                <Button theme={Theme.dark} variant={ButtonVariant.secondary}>
                  {secondaryCta}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export { Hero };
