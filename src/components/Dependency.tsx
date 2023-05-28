import React, {useMemo} from "react";
import SharedFields from "./SharedFields";
import * as semver from 'semver';
import useQueryRegistry from "../useQueryRegistry";
import ManifestContext from "../ManifestContext";

export default function Dependency({name, rangeVersion}: { name: string, rangeVersion: string | semver.Range }) {
    const versionToLoad = useMemo(function () {
        const semverValidRange = semver.validRange(rangeVersion)

        if (semverValidRange == '*' || semverValidRange == null) {
            return 'latest'
        }

        const semverMinVersion = semver.minVersion(semverValidRange);

        if (semverMinVersion) {
            const minVersionToLoad = semverMinVersion.version;

            const semverValid = semver.valid(minVersionToLoad);

            if (semverValid) {
                return semverValid
            } else {
                return 'latest'
            }
        } else {
            return 'latest'
        }
    }, [rangeVersion]);

    const manifestState = useQueryRegistry({name, versionToLoad});

    const internalUrl = '?name=' + name + '&version=' + versionToLoad;

    return (
        <li>
            <a className="underline" href={internalUrl}>{name + ': ' + rangeVersion}</a>
            <ul className="ml-4">
                <ManifestContext.Provider value={manifestState}>
                    <SharedFields/>
                </ManifestContext.Provider>
            </ul>
        </li>
    )
}