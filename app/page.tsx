import React from 'react';
import Home from '@/components/sections/home/home';
import AboutMe from '@/components/sections/about-me/about-me';
import ExperienceAndEducation from '@/components/sections/experience-and-education/experience-and-education';
import ContactMe from '@/components/sections/contact-me/contact-me';

export default function Page() {
  return (
    <>
      <Home />
      <AboutMe />
      <ExperienceAndEducation />
      <ContactMe />
    </>
  );
}
