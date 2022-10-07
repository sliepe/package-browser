import {Fragment} from 'react'

export default function PackageDescription({text}: { text: string | undefined }) {
    return (
        <Fragment>
            <span className="font-bold">description:</span> &nbsp;
            <span>{text}</span>
        </Fragment>
    )
}