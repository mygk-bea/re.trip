import type { Local } from "../core/interfaces/local";
import type { Place } from "../types/place";
import { DICT_TAGS, TAG_COLORS } from "../constants/tagColors";
import { localService } from "../core/services/LocalService";

export const localToPlace = (local: Local): Place => {
  return {
    id: local.cnpj,
    name: local.nome,
    favorited: false,
    verified: true, 
    // favorited: local.favoritado ? true : false,
    // verified: local.validado ? true : false, 
    starRating: local.avalicao || 0,
    tags: local.tags.map(tag => ({
      text: tag,
      style:
        DICT_TAGS[tag as keyof typeof DICT_TAGS] ??
        DICT_TAGS["Localização"],
    })),
    description: local.descricao,
    contactInfo: local.telefone,
    address: `${local.logradouro}, ${local.numero} - ${local.bairro}, ${local.cidade} - ${local.cep}`,
    images: local.imagensNome.map(
      (img) => `/uploads/${img}`
    ),
    routes: [],
    events: [],
  };
};

export const locaisToPlaces = (locais: Local[]): Place[] => {
  return locais.map(localToPlace);
};

export const localPlaceService = {
  async listarPlaces(userCredencial: number): Promise<Place[]> {
    try {
      const response = await localService.getDadosLocais(userCredencial);

      // dependendo da estrutura do retorno, pode ser response.data.locais
      const locais = Array.isArray(response) ? response : response.locais ?? [];

      return locaisToPlaces(locais);
    } catch (err) {
      console.error("Erro ao converter locais em places:", err);
      return [];
    }
  },
};