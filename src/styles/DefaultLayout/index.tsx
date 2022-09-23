import { Header } from "../../Components/Header";
import { LayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";
import { Footer } from "../../Components/Footer";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
      <Footer />
    </LayoutContainer>
  );
}
