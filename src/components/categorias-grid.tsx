import { categorias } from "@/utils/categorias";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Star, Trophy, Zap } from "lucide-react";

export default function CategoriasGrid() {
  return (
    <div className="px-4 py-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Categorias</h2>
        <p className="text-sm text-gray-500">
          Explore as categorias do torneio e veja as classificações mais
          recentes.
        </p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-10">
        {categorias.map((cat) => (
          <Link
            key={cat}
            to={`/tabela/${encodeURIComponent(cat.toLowerCase())}`}
            className="group"
          >
            <Card className="h-full border-2 transition-all duration-200 group-hover:border-primary group-hover:shadow-md active:scale-95">
              <CardContent className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/10">
                    {cat.includes("N1") ? (
                      <Star className="w-5 h-5 text-primary" />
                    ) : cat.includes("N2") ? (
                      <Zap className="w-5 h-5 text-primary" />
                    ) : (
                      <Trophy className="w-5 h-5 text-primary" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg leading-tight">{cat}</h3>
                    <span className="text-xs text-muted-foreground uppercase font-medium">
                      Ver classificação
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
