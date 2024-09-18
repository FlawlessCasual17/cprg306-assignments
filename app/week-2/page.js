import Link from "next/link"
import StudentInfo from "./student-info"

export default function Page() {
    return (
        <main className="m-6" style={{ marginLeft: '30rem', marginTop: '10rem' }}>
            <Link href="../" >Go back...</Link>
            <h1>Shopping List</h1>
            <StudentInfo />
        </main>
    )
}
