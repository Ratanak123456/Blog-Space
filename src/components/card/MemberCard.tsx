import Link from "next/link";
import type { teamMembers } from "@/types/teamMembers";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function Members({ id, name, role, image, github }: teamMembers) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Fallback to initials if image fails to load
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  // Handle image loading errors
  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div
      key={id}
      className="bg-(--bg-secondary) rounded-lg p-6 hover:shadow-md transition duration-300 border border-(--border)"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          {!imageError ? (
            <>
              <Image
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full object-cover"
                width={64}
                height={64}
                onError={handleImageError}
                onLoad={handleImageLoad}
                priority={id <= 2} // Prioritize loading first few images
              />
              {imageLoading && (
                <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse flex items-center justify-center">
                  <span className="text-xs text-gray-500">Loading...</span>
                </div>
              )}
            </>
          ) : (
            <div className="w-16 h-16 bg-(--accent) rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {getInitials(name)}
              </span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-(--text-primary)">
            {name}
          </h3>
          <p className="text-(--text-secondary) text-sm mb-2">
            {role}
          </p>
          <div className="flex space-x-3">
            <Link
              href={github}
              className="text-(--text-secondary) hover:text-(--accent) transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}