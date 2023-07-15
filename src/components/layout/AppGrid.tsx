export const AppGrid = ({
  children,
  navigation,
}: {
  children: React.ReactNode;
  navigation: React.ReactNode;
}) => {
  return (
    <div className='flex max-h-screen'>
      <>{navigation}</>
      <div className='w-full h-screen overflow-y-auto '>{children}</div>
    </div>
  );
};
