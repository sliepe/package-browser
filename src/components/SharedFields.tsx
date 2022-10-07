import {Fragment} from 'react'
import RepositoryField from "./fields/RepositoryField";
import KeywordsField from "./fields/KeywordsField";
import TextField from "./fields/TextField";
import HomepageField from "./fields/HomepageField";
import NameField from "./fields/NameField";
import VersionField from './fields/VersionField';

export default function SharedFields() {
    return (
        <Fragment>
            <li className="">
                <NameField />
            </li>
            <li className="">
                <VersionField />
            </li>
            <li>
                <TextField name={'description'} />
            </li>
            <li>
                <HomepageField />
            </li>
            <li>
                <RepositoryField />
            </li>
            <li>
                <KeywordsField />
            </li>
        </Fragment>
    )
}