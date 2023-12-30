import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div>
      {/* first part */}
      <div className="">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText /> Email for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Email Us for getting job opportunity every week !
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gamil.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-secondary rounded-sm text-white cursor-pointer"
          />
        </div>
      </div>

      {/* second part */}
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get noticed faster!
        </h3>
        <p className="text-primary/75 text-base mb-4">
         Upload your resume to our database right now to get noticed faster.
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-secondary rounded-sm text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
