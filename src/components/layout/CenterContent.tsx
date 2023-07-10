type CenterContentProps = {
  children: React.ReactNode;
};
export const CenterContent = ({ children }: CenterContentProps) => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 w-full h-full px-4 sm:px-6 lg:px-8 min-h-screen max-w-lg mx-auto'>
      {children}
    </div>
  );
};
