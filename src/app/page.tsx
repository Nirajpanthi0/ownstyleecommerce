
import Navbar from "./Navbar/navbar";
import HeroPage from "./imageslider/page";
import Categories from "./Category/page";
import Component from "./Fellbeforeyoubuy/card";
import Productcard from "./Products/product-grid";
import Findus from "./findus/gift-expert-section";
import FooterPage from "./Footer/page";

export default function Home() {
  return (
   <>
    <Navbar></Navbar>
  <HeroPage></HeroPage>
  <Categories></Categories>
  <Component></Component>
  <Productcard></Productcard>
 <Findus></Findus>
 <FooterPage></FooterPage>
   </>
  );
}
