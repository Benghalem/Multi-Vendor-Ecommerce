import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="flex-min-h-screen flex-row">{children}</div>;
};

export default Layout;
