import {Fragment, useContext} from 'react'
import Dependency from "./Dependency";
import {PackageManifest} from "query-registry/dist/types/package-manifest";
import LoadingSpinner from "./LoadingSpinner";
import ManifestContext from "../ManifestContext";

export default function Dependencies({name}: { name: string }) {
    const {isLoaded, manifest} = useContext(ManifestContext);

    const dependencies: {} | undefined = isLoaded ? (manifest as PackageManifest)[name] as [] : undefined;
    const dependenciesNames: string[] | undefined = isLoaded ? dependencies ? Object.keys(dependencies as {}): undefined : undefined;

    return (
        <Fragment>
            <span className="font-bold">{name}:</span>&nbsp;
            {isLoaded
                ? dependencies && dependenciesNames && dependenciesNames.length
                    ? <ul className="ml-4">
                        {dependenciesNames.map((name) => {
                            const rangeVersion = (dependencies as {})[name as keyof typeof dependencies]

                            return <Dependency name={name} rangeVersion={rangeVersion}/>
                        })}
                    </ul>
                    : 'none'
                : <LoadingSpinner/>
            }
        </Fragment>
    )
}