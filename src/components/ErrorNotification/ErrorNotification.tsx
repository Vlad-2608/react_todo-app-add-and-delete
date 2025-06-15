// import React, { useEffect, useState } from 'react';

// interface ErrorNotificationProps {
//   errorNotification: string;
//   setErrorNotification: (arg: string) => void;
// }

// export const ErrorNotification: React.FC<ErrorNotificationProps> = ({
//   errorNotification,
//   setErrorNotification,
// }) => {
//   const [isHidden, setIsHidden] = useState(true);

//   useEffect(() => {
//     if (errorNotification) {
//       setIsHidden(false);
//     }

//     const timeout = setTimeout(() => {
//       setIsHidden(true);
//       setErrorNotification('');
//     }, 3000);

//     return () => clearTimeout(timeout);
//   }, [errorNotification, setErrorNotification]);

//   const handleHideErrorButton = () => {
//     setIsHidden(true);
//     setErrorNotification('');
//   };

//   return (
//     <div
//       data-cy="ErrorNotification"
//       className={`notification is-danger is-light has-text-weight-normal ${isHidden ? 'hidden' : ''}`}
//     >
//       <button
//         data-cy="HideErrorButton"
//         type="button"
//         className="delete"
//         onClick={handleHideErrorButton}
//       />
//       {errorNotification}
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

interface ErrorNotificationProps {
  errorNotification: string;
  setErrorNotification: (arg: string) => void;
}

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({
  errorNotification,
  setErrorNotification,
}) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (errorNotification) {
      setIsHidden(false);
    }

    const timeout = setTimeout(() => {
      setIsHidden(true);
      setErrorNotification('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [errorNotification, setErrorNotification]);

  const handleHideErrorButton = () => {
    setIsHidden(true);
    setErrorNotification('');
  };

  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification',
        'is-danger',
        'is-light',
        'has-text-weight-normal',
        {
          hidden: isHidden,
        },
      )}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={handleHideErrorButton}
      />
      {errorNotification}
    </div>
  );
};
