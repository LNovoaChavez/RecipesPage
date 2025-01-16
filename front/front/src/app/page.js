import ContactInfo from "@/components/home/ContactInfo";
import HomeContainer from "@/components/home/homeContainer";
import HomeRecipes from "@/components/home/HomeRecipes";
import Nosotros from "@/components/nosotros";

 
export default function Home() {
  return (
    <div>
      <HomeContainer/>
      <Nosotros/>
      <HomeRecipes/>
      <ContactInfo/>
    </div>
  );
}
