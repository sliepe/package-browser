import {Fragment} from 'react'
import {useSearchParams} from "react-router-dom";
import PackageFields from "./PackageFields";
import useQueryRegistry from "../useQueryRegistry";
import ManifestContext from '../ManifestContext';

export default function Package({}) {
    const [searchParams] = useSearchParams();

    const name = searchParams.get('name') as string;
    const versionToLoad = searchParams.get('version') || 'latest'

    const manifestState = useQueryRegistry({name, versionToLoad});

    return (
        <Fragment>
            <h1>
                <span className="font-bold">Package</span> ({name + '@' + versionToLoad})
            </h1>
            <ManifestContext.Provider value={manifestState}>
                <PackageFields />
            </ManifestContext.Provider>
        </Fragment>
    )
}