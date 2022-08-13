import HeaderTop from "../../components/header-top/header-top.component";
import Header from "../../components/header/header.component";
import Subscription from "../../components/subscription/subscribe.component";
import Footer from "../../components/footer/footer.component";
import { Outlet } from "react-router-dom";
import MenuModal from "../../components/menu-modal/menu-modal.component";
import { useState } from "react";
const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (openMenu) => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="layout">
      <HeaderTop />
      <Header onOpenMenu={handleOpenMenu} />
      <Outlet />
      <Subscription />
      <Footer />
      <MenuModal isActive={openMenu} />
    </div>
  );
};

export default Layout;
