import React from 'react';
import './Courses.css';
import Header from '../../Components/Header/Header';
import AllCourses from '../../Components/AllCourses/AllCourses';
import Footer from '../../Components/Footer/Footer';

export default function Courses() {
  return (
    <div className="courses__page">
      <Header />
      <AllCourses />
      <Footer />
    </div>
  );
}
