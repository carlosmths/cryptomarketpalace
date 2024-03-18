import { Container } from 'components/Container';
import { MainLogo } from 'components/MainLogo';
import { NewsLetterForm } from 'components/NewsLetterForm';
import { Theme } from 'types/sharedTypes';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-[#221A39] text-white">
      <Container className="py-16">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col flex-1 items-start justify-center">
            <MainLogo theme={Theme.dark} className="h-14 max-w-full" />
          </div>
          <div className="flex-1 max-w-xl">
            <NewsLetterForm />
          </div>
        </div>
        <hr className="my-16" />
        <div className="">
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
