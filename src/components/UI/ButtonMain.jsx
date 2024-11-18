/* eslint-disable react/prop-types */
const ButtonMain = ({ clsName, name }) => {
  return (
    <>
      <button className={`ButtonMain ${clsName ? clsName : ""}`}>{name}</button>
    </>
  );
};

export default ButtonMain;
