"use client";

import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const CollectionsPage = () => {
  const [collections, setCollections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();
        setCollections(data);
      } catch (err) {
        setError("Failed to fetch collections");
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return <p className="text-body-bold">Loading...</p>;
  }

  if (error) {
    return <p className="text-body-bold">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: any) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <a>
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="rounded-lg cursor-pointer"
                />
                <p className="text-body-bold">{collection.title}</p>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;