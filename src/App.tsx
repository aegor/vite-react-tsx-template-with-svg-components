import {Route, Routes} from 'react-router-dom'
import DashboardLayoutNavigationActions from "./Drawer/DashboardLayoutNavigationActions.tsx";
import DashboardLayoutBasic  from "./Drawer/DashboardLayoutBasic.tsx";
import DashboardLayoutSlots  from "./Drawer/DashboardLayoutSlots.tsx";
import DashboardLayoutPattern  from "./Drawer/DashboardLayoutPattern.tsx";
import DashboardLayoutBranding  from "./Drawer/DashboardLayoutBranding.tsx";
import DashboardLayoutNavigationDividers  from "./Drawer/DashboardLayoutNavigationDividers.tsx";
import SvgIconTest  from "./Svg/IconTest.tsx";

export default function App() {
    return (
            <Routes>
                <Route path="/1" element={<DashboardLayoutNavigationActions/>} />
                <Route path="/2" element={<DashboardLayoutBasic/>}/>
                <Route path="/3" element={<DashboardLayoutSlots/>}/>
                <Route path="/4" element={<DashboardLayoutPattern/>}/>
                <Route path="/5" element={<DashboardLayoutBranding/>}/>
                <Route path="/6" element={<DashboardLayoutNavigationDividers/>}/>
                <Route path="/7" element={<SvgIconTest/>}/>
            </Routes>
    )
}
