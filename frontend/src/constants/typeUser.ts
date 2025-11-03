export const dictDataRoutes = (type: string) => {
  if (type === "admin") {
    return {
      home: "/admin/home",
      cadastro: "/admin/criar-conta",
      login: "/admin/login",
      inicio: "/admin/inicio",
      localInfo: "/admin/local/info",
      rotaInfo: "/admin/rota/info",
      rotaCadastro: "/admin/rota/cadastro",
      perfilConteudo: "/admin/meu-perfil/meus-locais",
      pesquisar: "/admin/pesquisar",
      color: "rgba(34,156,255,1)",
      secondaryColor: "rgba(11,124,186,1)",
    };
  } else if (type === "guia") {
    return {
      home: "/guia/home",
      cadastro: "/guia/criar-conta",
      login: "/guia/login",
      inicio: "/guia/inicio",
      localInfo: "/guia/local/info",
      rotaInfo: "/guia/rota/info",
      rotaCadastro: "/guia/rota/cadastro",
      perfilConteudo: "/guia/meu-perfil/minhas-rotas",
      perfilContato: "/guia/meu-perfil/contato",
      pesquisar: "/guia/pesquisar",
      color: "rgba(20,196,20,1)",
      secondaryColor: "rgba(22,150,10,1)",
    };
  } else {
    // user
    return {
      home: "/user/home",
      cadastro: "/criar-conta",
      login: "/login",
      inicio: "/inicio",
      localInfo: "/user/local/info",
      rotaInfo: "/user/rota/info",
      rotaCadastro: "/user/rota/cadastro",
      perfilConteudo: "/user/meu-perfil/favoritos",
      pesquisar: "/user/pesquisar",
      color: "rgba(255,112,34,1)",
      secondaryColor: "rgba(221,54,3,1)",
    };
  }
};
