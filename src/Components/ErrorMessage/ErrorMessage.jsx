import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.errorMsg}>
      <p>Whoops, something went wrong! Please try reloading this page later!</p>
    </div>
  );
};

export default ErrorMessage;
