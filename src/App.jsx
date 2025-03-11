
import './App.css'
import Navbar from './folder buatan/navbar';
import Banner from './folder buatan/banner';
import LogoIcons from './folder buatan/logoIcon';
import Card from './folder buatan/card';

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
    </div>
  );
}

export default App;