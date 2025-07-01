import { useEffect } from "react";
import ChildApplicationCard from "../features/child-application/components/child-application-card";
import { getAllApplicationsService } from "../features/child-application/services/get-all-applications";
import { useState } from "react";

export default function ChildApplicationCards() {
  const [applications, setApplications] = useState([]);
  const [status, setStatus] = useState("");
  function handleStatus(status) {
    setStatus(status);
  }
  useEffect(() => {
    async function getAllApplications() {
      const result = await getAllApplicationsService();
      setApplications(result);
    }
    getAllApplications();
  }, [status]);
  return (
    <>
      {applications.map((element, index) => {
        return element.status === "rejected" ||
          element.status === "approved" ? (
          ""
        ) : (
          <div key={index}>
            <ChildApplicationCard
              application={element}
              handleStatus={handleStatus}
            />
          </div>
        );
      })}
    </>
  );
}
