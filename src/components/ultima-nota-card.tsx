import { getIniciais } from "@/utils/get-inicias";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ultimaNota = {
  atleta: "Maria Silva",
  equipe: "Equipe A",
  nota: 9.550,
  aparelho: "Arco",
  categoria: "Infantil",
  data: "2024-06-15"
}

export default function UltimaNotaCard() {
  return (
    <Card className="w-72 md:w-96 border border-gray-200 shadow-lg">
      <CardHeader>
        <CardTitle>Última Nota Divulgada</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center">
          <Avatar className="size-12">
            <AvatarFallback>{getIniciais(ultimaNota.atleta)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold">{ultimaNota.atleta}</h3>
            <p className="text-sm text-gray-500">{ultimaNota.equipe}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-semibold">Nota: {ultimaNota.nota.toFixed(3)}</p>
          <p className="text-sm text-gray-500">{ultimaNota.aparelho} - {ultimaNota.categoria}</p>
        </div>
      </CardContent>
    </Card>
  )
}