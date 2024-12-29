import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-semiLight text-gray py-6 dark:bg-gray dark:text-light border-t dark:border-lightGray">
      <div className="max-w-4xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">Ridho's Portfolio.</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
