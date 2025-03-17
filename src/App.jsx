
import './App.css'
import Navbar from './folder buatan/navbar';
import Banner from './folder buatan/banner';
import LogoIcons from './folder buatan/logoIcon';
import Card from './folder buatan/card';
import Banner1 from './folder buatan/banner1';
import TitleBanner from './folder buatan/titleBanner';
import Banner2 from './folder buatan/banner2';
import Description from './folder buatan/desciption';
import Footer from './folder buatan/footer';

function App() {

  return (
    <div className='w-full bg-gray-700 h-auto'>
      <Navbar />
      <Banner />
    <div>
      <h2 className='text-center text-2xl font-semibold text-white pt-15'>Our Clients</h2>
      <p className='text-center text-base font-normal text-white pb-6'>Keberhasilan dimulai dari langkah kecil yang konsisten</p>
    </div>
   <LogoIcons />
   <div>
    <h2 className='text-center text-2xl font-semibold text-white pt-10'>Manage your entire community in a single system</h2>
    <p className='text-center text-white text-base font-normal pb-6'>who is My Branding suitable for?</p>
   </div>
   <div className='w-full h-70 flex items-center justify-around'>
   <Card image="system-regular-23-calendar-hover-calendar.gif" title="Membership Organization" paraf="With supporting text below as a natural lead-in to additional content" />
   <Card image="system-regular-31-check-hover-check.gif" title="National Associations" paraf="With supporting text below as a natural lead-in to additional content" />
   <Card image="system-regular-76-newspaper-hover-newspaper.gif" title="Clubs And Groups" paraf="With supporting text below as a natural lead-in to additional content" />
   </div>
   <Banner1 />
   <TitleBanner />
   <Banner2 />
   <Description />
   <div className='w-full h-45 flex justify-center items-center bg-gray-600'>
   <div className='bg-gray-600 w-200'>
      <h2 className='text-center text-2xl font-semibold text-white'>Caring is the new marketing</h2>
      <p className='text-center text-base font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sapiente cumque, vel corrupti maiores at omnis aut eligendi facere recusandae, ratione quod doloribus quis aliquam, deserunt repudiandae? Consequuntur, labore? Maiores?</p>
    </div>
   </div>
   <div className='w-full h-70 flex items-center justify-around'>
   <Card image="system-regular-23-calendar-hover-calendar.gif" title="Membership Organization" paraf="With supporting text below as a natural lead-in to additional content" />
   <Card image="system-regular-31-check-hover-check.gif" title="National Associations" paraf="With supporting text below as a natural lead-in to additional content" />
   <Card image="system-regular-76-newspaper-hover-newspaper.gif" title="Clubs And Groups" paraf="With supporting text below as a natural lead-in to additional content" />
    </div>
    <div className=' w-full text-center pb-7'>
    <h2 className='text-2xl font-semibold text-white pt-10'>Manage your entire community in a single system</h2>
    <a href="#" className="mt-2 inline-block bg-red-500 text-white py-2 px-4 rounded 
             border border-transparent hover:border-white hover:bg-red-400 hover:text-black 
             transition duration-200 ml-7 mt-4">Go somewhere</a>
   </div>
   <Footer />
    </div>
  );
}

export default App;