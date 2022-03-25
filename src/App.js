import './App.css';
import { Route, Routes } from "react-router-dom";

import HomePage from './page/homePage';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';
import BookingPage from './page/bookingPage';
import CareerPage from './page/careerPage';
import ClassroomPage from './page/classroomPage';
import ContactPage from './page/contactPage';
import NutritionPage from './page/nutritionPage';
import OperationInfoPage from './page/operationInfoPage';
import OurMissionPage from './page/ourMissionPage';
import ProgramPage from './page/programPage';
import StaffPage from './page/staffPage';
import PageNotFound from './page/notfoundPage'


function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/booking" element={<BookingPage />} />
        <Route exact path="/career" element={<CareerPage />} />
        <Route exact path="/classroom" element={<ClassroomPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/nutrition" element={<NutritionPage />} />
        <Route exact path="/hour" element={<OperationInfoPage />} />
        <Route exact path="/mission" element={<OurMissionPage />} />
        <Route exact path="/program" element={<ProgramPage />} />
        <Route exact path="/staff" element={<StaffPage />} />
        <Route path="/not-found" element={<PageNotFound />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
