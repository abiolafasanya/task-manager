import { Fragment } from "react";

interface AlertProps {
  message: string;
  error?: boolean;
  success?: boolean;
}
const Alert = ({ message, error, success }: AlertProps) => {
  return (
    <Fragment>
      {error ? <div className="alert-error">{message}</div> : null}
      {success ? <div className="alert-success">{message}</div> : null}
    </Fragment>
  );
};

export default Alert;
