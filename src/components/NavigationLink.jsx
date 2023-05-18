import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, children }) => {
  return (
    <div className="font-bold text-xl">
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default NavigationLink;
