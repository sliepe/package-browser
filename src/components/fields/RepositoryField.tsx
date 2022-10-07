import {PackageManifest} from "query-registry/dist/types/package-manifest";
import {Repository} from "query-registry/src/types/repository";
import {Fragment, useContext} from "react";
import LoadingField from "./LoadingField";
import TextLink from "../TextLink";
import ManifestContext from "../../ManifestContext";

export default function RepositoryField() {
    const {isLoaded, manifest} = useContext(ManifestContext);

    const repository: Repository | undefined = isLoaded ? (manifest as PackageManifest)['repository'] as Repository : undefined;

    let repositoryUrl;
    let repositoryDirectory;

    if (repository) {
        if (repository.url) {
            repositoryUrl = repository.url;

            // - Fix query-registry`s return value of Repository.url ('git+https://github.com' and so on)
            // - Remove all until first occurence of github.com
            repositoryUrl = repositoryUrl.replace(/.*?(?=github.com)/, 'https://')
        }

        if (repository.directory) {
            repositoryDirectory = repository.directory;
        }
    }

    return (
        <LoadingField name={'repository'} isLoaded={isLoaded}>
            {repositoryUrl
                ? <Fragment>
                    <TextLink url={repositoryUrl}/>&nbsp;
                    {repositoryDirectory
                        ? <span>{repositoryDirectory && ('(' + repositoryDirectory + ')')}</span>
                        : ''
                    }
                </Fragment>
                : 'none'
            }
        </LoadingField>
    )
}