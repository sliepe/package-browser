import {PackageManifest} from "query-registry/dist/types/package-manifest";

export default interface ManifestState {
    isLoaded: boolean
    manifest?: PackageManifest
}