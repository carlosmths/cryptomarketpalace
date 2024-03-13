import { Page } from 'components/page/Page';
import { ExchangePage } from 'pages/ExchangePage';
import { HomePage } from 'pages/HomePage';
import { JobsListingPage } from 'pages/JobsListingPage';
import { ResourcesPage } from 'pages/ResourcesPage';
import { createBrowserRouter } from 'react-router-dom';

const RouterConfig = createBrowserRouter([
  {
    path: '/',
    element: (
      <Page>
        <HomePage />
      </Page>
    ),
  },
  {
    path: '/exchange',
    element: (
      <Page>
        <ExchangePage />
      </Page>
    ),
  },
  {
    path: '/resources',
    element: (
      <Page>
        <ResourcesPage />
      </Page>
    ),
  },
  {
    path: '/jobs',
    element: (
      <Page>
        <JobsListingPage />
      </Page>
    ),
  },
]);

export { RouterConfig };
