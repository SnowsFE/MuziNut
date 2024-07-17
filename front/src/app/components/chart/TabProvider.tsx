"use client";

import React, { createContext, useState, ReactNode } from "react";

interface TabContextType {
  tab: string;
  setTab: (tab: string) => void;
  url: string;
  setUrl: (url: string) => void;
}

export const TabContext = createContext<TabContextType>({
  tab: "one",
  setTab: () => {},
  url: "http://localhost:9999/Chart-new",
  setUrl: () => {},
});

export const TabProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tab, setTab] = useState<string>("one");
  const [url, setUrl] = useState<string>("http://localhost:9999/Chart-new");

  return (
    <TabContext.Provider value={{ tab, setTab, url, setUrl }}>
      {children} {/*  <MusicTab />, </TabProvider> */}
    </TabContext.Provider>
  );
};
