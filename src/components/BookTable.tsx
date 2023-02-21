import React from "react";

const BookTable = () => {
  return (
    <div className="bg-black font-open-sans grid md:grid-cols-2 pb-24 items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.1226882781543!2d-117.2501762872243!3d33.193791093761654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc741dfe4e3823%3A0xedc176948d6f6a93!2s465%20Hacienda%20Dr%2C%20Vista%2C%20CA%2092081!5e0!3m2!1sen!2sus!4v1676949469043!5m2!1sen!2sus"
        className="border-0 w-full h-[450px] invert-[90%] hue-rotate-180"
        loading="lazy"
      ></iframe>
      <div className="text-white p-12 ">
        <h3 className="text-2xl mb-6">Book a Table</h3>
        <form action="" className="grid grid-cols-6 grid-rows-3 gap-4">
          <input
            type="text"
            name="firstname"
            className="px-2 py-4 bg-black col-span-3 border-b"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            className="px-2 py-4 border-b bg-black col-span-3"
            placeholder="Last Name"
          />
          <input
            type="date"
            name="date"
            className="px-2 py-4 border-b bg-black col-span-2"
            placeholder="Date"
          />
          <input
            type="time"
            className="px-2 py-4 border-b bg-black col-span-2"
            name="time"
            placeholder="Time"
          />
          <input
            type="tel"
            className="px-2 py-4 border-b bg-black col-span-2"
            name="phone"
            placeholder="Phone"
          />
          <input
            type="text"
            className="px-2 py-4 border-b bg-black col-span-3"
            name="message"
            placeholder="Message"
          />
          <button
            type="submit"
            className="ease-in duration-100 bg-amber-900 col-span-3 hover:bg-black border-amber-900 border "
          >
            Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
