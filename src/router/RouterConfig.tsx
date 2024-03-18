import { Page } from 'components/Page';
import { ExchangePage } from 'pages/ExchangePage';
import { HomePage } from 'pages/HomePage';
import { JobsListingPage } from 'pages/JobsListingPage';
import { ResourcesPage } from 'pages/ResourcesPage';
import { createBrowserRouter } from 'react-router-dom';

const RouterConfig = createBrowserRouter([
  {
    path: '/',
    element: (
      <Page title="Home">
        <HomePage />
      </Page>
    ),
  },
  {
    path: '/exchange',
    element: (
      <Page title="Exchange">
        <ExchangePage />
      </Page>
    ),
  },
  {
    path: '/resources',
    element: (
      <Page title="Resources">
        <ResourcesPage />
      </Page>
    ),
  },
  {
    path: '/jobs',
    element: (
      <Page title="Jobs">
        <JobsListingPage />
      </Page>
    ),
  },
]);

export { RouterConfig };
