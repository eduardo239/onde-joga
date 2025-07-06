// src/components/TeamCard.tsx
import React from "react";

interface TeamCardProps {
  imageUrl: string;
  title: string;
  body: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imageUrl, title, body }) => {
  return (
    <div className="w-64 overflow-hidden bg-gray-50 border border-gray-200">
      <img className="w-full h-32 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{body}</p>
      </div>
    </div>
  );
};

export default TeamCard;
