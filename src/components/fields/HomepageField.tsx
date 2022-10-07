import {useContext} from "react";
import {PackageManifest} from "query-registry/dist/types/package-manifest";
import TextLink from "../TextLink";
import LoadingField from "./LoadingField";
import ManifestContext from "../../ManifestContext";

export default function HomepageField() {
    const {isLoaded, manifest} = useContext(ManifestContext);

    const homepage: string = isLoaded ? (manifest as PackageManifest)['homepage'] as string : '';

    return (
        <LoadingField name={'homepage'} isLoaded={isLoaded}>
            {homepage
                ? <TextLink url={homepage} text={homepage} />
                : 'none'
            }
        </LoadingField>
    )
}