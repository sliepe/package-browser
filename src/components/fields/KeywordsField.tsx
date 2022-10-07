import {Fragment, useContext} from "react";
import {PackageManifest} from "query-registry/dist/types/package-manifest";
import LoadingField from "./LoadingField";
import TextLink from "../TextLink";
import ManifestContext from "../../ManifestContext";

export default function KeywordsField() {
    const {isLoaded, manifest} = useContext(ManifestContext);

    const keywords: string[] | undefined = isLoaded ? (manifest as PackageManifest)['keywords'] as string[] : undefined;

    return (
        <LoadingField name={"keywords"} isLoaded={isLoaded}>
            {keywords
                ? (keywords.map((value, index) => {
                    return (
                        <Fragment>
                            {index > 0 && ', '}
                            <TextLink url={'https://www.npmjs.com/search?q=keywords:' + value} text={value}/>
                        </Fragment>
                    )
                })) : 'none'
            }
        </LoadingField>
    )
}