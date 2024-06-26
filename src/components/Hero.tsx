import classNames from 'classnames';
import { Button, ButtonVariant } from 'components/Button';
import { Container } from 'components/Container';
import { Theme } from 'types/sharedTypes';

enum HeroVariant {
  fullHeight = 'fullHeight',
  simple = 'simple',
}

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  primaryCta?: string;
  primaryCtaLink?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  variant?: HeroVariant;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
  variant = HeroVariant.fullHeight,
}) => {
  const isSimpleVariant = variant === HeroVariant.simple;

  return (
    <div
      className={classNames(
        'hero flex flex-1 items-center bg-no-repeat bg-cover bg-right-bottom bg-black/50 bg-blend-darken',
        !isSimpleVariant && 'min-h-[calc(100vh-20rem)]'
      )}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <Container
        className={classNames('hero-content flex py-24 text-white h-full', {
          'justify-center': isSimpleVariant,
        })}>
        <div
          className={classNames('w-full', {
            'lg:w-6/12 min-w-min lg:pr-10': variant === HeroVariant.fullHeight,
            'text-center': isSimpleVariant,
          })}>
          <h1>{title}</h1>
          <p className={classNames(!primaryCta && !secondaryCta && 'mb-0')}>{subtitle}</p>
          {(primaryCta || secondaryCta) && (
            <div className="buttons flex gap-4 items-center">
              {primaryCta && (
                <Button theme={Theme.dark} href={primaryCtaLink}>
                  {primaryCta}
                </Button>
              )}
              {secondaryCta && (
                <Button theme={Theme.dark} variant={ButtonVariant.secondary} href={secondaryCtaLink}>
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

export { Hero, HeroVariant };
