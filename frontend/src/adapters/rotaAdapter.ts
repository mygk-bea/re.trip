import type { RouteInfo } from "../types/route";
import type { RotaResponse } from "../core/interfaces/rota";

export function adaptarRotasAPI(data: RotaResponse[]): RouteInfo[] {
  return data.map((rota) => ({
    id: String(rota.id),
    name: rota.nome,
    author: rota.autor || 'Usuário',
    favorited: Boolean(rota.favorited),
    starRating: rota.avaliacao || 0,
    comment: rota.comentario || '',
    routeLength: rota.extensao || '',
    locals: rota.locais?.map((local) => ({
      id: local.id,
      name: local.nome,
      address: local.endereco,
      description: local.descricao,
      images: local.imagens || [],
      tags: local.tags?.map((t) => ({
        text: t.nome,
        style: {
          bgColor: "#fff",
          textColor: "#000",
          borderColor: "#ccc",
        },
      })) || [],
    })) || [],
    images: rota.imagens || [],
    guiaAvailable: Boolean(rota.guia_disponivel),
  }));
}