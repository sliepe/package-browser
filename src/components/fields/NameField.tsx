import {Fragment, useContext} from "react";
import TextLink from "../TextLink";
import LoadingField from "./LoadingField";
import ManifestContext from "../../ManifestContext";

export default function NameField() {
    const {isLoaded, manifest} = useContext(ManifestContext);

    const name: string | undefined = isLoaded ? manifest && manifest['name'] : undefined
    const packageUrl: string | undefined = name ? 'https://www.npmjs.com/package/' + name : undefined

    return (
        <LoadingField name={'name'} isLoaded={isLoaded}>
            {isLoaded
                ? name
                    ? <Fragment>
                        <span>{name}</span>&nbsp;(<TextLink url={packageUrl} text={packageUrl}/>)
                    </Fragment>
                    : 'none'
                : undefined
            }
        </LoadingField>
    )
}