import { Card } from '@tremor/react';
import { useRef, useEffect } from 'react';
type DialogBoxProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
export const DialogBox = ({ open, onClose, children }: DialogBoxProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (open) {
        ref.current.showModal();
      } else {
        ref.current.close();
      }
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      className='bg-transparent w-full max-w-3xl'
      onClose={onClose}
    >
      <Card className='border-0 rounded-md px-4 pt-8 pb-4 flex flex-col text-white gap-4 min-h-[20rem]'>
        {children}
      </Card>
    </dialog>
  );
};
