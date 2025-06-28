import HeaderForPages from "./../components/header-for-pages";
import CareerApplicationBox from "../Modals/career-application-box";
import { useEffect } from "react";
import { getJobPostsService } from "../services/job-posts/get-job-posts-service";
import { useState } from "react";

export default function Career() {
  const [jobPosts, setJobPosts] = useState([]);
  useEffect(() => {
    async function getJobPosts() {
      const jobPosts = await getJobPostsService();
      setJobPosts(jobPosts);
    }
    getJobPosts();
  }, []);
  return (
    <div className="min-h-screen">
      <HeaderForPages>
        <h1 className="text-white text-[2.5rem] p-5">
          Geleceği Birlikte Şekillendirelim
        </h1>
      </HeaderForPages>
      <br />
      {jobPosts.length > 0 ? (
        jobPosts.map((element, index) => {
          return (
            <div key={index}>
              <CareerApplicationBox jobPost={element} />
            </div>
          );
        })
      ) : (
        <h1 className="text-center text-[#007BFF] capitalize text-2xl">
          maalesef şunada bir iş ilanı yok
        </h1>
      )}
    </div>
  );
}
