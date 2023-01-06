import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { techniques } from "../../../data";
import DashboardLayout from "../../../templates/DashboardLayout";

const TechDetails = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("item");
  const [data, setData] = useState<any>(null);
  console.log(data);
  useEffect(() => {
    const arr = techniques.find((el) => el.name == search);
    setData(arr);
  }, [search]);

  return (
    <DashboardLayout>
      <main>
        {data ? (
          <div className="technique-container">
            <h1 className="header">Different Processes Involved in Dyeing</h1>
            <div className="immersion">
              <h2 className="head">{data.technique}:</h2>
              <p>
                {data.processBrief}
              </p>
              <p className="details">
                {data.detail}
              </p>

              <ul className="list-disc">
                {data.process.map((el:any) => (
                  <li>{el}</li>
                ))}
              </ul>
              <p>{data.conclusionBrief}</p>
            </div>
          </div>
        ) : (
          <>Loading</>
        )}
      </main>
    </DashboardLayout>
  );
};

export default TechDetails;
