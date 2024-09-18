import Link from "next/link"
import StudentInfo from "./student-info"

export default function Page() {
    return (
        <main className="m-6">
            <Link href="../">Go back...</Link>
            <div style={{ marginLeft: '30rem', marginTop: '10rem' }}>
                <h1 className="font-serif italic">Shopping List</h1>
                <StudentInfo />
            </div>
        </main>
    )
}
