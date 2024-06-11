"use client";

import { createContext, ReactNode, useState } from "react";

export const TabContext = createContext( {
    tab: 'one',
    setTab: (value: 'one' | 'two' | 'three')  => {},
})

type Props = {children: ReactNode}

export default function TabProvider({children}: Props) {
    const [tab, setTab] =useState<'one' | 'two' | 'three' >('one');
    return (
        <TabContext.Provider value={{tab, setTab}}>
            {children}
        </TabContext.Provider>
    )
}