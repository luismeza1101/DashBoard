import { createContext, ReactNode, useState } from "react";
import { Overview, OverviewToday } from "../types";
import data from '../data/data.json'

interface DashboardData {
    dataCarApp: Overview[],
    setDataCardApp: (newData: Overview[]) => void
    overviewApp: OverviewToday[]
    setOverviewApp: (newOverview: OverviewToday[]) => void
}

export const DashBoardContext = createContext< DashboardData | undefined>(undefined)

export const DashBoardProvider: React.FC<{children: ReactNode}> = ({children}) => {

    const [dataCarApp, setDataCardApp] = useState<Overview[]>(data.overview as Overview[])
    const [overviewApp, setOverviewApp] = useState<OverviewToday[]>(data.overviewToday as OverviewToday[])


    return (
        <DashBoardContext.Provider value={{dataCarApp, setDataCardApp, overviewApp, setOverviewApp}}>
            {children}
        </DashBoardContext.Provider>
    )
}