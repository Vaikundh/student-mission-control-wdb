import logo from "../Components/logo.svg"

const Logo = (props: Object) => {
  return (
      <img {...props} src={logo}/>
  );
};

export default Logo;
