import { ReactComponent as IconFb } from 'assets/icon-fb.svg';
import { ReactComponent as IconInstagram } from 'assets/icon-instagram.svg';
import { ReactComponent as IconPinterest } from 'assets/icon-pinterest.svg';
import { ReactComponent as IconReddit } from 'assets/icon-reddit.svg';
import { ReactComponent as IconX } from 'assets/icon-x.svg';
import { ReactComponent as IconYoutube } from 'assets/icon-youtube.svg';
import classNames from 'classnames';
import { Theme } from 'types/sharedTypes';

interface IconType {
  url: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const socialMediaMap: IconType[] = [
  {
    url: 'https://facebook.com',
    icon: IconFb,
  },
  {
    url: 'https://instagram.com',
    icon: IconInstagram,
  },
  {
    url: 'https://pinterest.com',
    icon: IconPinterest,
  },
  {
    url: 'https://reddit.com',
    icon: IconReddit,
  },
  {
    url: 'https://twitter.com',
    icon: IconX,
  },
  {
    url: 'https://youtube.com',
    icon: IconYoutube,
  },
];

interface SocialMediaProps {
  theme?: Theme;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ theme = Theme.light }) => {
  return (
    <div
      className={classNames(
        'flex gap-2 w-full h-6',
        theme === Theme.light ? 'text-black' : 'text-white'
      )}
    >
      {socialMediaMap.map((socialMedia) => (
        <a
          key={socialMedia.url}
          href={socialMedia.url}
          target="_blank"
          rel="noreferrer"
        >
          <socialMedia.icon className="h-full hover:text-gray-400" />
        </a>
      ))}
    </div>
  );
};

export { SocialMedia };
