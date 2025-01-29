import React from "react";

interface AlbumCoverProps {
  title: string;
  imageUrl: string;
}

const AlbumCover = ({ title, imageUrl }: AlbumCoverProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-serif text-2xl lg:text-5xl mb-4">{title}</h2>
      <div className="min-h-[300px] min-w-[300px]">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover rounded-[4px]"
        />
      </div>
    </div>
  );
};

export default AlbumCover;
