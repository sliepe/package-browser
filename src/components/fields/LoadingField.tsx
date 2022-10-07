import {Fragment, ReactNode, useContext} from "react";
import LoadingSpinner from "../LoadingSpinner";

export default function LoadingField({name, isLoaded, children}: { name: string, isLoaded: boolean, children: ReactNode | ReactNode[] }) {
    // const {isLoaded, manifest} = useContext(ManifestContext);

    return (
        <Fragment>
            <span className="font-bold">{name}:</span>&nbsp;
            {isLoaded
                ? children
                : <LoadingSpinner/>
            }
        </Fragment>
    )
}

