import React from 'react'
import Sidebar from "@/components/Sidebar";

function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}

export default SidebarLayout
