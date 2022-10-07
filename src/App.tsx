import {Fragment} from 'react'
import Package from "./components/Package";

export default function App() {
    return (
        <Fragment>
            <h1 className="text-xl font-bold underline hidden">
                Package Browser
            </h1>
            <div className="ml-4 mt-4 mb-4">
                <Package/>
            </div>
        </Fragment>
    )
}