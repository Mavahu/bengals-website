import React from 'react';
import SideNavbar from './SideNavbar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <SideNavbar />
      <main className="flex m-4 min-w-max">{children}</main>
    </div>
  );
}
