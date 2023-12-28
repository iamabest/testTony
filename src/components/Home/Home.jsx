
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeLayout from "../HomeLayout/HomeLayout";

function Home() {
  return (
    <div>
   <HomeLayout>
     <Banner />
     <HomeAbout/>
     <Contact/>
   </HomeLayout>
     
    </div>
  );
}

export default Home;
