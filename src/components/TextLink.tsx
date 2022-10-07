export default function TextLink ({url, text = url} : {url?:string, text?:string}) {
    return <a className="underline" href={url}>{text}</a>
}