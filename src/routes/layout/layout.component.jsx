import HeaderTop from "../../components/header-top/header-top.component";
import Header from "../../components/header/header.component";
import Subscription from "../../components/subscription/subscribe.component";
import Footer from "../../components/footer/footer.component";
import { Outlet } from "react-router-dom";
import MenuModal from "../../components/menu-modal/menu-modal.component";
import { useState } from "react";
const Layout = () => {
  return (
    <div className="layout">
      <HeaderTop />
      <Header />
      <Outlet />
      <Subscription />
      <Footer />
      <MenuModal />
    </div>
  );
};

export default Layout;
