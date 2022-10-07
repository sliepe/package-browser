import {Fragment} from "react";
import LoadingSpinner from "../LoadingSpinner";

export default function LinkField({name, anchorUrl, anchorText, isLoaded}: { name: string, anchorUrl?: string | undefined, anchorText?: string | undefined, isLoaded: boolean }) {
    return (
        <Fragment>
            <span className="font-bold">{name}:</span>
            &nbsp;
            {isLoaded
                ? <a className="underline" href={anchorUrl}>{anchorText ? anchorText : anchorUrl}</a>
                : <LoadingSpinner/>
            }
        </Fragment>
    )
}