export type DashboardRoutes = {
  path: string;
  component: React.ReactNode | React.ReactNode[] | (() => JSX.Element);
  exact: boolean;
  label: string;
};
