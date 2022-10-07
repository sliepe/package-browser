import {useEffect, useState} from "react";
import ManifestState from "./ManifestState";
import {getPackageManifest} from "query-registry";

export default function useQueryRegistry({name, versionToLoad}: { name: string, versionToLoad: string }) {
    const [manifestState, setManifestState] = useState<ManifestState>({
        isLoaded: false
    });

    useEffect(function () {
        getPackageManifest({name: name, version: versionToLoad}).then(value => {
            setManifestState({
                isLoaded: true,
                manifest: value
            });
        })
    }, [versionToLoad])

    return manifestState
}