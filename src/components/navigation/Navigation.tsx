import { Link } from 'react-router-dom';

const Navigation = () => {
  const links = [
    ['Home', '/'],
    ['Exchange', '/exchange'],
    ['Resources', '/resources'],
    ['Jobs', '/jobs'],
  ];

  return (
    <nav className="flex gap-x-4" role="navigation">
      {links.map(([title, url]) => (
        <Link
          to={url}
          className="relative after:content-[''] after:h-1 after:bg-purple-600 after:absolute after:top-full after:w-full after:left-0 after:scale-0 hover:after:scale-100"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export { Navigation };
