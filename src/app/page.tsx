"use client";
import { useState } from "react";
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
  DialogDescription,
} from "@/components/ui/dialog";

const rappersData = [
  {
    id: 1,
    aka: "Canserbero",
    realName: "Tyrone José González Oramas",
    country: "Venezuela",
    group: false,
    members: null,
    spotifyId: "1wGIhYkKWSq4yACtTkCkSX",
  },
  {
    id: 2,
    aka: "Kase.O",
    realName: "Javier Ibarra Ramos",
    country: "Spain",
    group: false,
    members: null,
    spotifyId: "7GmXwGXJSsmWTkCyk5Twux",
  },
  {
    id: 3,
    aka: "Nach",
    realName: "Ignacio Fornés Olmo",
    country: "Spain",
    group: false,
    members: null,
    spotifyId: "66ArjpKRgw8vYBf9yhktto",
  },
  {
    id: 4,
    aka: "Vico C",
    realName: "Luis Armando Lozada Cruz",
    country: "Puerto Rico",
    group: false,
    members: null,
    spotifyId: "0GutRVONcyyBj1WduodFc6",
  },
  {
    id: 5,
    aka: "Ana Tijoux",
    realName: "Ana María Tijoux Merino",
    country: "France - Chile",
    group: false,
    members: null,
    spotifyId: "40JMTpVRUw90SrN4pFA6Mz",
  },
  {
    id: 6,
    aka: "Control Machete",
    realName: null,
    country: "Mexico",
    group: true,
    members:
      "Pato (Raúl Chapa Elizalde), Fermín IV (Fermín IV Caballero Elizondo), Toy Selectah (Antonio Hernández)",
    spotifyId: "628gUkswCfCS1hIOOHmIpK",
  },
  {
    id: 7,
    aka: "Mala Rodríguez",
    realName: "María Rodríguez Garrido",
    country: "Spain",
    group: false,
    members: null,
    spotifyId: "3Ces1OJeGOVGcUB0wPaPXJ",
  },
  {
    id: 8,
    aka: "Los Aldeanos",
    realName: null,
    country: "Cuba",
    group: true,
    members:
      "El B (Bian Oscar Rodríguez Gala), Al2 El Aldeano (Aldo Rodríguez)",
    spotifyId: "4Y6VI2Mfdhvb1RImggzOiY",
  },
  {
    id: 9,
    aka: "Orishas",
    realName: null,
    country: "Cuba",
    group: true,
    members:
      "Flaco-Pro (Liván Núñez Alemán), Roldán (Roldán González Rivero), Ruzzo (Hiram Riverí Medina), Yotuel (Yotuel Omar Romero Manzanares)",
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 10,
    aka: "Tego Calderón",
    realName: "Tegui Calderón Rosario",
    country: "Puerto Rico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 11,
    aka: "Violadores del Verso",
    realName: null,
    country: "Spain",
    group: true,
    members:
      "Kase.O (Javier Ibarra Ramos), Sho‑Hai (Sergio Rodríguez Fernández), Lírico (David Gilaberte Miguel), R de Rumba (Rubén Cuevas García)",
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 12,
    aka: "Akapellah",
    realName: "Pedro Elías Aquino Cova",
    country: "Venezuela",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 13,
    aka: "Residente",
    realName: "René Pérez Joglar",
    country: "Puerto Rico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 14,
    aka: "Rocca",
    realName: "Sebastián Rocca",
    country: "France",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 15,
    aka: "Arianna Puello",
    realName: null,
    country: "Dominican Republic",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 16,
    aka: "Alcolirykoz",
    realName: null,
    country: "Colombia",
    group: true,
    members:
      "Gambeta (Juan Carlos Fonnegra), Kaztro (Carlos Andrés), Fa‑Zeta (Gustavo Adolfo)",
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 17,
    aka: "Lil Supa",
    realName: "Marlon Morales",
    country: "Venezuela",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 18,
    aka: "Mexicano 777",
    realName: "Israel Perales Ortiz",
    country: "Puerto Rico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 19,
    aka: "Rxnde Akozta",
    realName: "Edgar Randy Acosta Cruz",
    country: "Cuba",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 20,
    aka: "La Etnnia",
    realName: null,
    country: "Colombia",
    group: true,
    members: "Kany, Ata, Káiser Pimienta",
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 21,
    aka: "El Chojin",
    realName: "Domingo Antonio Edjang Moreno",
    country: "Spain",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 22,
    aka: "SFDK",
    realName: "Zatu; Acción Sánchez",
    country: "Spain",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 23,
    aka: "Gabylonia",
    realName: "María Gabriela Vivas Sojo",
    country: "Venezuela",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 24,
    aka: "Illya Kuryaki & the Valderramas",
    realName: null,
    country: "Argentina",
    group: true,
    members: "Dante Spinetta, Emmanuel Horvilleur",
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 25,
    aka: "Cartel de Santa",
    realName: null,
    country: "Mexico",
    group: true,
    members:
      "Babo (Eduardo Davalos de Luna), Rowan Rabia (Román Rodríguez), Dharius",
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 26,
    aka: "ToteKing",
    realName: "Manuel González Rodríguez",
    country: "Spain",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 27,
    aka: "WOS",
    realName: "Valentín Oliva",
    country: "Argentina",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 28,
    aka: "Alemán",
    realName: "Erick Raúl Alemán Ramírez",
    country: "Mexico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 29,
    aka: "7 notas 7 colores",
    realName: "Oliver Gallego (Mucho Muchacho)",
    country: "Spain",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 30,
    aka: "Trueno",
    realName: "Mateo Palacios Corazzina",
    country: "Argentina",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 31,
    aka: "Santa Fe Klan",
    realName: "Ángel Jair Quezada Jasso",
    country: "Mexico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 32,
    aka: "Norick",
    realName: "Norick Gamarra Guevara",
    country: "Peru",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 33,
    aka: "Original Juan",
    realName: null,
    country: "Dominican Republic",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 34,
    aka: "Foyone",
    realName: "Pedro Armando Navarro",
    country: "Spain",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 35,
    aka: "Apache",
    realName: "Larry Rada",
    country: "Venezuela",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 36,
    aka: "Aczino",
    realName: "Mauricio Hernández González",
    country: "Mexico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 37,
    aka: "Gera MX",
    realName: "Gerardo Daniel Torres Montante",
    country: "Mexico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 38,
    aka: "Rapper School",
    realName: null,
    country: "Peru",
    group: true,
    members:
      "Norick (Braulio Norick Gamarra Guevara), Warrior (Giancarlo Quiroz Gonzales), Street (Miguel Ángel Calle Cornejo), DJ Deportado",
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 39,
    aka: "Daddy Yankee",
    realName: "Ramón Luis Ayala Rodríguez",
    country: "Puerto Rico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 40,
    aka: "N. Hardem",
    realName: "Nelson Martínez",
    country: "Colombia",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 41,
    aka: "Crack Family",
    realName: "Cejaz Negraz; Manny",
    country: "Colombia",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 42,
    aka: "Las Ninyas del Corro",
    realName: "Felinna Vallejo; Laüra Bonsai",
    country: "Spain",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 43,
    aka: "Hispana",
    realName: "Patricia Polet",
    country: "Mexico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 44,
    aka: "Mare Advertencia Lirika",
    realName: null,
    country: "Mexico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 45,
    aka: "Rapsusklei",
    realName: "Diego Gil Fernández",
    country: "Spain",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 46,
    aka: "Portavoz",
    realName: null,
    country: "Chile",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 47,
    aka: "Tempo",
    realName: "David Sánchez Badillo",
    country: "Puerto Rico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 48,
    aka: "Lápiz Conciente",
    realName: "Avelino Junior Figueroa Rodríguez",
    country: "Dominican Republic",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 49,
    aka: "Snow Tha Product",
    realName: "Claudia Alexandra Madriz Meza",
    country: "United States",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
  {
    id: 50,
    aka: "Bocafloja",
    realName: "Aldo Villegas",
    country: "Mexico",
    group: false,
    members: null,
    spotifyUrl:
      "https://open.spotify.com/embed/artist/1wGIhYkKWSq4yACtTkCkSX?utm_source=generator&theme=0",
  },
];

// Example usage of the new property

interface Rapper {
  id: number;
  aka: string;
  realName: string | null;
  country: string;
  group: boolean;
  members: string | null;
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
      className="bg-card text-card-foreground shadow-md rounded-md hover:shadow-lg transition-shadow duration-200 cursor-pointer flex flex-col"
      onClick={() => onSelect(rapper)}
    >
      <CardContent className="flex flex-col items-center justify-start h-2/3 p-0">
        <Image
          src={userImage} // Dummy image URL
          alt={rapper.aka}
          className="w-full h-full object-cover overflow-hidden rounded-t-md"
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
          <DialogDescription>Learn more about {rapper.aka}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={userImage} //`} // Dummy image URL
            alt={rapper.aka}
            className="rounded-full w-32 h-32 object-cover mb-4"
            width={128}
            height={128}
            onClick={() => onClose()}
          />
          <p className="text-md text-muted-foreground">
            Real Name: {rapper.realName || "N/A"}
            <br />
            Country: {rapper.country}
            <br />
            {rapper.group ? (
              <>Group Members: {rapper.members || "N/A"}</>
            ) : (
              <>Solo Artist</>
            )}
          </p>

          <iframe
            style={{ borderRadius: "14px" }}
            src={`https://open.spotify.com/embed/artist/${rapper.spotifyId}?utm_source=generator&theme=0`}
            width="100%"
            height="362"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="mt-8"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRapper, setSelectedRapper] = useState<Rapper | null>(null);
  const filteredRappers = rappersData.filter((rapper) =>
    rapper.aka.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center mt-8 h-[30vh] bg-gradient-to-b from-gray-500/10 to-gray-700/20 rounded-lg shadow-lg p-8">
        <div>
          <h1 className="text-4xl text-center mt-8 font-bold">
            50 grandes en la historia del rap en español
          </h1>
          <p className="text-center mt-4">
            Un reconocimiento a las figuras más importantes del género en
            nuestro idioma
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Button className="mt-8">Get Started</Button>
        </div>
      </header>

      <div className="mt-8">
        <Input
          type="text"
          placeholder="Search for a rapper..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md shadow-sm"
        />
      </div>

      {/* Rapper Ranking List */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {filteredRappers.map((rapper) => (
          <RapperCard
            key={rapper.id}
            rapper={rapper}
            onSelect={setSelectedRapper}
          />
        ))}
      </div>
      {/* Rapper Details Modal */}
      <RapperModal
        rapper={selectedRapper}
        onClose={() => setSelectedRapper(null)}
      />
    </div>
  );
}
