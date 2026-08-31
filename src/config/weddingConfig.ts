import { GiftItem, GalleryPhoto, TimelineEvent, WeddingInfo } from '../types';

/* ==========================================================================
   CONFIGURAÇÃO DE DESENVOLVEDOR (INVITATION IMAGE / CONVITE)
   ==========================================================================
   Insira abaixo a URL da imagem do convite oficial.
   - Deixe como "" (vazio) para exibir o convite tipográfico estilizado padrão.
   - Ou insira a URL/caminho da imagem desejada.
   A imagem permanecerá 100% OCULTA enquanto o envelope estiver fechado,
   e será revelada com uma animação suave ao clicar para abrir o envelope.
   ========================================================================== */
export const INVITE_IMAGE_URL: string = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85";

/* Código padrão inicial do casal para edição da lista (o casal pode alterar a qualquer momento) */
export const DEFAULT_COUPLE_PASSCODE = "1403";

export const WEDDING_INFO: WeddingInfo = {
  brideName: "Helena",
  groomName: "Marcos",
  weddingDate: "2027-03-14T17:00:00",
  dateDisplay: "14 de Março de 2027",
  timeDisplay: "17:00 horas",
  locationName: "Sítio das Oliveiras",
  locationAddress: "Estrada Municipal das Flores, Km 4 — Itu, SP",
  locationMapUrl: "https://maps.google.com/?q=Itu+SP",
  pixKey: "helena.marcos.casamento@gmail.com",
  pixReceiver: "Helena & Marcos Casamento",
  pixBank: "Banco do Brasil / Nubank",
};

export const INITIAL_TIMELINE: TimelineEvent[] = [
  {
    year: "2018",
    title: "Um encontro por acaso",
    description: "Nos conhecemos no aniversário de um amigo em comum. Nenhum dos dois planejava ir — ainda bem que fomos!",
  },
  {
    year: "2019",
    title: "O primeiro café",
    description: "Marcamos 'só um café de 30 minutos' que durou 4 horas ininterruptas de conversa e muitas risadas.",
  },
  {
    year: "2021",
    title: "Nosso primeiro lar",
    description: "Alugamos o primeiro apartamento juntos e aprendemos a dividir tudo, inclusive as manias e o controle da TV.",
  },
  {
    year: "2025",
    title: "O pedido inesquecível",
    description: "Durante uma viagem à serra, com a desculpa de assistir ao pôr do sol, veio a pergunta mais bonita e o 'SIM' mais certeiro.",
  },
  {
    year: "2027",
    title: "O grande dia",
    description: "Reunir as pessoas que mais amamos para celebrar o início da nossa família.",
  },
];

export const INITIAL_GALLERY: GalleryPhoto[] = [
  {
    id: "p1",
    title: "Ensaio ao entardecer",
    caption: "Pôr do sol dourado na serra, no mesmo local do pedido.",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    tag: "Ensaio",
  },
  {
    id: "p2",
    title: "Passeio de domingo",
    caption: "Rindo das nossas tentativas de tirar fotos espontâneas.",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    tag: "Momentos",
  },
  {
    id: "p3",
    title: "A praia que amamos",
    caption: "Pés na areia e promessas para o futuro.",
    imageUrl: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80",
    tag: "Viagens",
  },
  {
    id: "p4",
    title: "Olhares cúmplices",
    caption: "Porque o amor se constrói nos pequenos detalhes diários.",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    tag: "Ensaio",
  },
  {
    id: "p5",
    title: "Aquele sorriso",
    caption: "A certeza mais bonita que o coração já teve.",
    imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
    tag: "Momentos",
  },
  {
    id: "p6",
    title: "Rumo ao altar",
    caption: "Contando os dias para o nosso 14 de março.",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
    tag: "Ensaio",
  },
];

export const INITIAL_GIFTS: GiftItem[] = [
  {
    id: "g1",
    name: "Jogo de Panelas Cerâmica Premium",
    description: "Conjunto antiaderente 5 peças com tampa de vidro temperado",
    price: 480,
    imageUrl: "https://images.unsplash.com/photo-1584990347449-39908cf4fb44?auto=format&fit=crop&w=800&q=80",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: "g2",
    name: "Cafeteira Espresso & Cappuccino",
    description: "Para os cafés da manhã preguiçosos de fim de semana",
    price: 380,
    imageUrl: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
    category: "Eletros",
    reserved: false,
  },
  {
    id: "g3",
    name: "Fritadeira Air Fryer Digital 4.5L",
    description: "Indispensável para a rotina da nova casa",
    price: 290,
    imageUrl: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
    category: "Eletros",
    reserved: false,
  },
  {
    id: "g4",
    name: "Jantar Romântico na Lua de Mel",
    description: "Uma noite especial à luz de velas em Paris para o casal",
    price: 350,
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    category: "Lua de Mel",
    reserved: false,
  },
  {
    id: "g5",
    name: "Jogo de Cama Algodão Egípcio 400 Fios",
    description: "Lençóis macios e elegantes tamanho Queen",
    price: 320,
    imageUrl: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80",
    category: "Casa & Conforto",
    reserved: false,
  },
  {
    id: "g6",
    name: "Robô Aspirador Inteligente",
    description: "Para manter a casa limpa e sobrar mais tempo juntinhos",
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=800&q=80",
    category: "Eletros",
    reserved: false,
  },
  {
    id: "g7",
    name: "Passeio de Barco ao Pôr do Sol",
    description: "Experiência inesquecível na costa mediterrânea",
    price: 420,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    category: "Lua de Mel",
    reserved: false,
  },
  {
    id: "g8",
    name: "Aparelho de Jantar Porcelana 20 Peças",
    description: "Pratos rasos, fundos, sobremesa e xícaras elegantes",
    price: 490,
    imageUrl: "https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&w=800&q=80",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: "g9",
    name: "Adega Climatizada 8 Garrafas",
    description: "Para brindar momentos felizes com amigos e família",
    price: 720,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    category: "Eletros",
    reserved: false,
  },
  {
    id: "g10",
    name: "Jogo de Taças de Cristal Lapidado",
    description: "6 taças de vinho e 6 taças de champanhe",
    price: 210,
    imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: "g11",
    name: "Cota para Passagens Aéreas",
    description: "Ajude os noivos a realizarem a viagem dos sonhos",
    price: 200,
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    category: "Lua de Mel",
    reserved: false,
  },
  {
    id: "g12",
    name: "Kit Spa Relaxante para o Casal",
    description: "Massagem a dois para relaxar após os preparativos",
    price: 260,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    category: "Experiências",
    reserved: false,
  }
];
