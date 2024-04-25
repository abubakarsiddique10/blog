import { Link, json } from "react-router-dom";
import authorImgLocal from "../../assets/images/author/author.png";
import blogImgLocal from "../../assets/images/blog/blog.webp";
import { Result } from "postcss";

export default function Blog({ blog }) {
    const {
        id,
        title,
        author,
        authorImg,
        publicationDate,
        readingTime,
        content,
        tags,
        blogImg
    } = blog;

    const getAppliedJobs = () => {
        try {
            const jobsJson = localStorage.getItem('appliedJobs');
            return jobsJson ? JSON.parse(jobsJson) : []
        } catch (error) {
            console.log(error);

        }
    }
    const handleSaveId = (id) => {
        const appliedJobs = getAppliedJobs();
        if (!appliedJobs.includes(id)) {
            const newAppliedJobs = [...appliedJobs, id];
            localStorage.setItem('appliedJobs', JSON.stringify(newAppliedJobs))
        } else {
            console.warn('ID already exists in applied jobs:', id)
        }
    }

    return (
        <div className="w-full max-w-[728px]">
            <article className="py-6 border-b">
                <div className="flex items-center text-sm text-[#242424]">
                    <div className="w-6 h-6 mr-2">
                        <img className="w-full h-full rounded-full" src={authorImgLocal} alt="" />
                    </div>
                    <p>{author}</p>
                    <p>
                        <span className="mx-1 inline-block">-</span>
                        <span>{publicationDate}</span>
                    </p>
                </div>

                <div className="flex items-center mt-3">
                    <a href="#">
                        <h2 className="text-xl font-extrabold pb-2">{title}</h2>
                        <p className="text-[#242424] text-sm">{content.length > 200 ? content.slice(0, 200) + "..." : content}</p>
                    </a>
                    <div className="w-full max-w-28 h-28 ml-14">
                        <img className="w-full h-full object-cover" src={blogImgLocal} alt="" />
                    </div>
                </div>

                <div className="flex items-center justify-between mt-8 text-xs">
                    <div className="flex items-center space-x-8">
                        <div>
                            {tags.map((tag, idx) => <a key={idx} href="#" className="px-2 py-1 rounded-full bg-[#F2F2F2]">{tag}</a>)}
                        </div>
                        <p>{readingTime}</p>
                    </div>
                    <button onClick={() => handleSaveId(id)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="nu"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>
                    </button>
                </div>
            </article>
        </div>
    )
}