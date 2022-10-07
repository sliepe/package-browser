import {Fragment, useContext} from "react";
import LoadingSpinner from "../LoadingSpinner";
import {PackageManifest} from "query-registry/dist/types/package-manifest";
import ManifestContext from "../../ManifestContext";

export default function TextField({name}: { name: string }) {
    const {isLoaded, manifest} = useContext(ManifestContext);

    const text: string = isLoaded ? (manifest as PackageManifest)[name] as string : '';

    return (
        <Fragment>
            <span className="font-bold">{name}:</span>
            &nbsp;
            {isLoaded
                ? text
                    ? <span>{text}</span>
                    : 'none'
                : <LoadingSpinner/>
            }
        </Fragment>
    )
}