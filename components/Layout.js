import React from 'react';
import SideNavbar from './SideNavbar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <SideNavbar />
      <main className="flex mr-4 mt-4 ml-4">{children}</main>
    </div>
  );
}
