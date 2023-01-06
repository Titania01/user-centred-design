import React, { SyntheticEvent, useState } from "react";
import ProjectCard from "../../../atoms/ProjectCard";
import DashboardLayout from "../../../templates/DashboardLayout";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Source = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
        <div className="intro">Sources where natural dye can be gotten mainly include:</div>
      <div className="grid grid-cols-3 gap-8 p-16">
        <div className="card" onClick={() => navigate("/plant")}>
          <ProjectCard title="Plants" bgGreen />
        </div>
        <div className="card" onClick={() => navigate("/vegetable")}>
          <ProjectCard title="Vegetables" />
        </div>
        <div className="card" onClick={() => navigate("/fruit")}>
          <ProjectCard title="Fruits" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Source;
