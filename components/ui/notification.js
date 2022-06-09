import ReactDOM from 'react-dom';

import classes from './notification.module.css';

/**
 * We're creating a function called Notification that takes in a props object as an argument. We're
 * then destructuring the props object to get the title, message, and status properties. We're then
 * creating a variable called statusClasses and setting it to an empty string. We're then using an if
 * statement to check if the status property is equal to success. If it is, we're setting the
 * statusClasses variable to the success class. We're then using an if statement to check if the status
 * property is equal to error. If it is, we're setting the statusClasses variable to the error class.
 * We're then creating a variable called cssClasses and setting it to the notification class and the
 * statusClasses variable. We're then returning a div element with the cssClasses variable as the
 * className. Inside the div element, we're returning an h2 element with the title property as the text
 * and a p element with the message property as the
 * @param props - This is the props object that is passed to the component.
 * @returns A div with a class of notification and a class of either success or error.
 */
function Notification(props) {

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
