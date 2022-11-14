export type HomeLiterals = {
  TITLE: string;
  SUBTITLE: string;
  LINK_TITLE: string;
};

const literals = (): HomeLiterals => ({
  TITLE: 'Cão Oculto',
  SUBTITLE: '2022',
  LINK_TITLE: 'Ir para o quebra-cabeça',
});

export default literals();
