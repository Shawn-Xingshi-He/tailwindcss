import React from "react";

import anisha from "../img/avatar-anisha.png";
import ali from "../img/avatar-ali.png";
import richard from "../img/avatar-richard.png";

function Testimonials() {
  const avatars = {
    "Anisha Li": [
      anisha,
      "Manage supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    ],
    "Ali Bravo": [
      ali,
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    ],
    "Richard Watts": [
      richard,
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    ],
  };

  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 ">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage
        </h2>
        <div className="flex flex-col mt-24 space-y-12 md:flex-row md:space-x-6 md:space-y-0">
          {Object.keys(avatars).map((key) => (
            <div
              key={key}
              className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
            >
              <img src={avatars[key][0]} alt="" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">{key}</h5>
              <p className="text-sm text-darkGrayishBlue">{avatars[key][1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
