import { ReactComponent as Logo } from '@assets/logo.svg'
import {SvgIcon} from "@mui/material";

export default function SvgIconTest() {
        return (
            <SvgIcon component={Logo}/>
        )
    }

// https://stackoverflow.com/questions/77284472/importing-svg-as-reactcomponent-in-vite-ambiguous-indirect-export-reactcompon
