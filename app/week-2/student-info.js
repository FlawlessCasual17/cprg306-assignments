import Link from "next/link"

let link = 'https://github.com/FlawlessCasual17/cprg306-assignments'

export default function StudentInfo() {
    return <div>
        <br/>
        <h2>Kris Schneider&apos;s page</h2>
        <p><Link href={link} target="_blank">GitHub repository link</Link></p>
    </div>
}
