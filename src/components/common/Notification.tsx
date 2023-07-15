import { Transition } from '@headlessui/react';
import { ExclamationIcon, XCircleIcon } from '@heroicons/react/solid';
import { Callout } from '@tremor/react';
export type NotificationType = {
  id: string;
  message: string;
  isShowing?: boolean;
  handleCloseNotification?: () => void;
};
export const CalloutNotification = ({
  isShowing,
  message,
  id,
  handleCloseNotification,
}: NotificationType) => {
  return (
    <Transition
      show={isShowing}
      enter='transition duration-75 transition'
      enterFrom='opacity-0 -translate-y-2'
      enterTo='opacity-100 translate-y-0'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
      className='relative'
      id={id}
    >
      <div className=''>
        <button
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            zIndex: 10,
          }}
          onClick={handleCloseNotification}
        >
          <XCircleIcon className='h-5 w-5 text-rose' />
        </button>
        <Callout
          title='Error'
          icon={ExclamationIcon}
          color='rose'
          className='mt-4'
        >
          {message}
        </Callout>
      </div>
    </Transition>
  );
};
