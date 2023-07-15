import { useState } from 'react';
import { NotificationType } from '../components/common/Notification';

export const useNotification = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const addNotification = (message: string) => {
    const newNotification = {
      id: Date.now().toString(),
      message,
      isShowing: true,
    };

    setNotifications((notifications: NotificationType[]) => [
      ...notifications,
      newNotification,
    ]);

    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 5000);
  };

  const removeNotification = (id: string) => {
    // find notification by id then set isShowing to false

    setNotifications((notifications: NotificationType[]) =>
      notifications.map((notification) => {
        if (notification.id === id) {
          return {
            ...notification,
            isShowing: false,
          };
        }
        return notification;
      })
    );
  };

  return {
    notifications,
    addNotification,
    removeNotification,
  };
};
