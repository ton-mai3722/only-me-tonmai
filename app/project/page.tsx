import ChromaGrid from "@/components/ChromaGrid";
import ProfileCard from "@/src/component/ProfileCard";
import React from "react";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Emily Davis",
    subtitle: "UI/UX Designer",
    handle: "@emilydavis",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg, #8B5CF6, #000)",
    url: "https://dribbble.com/emilydavis",
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    title: "David Lee",
    subtitle: "Full Stack Developer",
    handle: "@davidlee",
    borderColor: "#EF4444",
    gradient: "linear-gradient(135deg, #EF4444, #000)",
    url: "",
  },
  {
    image: "https://i.pravatar.cc/300?img=5",
    title: "Sophia Martinez",
    subtitle: "Data Scientist",
    handle: "@sophiamartinez",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
    url: "https://kaggle.com/sophiamartinez",
  },
  {
    image: "https://i.pravatar.cc/300?img=6",
    title: "James Wilson",
    subtitle: "DevOps Engineer",
    handle: "@jameswilson",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(195deg, #06B6D4, #000)",
    url: "/me",
  },
];

const ProjectPage = () => {
  return (
    <div className="relative w-full h-[calc(100vh-60px)] flex items-center justify-center rounded-2xl">
      <ProfileCard />
    </div>
  );
};

export default ProjectPage;
