const ConfirmButton = ({ children, message }: any) => {
  function onClick() {
    if (window.confirm(message)) return;
    else return false;
  }
  return <div onClick={onClick}>{children}</div>;
};

export default ConfirmButton