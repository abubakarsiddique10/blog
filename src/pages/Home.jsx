
import Blogs from "../components/Blog/Blogs";


export default function Home() {
    return (
        <div className="container">
            <div className="flex justify-between">
                <Blogs />
                <div>
                    <h1>This is right side</h1>
                </div>
            </div>
        </div>
    )
}
