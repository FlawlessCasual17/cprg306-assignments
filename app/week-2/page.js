import Link from "next/link"
import StudentInfo from "./student-info"

export default function Page() {
    return <main className="m-6">
        <p><Link href="../" >Go back...</Link> </p>
        <h1>Shopping List</h1>
        <StudentInfo />
    </main>
}
