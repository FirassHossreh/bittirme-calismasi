import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobPostService } from "../services/job-posts/get-job-post-service";
export default function CareerApplication() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function getJobPost() {
      const response = await getJobPostService(id);
      setJob(response);
    }
    getJobPost();
  }, [id]);

  if (!job) return <div>Yükleniyor...</div>;
  return (
    <>
      <h1 className="bg-[#007BFF] w-3/4 mx-auto my-10 rounded p-4 text-white">
        <span className="font-bold mx-1">{job.jobTitle}</span> pozisyona bu
        e-posta adresi
        <span className="font-bold mx-1">firass.hus@gmail.com</span>üzerinden
        başvuru yapacağınız bilgilerinize sunulur.
      </h1>
    </>
  );
}
