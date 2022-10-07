import {Fragment, useContext} from "react";
import TextLink from "../TextLink";
import LoadingField from "./LoadingField";
import ManifestContext from "../../ManifestContext";

export default function VersionField() {
    const {isLoaded, manifest} = useContext(ManifestContext);

    const version: string | undefined = isLoaded ? manifest && manifest['version'] : undefined
    const name: string | undefined = isLoaded ? manifest && manifest['name'] : undefined
    const packageUrl: string | undefined = version ? 'https://www.npmjs.com/package/' + name + '/v/' + version : undefined

    return (
        <LoadingField name={'version'} isLoaded={isLoaded}>
            {isLoaded
                ? version
                    ? <Fragment>
                        <span>{version}</span>&nbsp;(<TextLink url={packageUrl} text={packageUrl}/>)
                    </Fragment>
                    : 'none'
                : undefined
            }
        </LoadingField>
    )
}