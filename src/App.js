import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import { Stack, VStack } from '@chakra-ui/react';
import Header1 from './Components/header/Header1';
import Volunteers from './Components/section1/Volunteers';
import Footer from './Components/footer/Footer';
import Footer1 from './Components/footer/Footer1';
import CareerSupport from './Components/section2/CareerSupport';
import TrustOrganistation from './Components/section4/TrustOrganistation';
import GetStarted from './Components/section5/GetStarted';
import OrganizationCateogry from './Components/section6/OrganizationCateogry';
import Recuritor from './Components/section7/Recuritor';
import ShareExperience from './Components/section3/ShareExperience';
import PrpmoOrganization from './Components/section8/PrpmoOrganization';
import Talent from './Components/section9/Talent';



function App() {
  return (
   <>
  <Stack direction={'column'}>
   <Header/>
   <Header1 />
   <Volunteers />
  <CareerSupport/>
  <ShareExperience />
  <Recuritor />
  <TrustOrganistation/>
  <GetStarted />
  <OrganizationCateogry />
  <PrpmoOrganization />
  <Talent />
  
   <Footer1 />
   <Footer/>
   </Stack>
  

   </>
  );
}

export default App;
