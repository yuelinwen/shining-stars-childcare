import './App.css';
import { Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTap';
import HomePage from './page/home-page';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';
import BookingPage from './page/bookingPage';
import CareerPage from './page/careerPage';
import ClassroomPage from './page/classroomPage';
import ContactPage from './page/contactPage';
import NutritionPage from './page/postPage/nutritionPage';
import OperationInfoPage from './page/postPage/operationInfoPage';
import OurMissionPage from './page/postPage/missionPage';
import StaffPage from './page/postPage/staffPage';
import PageNotFound from './page/notfoundPage'
import ToddlerPage from './page/postPage/toddlerPage';
import JkskPage from './page/postPage/jkskPage';
import PreSchoolPage from './page/postPage/preschoolPage';


function App() {
  return (
    <>
      <NavbarComponent />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/booking" element={<BookingPage />} />
          <Route exact path="/career" element={<CareerPage />} />
          <Route exact path="/classroom" element={<ClassroomPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/nutrition" element={<NutritionPage />} />
          <Route exact path="/hour" element={<OperationInfoPage />} />
          <Route exact path="/mission" element={<OurMissionPage />} />
          <Route exact path="/toddler-program" element={<ToddlerPage />} />
          <Route exact path="/junior-senior-kid-program" element={<JkskPage />} />
          <Route exact path="/preschool-program" element={<PreSchoolPage />} />
          <Route exact path="/staff" element={<StaffPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollToTop>
      <FooterComponent />
    </>
  );
}

export default App;
