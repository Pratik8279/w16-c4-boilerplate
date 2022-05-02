import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link to ="/">Home</Link>
      <Link to ="/about">About</Link>
      <Link to ="/products">Products</Link>
      <Link to ="/men">Men</Link>
      <Link to ="/women">Women</Link>
      <Link to ="/kids">Kids</Link>
      <Link to ="/homedecor">Home decor</Link>
    </nav>
  );
};
