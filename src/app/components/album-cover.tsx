import React from "react";

interface AlbumCoverProps {
  title: string;
  imageUrl: string;
}

const AlbumCover = ({ title, imageUrl }: AlbumCoverProps) => {
  return (
    <div className="flex flex-col ">
      <h2 className="font-serif text-4xl mb-3">{title}</h2>
      <div className="min-h-[300px] min-w-[300px]">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AlbumCover;
