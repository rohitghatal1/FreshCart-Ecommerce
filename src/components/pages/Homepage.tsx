import React from "react";

const Homepage: React.FC = () => {
  return (
    <>
      <div>
        <h2>Products available</h2>
        <div className="flex items-center justify-between gap-2 p-4">
          <div className="border w-60 rounded-md p-3"></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
