import { Container } from 'components/Container';
import { MainLogo } from 'components/MainLogo';
import { NewsLetterForm } from 'components/NewsLetterForm';
import { SocialMedia } from 'components/SocialMedia';
import { Theme } from 'types/sharedTypes';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-[#221A39] text-white">
      <Container className="py-16">
        <div className="flex flex-col lg:flex-row gap-x-24 gap-y-12">
          <div className="flex flex-col lg:w-6/12 items-start justify-center gap-12">
            <MainLogo theme={Theme.dark} className="h-14 max-w-full" />
            <div>
              <h4>Community</h4>
              <SocialMedia theme={Theme.dark} />
            </div>
          </div>
          <div className="lg:w-6/12">
            <NewsLetterForm />
          </div>
        </div>
        <hr className="my-16" />
        <div>
          <p>
            Copyright © 2024 CryptoMarketPalace (Fictitious). All rights
            reserved.
          </p>
          <p>
            All materials contained on this website, including but not limited
            to text, graphics, logos, images, audio clips, video clips, digital
            downloads, data compilations, and software, are purely fictional and
            not intended for actual use.
          </p>
          <p>
            This copyright notice is for demonstration purposes only and does
            not represent an actual copyright claim by any entity. Any
            resemblance to real entities is purely coincidental.
          </p>
          <p>
            For more information about this project, please contact:
            <a className="font-bold ml-1" href="mailto:carlosmths@gmail.com">
              carlosmths@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
