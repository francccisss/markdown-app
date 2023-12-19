import React from "react";

const ErrorPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      id="error-page-layout"
      className="grid place-items-center min-h-screen flex-1 mx-10 @container"
    >
      <div id="error-page-children-container">{children}</div>
    </section>
  );
};

export default ErrorPageLayout;
