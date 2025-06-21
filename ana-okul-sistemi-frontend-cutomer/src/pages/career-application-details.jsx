import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobPostService } from "../services/get-job-post";
import HeaderForPages from "../components/header-for-pages";
export default function CareerApplicationDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function getJobPost() {
      const response = await getJobPostService(id);
      setJob(response);
    }
    console.log(job);
    getJobPost();
  }, [id]);

  if (!job) return <div>Yükleniyor...</div>;

  return (
    <>
      <HeaderForPages>İş ilanı hakkında</HeaderForPages>
      <div className="bg-[rgba(70,69,69,0.3)] w-[70%] p-5 rounded my-5 mx-auto capitalize flex flex-wrap gap-10 ">
        <div className="flex gap-2 flex-wrap">
          <h1 className="text-[#007BFF] font-bold">kategori :</h1>
          <p className="text-white font-medium ">{job.category}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <h1 className="text-[#007BFF] font-bold">iş unvanı :</h1>
          <p className="text-white font-medium ">{job.jobTitle}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <h1 className="text-[#007BFF] font-bold">kounum :</h1>
          <p className="text-white font-medium">{job.location}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <h1 className="text-[#007BFF] font-bold">iş türü :</h1>
          <p className="text-white font-medium">{job.jobType}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <h1 className="text-[#007BFF] font-bold">deneyim seviyesi :</h1>
          <p className="text-white font-medium">{job.experienceLevel}</p>
        </div>
        <div className="flex gap-2 flex-wrap w-full ">
          <h1 className="text-[#007BFF] font-bold">açıklama :</h1>
          <p className="text-white font-medium">{job.description}</p>
        </div>
        <div className="flex gap-2 flex-wrap w-full ">
          <h1 className="text-[#007BFF] font-bold ">gereksinimler :</h1>
          {job.requirements.map((element, index) => {
            return (
              <p className="text-white font-medium" key={index}>
                {element}
                {index === job.requirements.length - 1 ? " ." : " ,"}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}
