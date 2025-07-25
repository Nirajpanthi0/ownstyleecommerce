
import Navbar from "./Navbar/navbar";
import ImageSlider from "./imageslider/image-slider";
import Categories from "./Category/page";
import Component from "./Fellbeforeyoubuy/card";
import Productcard from "./Products/product-grid";
import Findus from "./findus/gift-expert-section";
import FooterPage from "./Footer/page";

export default function Home() {
  return (
   <>
    <Navbar></Navbar>
  <ImageSlider></ImageSlider>
  <Categories></Categories>
  <Component></Component>
  <Productcard></Productcard>
 <Findus></Findus>
 <FooterPage></FooterPage>
   </>
  );
}
