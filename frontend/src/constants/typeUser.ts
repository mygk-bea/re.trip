export const dictDataRoutes = (type: string) => {
  if (type === 'admin') {
    return {
      home: '/admin/home',
      cadastro: "/admin/criar-conta",
      login: "/admin/login",
      inicio: "/admin/inicio",
      color: 'rgba(34,156,255,1)',
      secondaryColor: 'rgba(11,124,186,1)'
    };
  } else if (type === 'guia') {
    return {
      home: '/guia/home',
      cadastro: "/guia/criar-conta",
      login: "/guia/login",
      inicio: "/admin/inicio",
      color: 'rgba(20,196,20,1)',
      secondaryColor: 'rgba(22,150,10,1)'
    };
  } else {
    return {
      home: '/user/home',
      cadastro: "/criar-conta",
      login: "/login",
      inicio: "/inicio",
      color: 'rgba(255,112,34,1)',
      secondaryColor: 'rgba(221,54,3,1)'
    };
  }
};