import Dependencies from "./Dependencies";
import SharedFields from "./SharedFields";

export default function PackageFields() {
    return (
        <ul className="ml-4">
            <SharedFields/>
            <li>
                <Dependencies name={'dependencies'} />
            </li>
            <li>
                <Dependencies name={'devDependencies'} />
            </li>
            <li>
                <Dependencies name={'optionalDependencies'} />
            </li>
        </ul>
    )
}