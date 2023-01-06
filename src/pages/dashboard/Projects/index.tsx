import {useState} from "react";
import DashboardLayout from "../../../templates/DashboardLayout";
import ProgressBar from "../../../atoms/ProgressBar";
import Chip from "../../../atoms/Chip";
import AvatarsWrap from "../../../atoms/AvatarsWrap";
import PlusIcon from "../../../atoms/vectors/PlusIcon";
import {useNavigate} from "react-router-dom";
import "./style.scss";
import Button from "../../../atoms/forms/Button";
import ClockIcon from "../../../atoms/vectors/ClockIcon";
import {Column} from "./Column";
import CaretRightIcon from "../../../atoms/vectors/CaretRightIcon";
import GridListBtn from "../../../atoms/Button/GridListBtn";
import AddTaskModal from "./AddTaskModal";
import AddProjectModal from "./AddProjectModal";
import {
  DragDropContext,
  DragDropContextProps,
  DropResult,
} from "react-beautiful-dnd";
import {groupArrBy} from "../../../utils";
export type Task = {
  title: string;
  status: "backlog" | "inProgress" | "done" | string;
  users: string[];
  id: number;
  dueDate: string;
};

export const Tasks: Task[] = [
  {
    title: "[SMS] Design Login flow",
    status: "Backlog",
    id: 1,
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
  },
  {
    title: "[KOP] User Research with User Personas",
    status: "In Progress",
    id: 2,
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
  },
  {
    title: "Product Discovery",
    status: "Done",
    id: 3,
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
  },
  {
    title: "Implement Design UI",
    status: "Backlog",
    id: 4,
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
  },
];

export const projects = [
  {
    title: "Ahround",
    totalTasks: 50,
    completedTasks: 10,
    tags: ["Design", "Front-end", "Back-end"],
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
    id: 1,
  },
  {
    title: "Ahround",
    totalTasks: 50,
    completedTasks: 10,
    tags: ["Design", "Front-end", "Back-end"],
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
    id: 2,
  },
  {
    title: "OVest",
    totalTasks: 50,
    completedTasks: 10,
    tags: ["Design", "Front-end", "Back-end"],
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
    id: 3,
  },
  {
    title: "Law Parlance",
    totalTasks: 50,
    completedTasks: 0,
    tags: ["Design", "Front-end", "Back-end"],
    dueDate: "MARCH 10 2022",
    users: ["/images/humanAvatar.png", "/images/humanAvatar.png"],
    id: 4,
  },
];

export const COLORS = ["#F09330", "#3772FF", "#0D9E63"];
export const generateRandomNum = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Projects = () => {


  return (
    <DragDropContext>
      <DashboardLayout>
        <div className="lg:p-8 p-5 h-full overflow-y-auto">
          </div>
      </DashboardLayout>
    </DragDropContext>
  );
};

export default Projects;
