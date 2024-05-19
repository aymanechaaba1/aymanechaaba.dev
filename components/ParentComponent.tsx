import React from 'react';
import Services from './Services';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

function ParentComponent() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
        <Services />
        <Testimonials />
      </div>

      <ContactForm />
    </div>
  );
}

export default ParentComponent;
