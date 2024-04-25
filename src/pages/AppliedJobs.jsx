import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function AppliedJobs() {
    const allJobs = useLoaderData();
    const getAppliedJobsId = localStorage.getItem('appliedJobs');
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        if (getAppliedJobsId) {
            try {
                const parsedJobs = JSON.parse(getAppliedJobsId);
                setAppliedJobs(parsedJobs);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
    }, [getAppliedJobsId]);

    const filteredJobs = allJobs.filter((job) => appliedJobs.includes(job.id));

    return (
        <section>
            <div className="container">
                <h1>Applied Jobs: {filteredJobs.length}</h1>
            </div>
        </section>
    );
}
