"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import userImage from "../../public/user.png";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  // DialogDescription,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface Rapper {
  id: number;
  aka: string;
  realName: string | null;
  country: string;
  city?: string | null; // Added optional city property
  dateOfBirth?: string | null; // Added optional dateOfBirth property
  group: boolean;
  members: string[] | null;
  spotifyId?: string; // Added optional spotifyId property
}

function RapperCard({
  rapper,
  onSelect,
}: {
  rapper: Rapper;
  onSelect: (rapper: Rapper) => void;
}) {
  return (
    <Card
      className="relative bg-card text-card-foreground shadow-md rounded-md hover:shadow-lg transition-shadow duration-200 cursor-pointer flex flex-col"
      onClick={() => onSelect(rapper)}
    >
      <div className="absolute top-2 left-2 bg-secondary/40  p-4 rounded-md shadow-md">
        {rapper.id}
      </div>
      <CardContent className="flex flex-col items-center justify-start h-2/3 p-0">
        <Image
          src={userImage} // Dummy image URL
          alt={rapper.aka}
          className="w-full h-full object-cover overflow-hidden rounded-t-md"
          priority={true} // {false} | {true}
          width={200}
          height={200}
        />
      </CardContent>
      <CardHeader className="p-2 flex flex-col items-center">
        <CardTitle className="text-center mt-4">{rapper.aka}</CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          {rapper.country}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function RapperModal({
  rapper,
  onClose,
}: {
  rapper: Rapper | null;
  onClose: () => void;
}) {
  if (!rapper) return null;

  return (
    <Dialog open={!!rapper} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background text-foreground rounded-md shadow-md">
        <DialogHeader>
          <DialogTitle>{rapper.aka}</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm text-center">
            Learn more about {rapper.aka}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={userImage} //`} // Dummy image URL
            alt={rapper.aka}
            className="rounded-full w-32 h-32 object-cover mb-4"
            width={128}
            height={128}
            priority={true} // {false} | {true}
            onClick={() => onClose()}
          />
          <div className="text-sm text-muted-foreground">
            {rapper.realName ? (
              <p>
                <span className="font-semibold ">Real Name:</span>{" "}
                {rapper.realName}.
              </p>
            ) : (
              <></>
            )}

            <p>
              <span className="font-semibold ">Country:</span> {rapper.country}.
            </p>
            {rapper.group ? (
              <div>
                <p>
                  <span className="font-semibold">Group Members:</span>{" "}
                </p>
                {rapper.members && (
                  <ul>
                    {rapper.members &&
                      rapper.members.map((member) => (
                        <li
                          key={member.trim()}
                          className="list-disc marker:text-gray-400"
                        >
                          {member.trim()}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ) : (
              <></>
            )}
            {rapper.dateOfBirth ? (
              <p>
                <span className="font-semibold">Date of Birth: </span>
                {rapper.dateOfBirth
                  ? new Date(rapper.dateOfBirth).toLocaleDateString("es-ES")
                  : "N/A"}
                .
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="w-[100%] mt-8 ">
            <iframe
              style={{ borderRadius: "12px" }}
              src={`https://open.spotify.com/embed/artist/${rapper.spotifyId}?utm_source=generator&theme=0`}
              width="100%"
              height="362"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
        
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  const [rappersData, setRappersData] = useState<Rapper[]>([]);

  useEffect(() => {
    fetch("/data/rappersData.json")
      .then((response) => response.json())
      .then((data) => setRappersData(data));
  }, []);

  const uniqueCountries = Array.from(
    new Set(rappersData.map((rapper) => rapper.country))
  ).sort((a, b) => a.localeCompare(b));

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRapper, setSelectedRapper] = useState<Rapper | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null); // New state
  const filteredRappers = rappersData.filter((rapper: Rapper) => {
    const matchesSearch = rapper.aka
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry
      ? rapper.country === selectedCountry
      : true;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="p-6">
      {/* Header Section */}
      <header className="container mx-auto flex flex-col items-center justify-center mt-8 h-[30vh] bg-gradient-to-b from-gray-500/10 to-gray-700/20 rounded-lg shadow-lg p-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            The greatest in the history of rap in Spanish
          </h1>
          <p className="text-center mt-4">
            A celebration of the most influential figures in the genre
          </p>
        </div>
        {/* <div className="flex flex-col items-center">
          <Button className="mt-8">Get Started</Button>
        </div> */}
      </header>

      {/* Search Bar */}
      <div className="container flex mt-8 mx-auto">
        <div className=" mx-auto border rounded-md shadow-sm flex-1/4 mr-4">
          <select
            value={selectedCountry || ""}
            onChange={(e) => setSelectedCountry(e.target.value || null)}
            className="w-full rounded-md shadow-sm p-2 bg-secondary"
          >
            <option value="">Rappers by Countries</option>
            {uniqueCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <Input
          type="text"
          placeholder="Search a rapper by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md shadow-sm flex-3/4"
        />
      </div>
      {/* Rapper Ranking List - TOP 5 */}
      {/* <div className="container mx-auto mt-8">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Top 5
        </h2>
      </div> */}

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {filteredRappers.map((rapper) => (
          <RapperCard
            key={rapper.id}
            rapper={rapper}
            onSelect={setSelectedRapper}
          />
        ))}
      </div>
      {/* <div className="container h-[0.5px] bg-white/50 mt-8 mx-auto"></div> */}
      {/* Rapper Ranking List */}
      {/* <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {filteredRappers.slice(5, 50).map((rapper) => (
          <RapperCard
            key={rapper.id}
            rapper={rapper}
            onSelect={setSelectedRapper}
          />
        ))}
      </div> */}

      {/* Rapper Details Modal */}
      <RapperModal
        rapper={selectedRapper}
        onClose={() => setSelectedRapper(null)}
      />
    </div>
  );
}
