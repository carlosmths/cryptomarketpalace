import { ExchangePage } from "pages/ExchangePage";
import { HomePage } from "pages/HomePage";
import { JobsListingPage } from "pages/JobsListingPage";
import { ResourcesPage } from "pages/ResourcesPage";
import { createBrowserRouter } from "react-router-dom";

const RouterConfig = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/exchange',
    element: <ExchangePage />
  },
  {
    path: '/resources',
    element: <ResourcesPage />
  },
  {
    path: '/jobs',
    element: <JobsListingPage />
  }
]);

export { RouterConfig };