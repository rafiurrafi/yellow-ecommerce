import { createContext, useState } from "react";

export const HeaderContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => false,
});
const HeaderMenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const value = { isMenuOpen, setIsMenuOpen };
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export default HeaderMenuProvider;
