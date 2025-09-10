/**
 * Página Principal - Pompo Olimpíadas
 * 
 * Esta é a página principal da landing page para o evento "Pompo Olimpíadas",
 * uma superaula online gratuita de Ginástica Íntima.
 * 
 * Estrutura da página:
 * 1. Imagens de fundo e logo
 * 2. Texto descritivo principal
 * 3. Informações de data e horário
 * 4. Campo de cadastro por email
 * 5. Seção "O que você vai aprender"
 * 6. Cards de conteúdo (4 cards)
 * 7. Texto de privacidade
 */

'use client';

// Importações necessárias
import Image from "next/image";
import { colors, typography } from "../lib/design-tokens";

// ========================================
// CONSTANTES E CONFIGURAÇÕES
// ========================================

/**
 * Configurações de imagens
 */
const IMAGE_CONFIG = {
  hero: {
    src: "/images/ddddd-1.jpg.png",
    alt: "Imagem de fundo principal - Hero da landing page",
    width: 1920,
    height: 925,
    quality: 85
  },
  secondary: {
    src: "/images/talvez 1.png",
    alt: "Imagem secundária de fundo",
    width: 1920,
    height: 856,
    quality: 80
  },
  logo: {
    src: "/images/Azul 1.png",
    alt: "Logo Pompo Olimpíadas - Marca principal",
    width: 402.78997802734375,
    height: 124.29851531982422,
    quality: 90
  },
  background: {
    src: "/images/fundo.png",
    alt: "Imagem de fundo retangular - Textura de fundo",
    width: 1144,
    height: 243,
    quality: 90
  },
  medal: {
    src: "/images/final.png",
    alt: "Medalha das Olimpíadas do Pomporrismo",
    width: 630,
    height: 755,
    quality: 90
  },
  instructor: {
    src: "/images/Agrupar 6 1.png",
    alt: "Imagem da mulher",
    width: 545,
    height: 852,
    quality: 90
  },
  brazil: {
    src: "/images/brasil.jpg",
    alt: "Bandeira do Brasil",
    width: 40,
    height: 30,
    quality: 90
  },
  cardBottom: {
    src: "/images/baixocard.png",
    alt: "Padrão ondulado inferior do card",
    width: 270,
    height: 44,
    quality: 90
  }
};

/**
 * Configurações de posicionamento
 */
const POSITIONS = {
  hero: {
    top: '1614px',
    left: '0px',
    width: '360.6194458007812px',
    height: '755.004638671875px'
  },
  text: {
    top: '1650px',
    left: '467px',
    width: '986px',
    height: '120px'
  },
  cards: {
    top: '1900px',
    left: '55%',
    width: '1100px'
  },
  instructor: {
    top: '2726px',
    left: '50%',
    width: '100%',
    height: '700px'
  },
  footer: {
    top: '3424px',
    left: '50%',
    width: '1920px',
    height: '177px'
  }
};

/**
 * Estilos reutilizáveis
 */
const COMMON_STYLES = {
  card: {
    background: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    minHeight: '100px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: 'scale(1)'
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    border: '2px solid #D4C47E'
  },
  button: {
    borderRadius: '25px',
    padding: '12px 30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  text: {
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#000000',
    fontWeight: 400
  }
};

/**
 * Dados dos cards de sintomas PPKA Sedentária
 */
const PPKA_SEDENTARIA_SYMPTOMS = [
  "Não sente vontade de ter relação íntima",
  "Tem escape de urina quando faz esforço",
  "Sente fortes cólicas menstruais todos os meses",
  "Não tem lubrificação",
  "Solta buceidos durante a relação (flatos)",
  "Sente dor na hora da relação"
];

/**
 * Dados dos benefícios PPKA Atleta
 */
const PPKA_ATLETA_BENEFITS = [
  "É muito mais molhadinha",
  "Sente muito mais vontade de ter relação",
  "Não sofre com infecções de recorrência",
  "Não sofre com cólicas menstruais",
  "É mais preparada para lidar com os sintomas da menopausa",
  "Fica muito mais resistente no pré e no pós-parto",
  "É altamente orgástica",
  "Não tem escape de urina causado pela frouxidão íntima"
];

/**
 * Dados dos cards de conteúdo
 */
const CONTENT_CARDS = [
  {
    id: 1,
    title: "SALTO NA VARA",
    description: "As manobras pompoarísticas mais avançadas – você vai ter uma ppk, forte, resistente, saudável e com truques de tirar o fôlego, como: chupitar, dedilhar, enlaçar, sugar, e vários outros segredos",
    image: "/images/mulher1.png",
    alt: "Imagem da mulher - Card 1"
  },
  {
    id: 2,
    title: "APERTÊ",
    description: "Os melhores golpes para nocautear de uma vez por todas os problemas que atrapalham a sua saúde íntima – como a incontinência, cólicas e os incômodos da menopausa, por exemplo",
    image: "/images/mulher2.png",
    alt: "Imagem da mulher2 - Card 2"
  },
  {
    id: 3,
    title: "GINÁSTICA NHANHAÍSTICA",
    description: "O passo a passo para desenvolver habilidades que farão você liderar no quesito rebolada sensual e manuseio de bolas.",
    image: "/images/mulher3.png",
    alt: "Imagem da mulher3 - Card 3"
  },
  {
    id: 4,
    title: "SIRIRICLISMO",
    description: "Exercícios para aumentar a sua consciência corporal e te ajudar a entender quais são os pontos que mais te dão prazer para que você se torne uma mulher altamente orgástica",
    image: "/images/mulher4.png",
    alt: "Imagem da mulher4 - Card 4"
  }
];

// ========================================
// COMPONENTES REUTILIZÁVEIS
// ========================================

/**
 * Componente de Card de Sintoma/Benefício
 * @param text - Texto do sintoma ou benefício
 * @param isBenefit - Se é um benefício (estilo dourado) ou sintoma (estilo azul)
 */
const SymptomBenefitCard = ({ text, isBenefit = false }: { text: string; isBenefit?: boolean }) => (
  <div
    style={{
      ...COMMON_STYLES.card,
      background: isBenefit ? '#D4C47E' : '#FFFFFF',
      display: 'flex',
      alignItems: 'stretch',
      padding: '0',
      minHeight: isBenefit ? '120px' : '100px'
    }}
    onMouseEnter={(e) => {
      Object.assign(e.currentTarget.style, COMMON_STYLES.cardHover);
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.border = 'none';
    }}
  >
    <div
      style={{
        width: '80px',
        height: '100%',
        background: 'linear-gradient(180deg, #E3F2FD 0%, #1E40AF 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: '12px',
        borderBottomLeftRadius: '12px',
        overflow: 'hidden'
      }}
    />
    <div
      style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <span
        style={{
          ...COMMON_STYLES.text,
          fontWeight: 900,
          fontSize: '20px',
          color: '#1E40AF',
          lineHeight: '1.4'
        }}
      >
        {text}
      </span>
    </div>
  </div>
);

/**
 * Componente de Card de Conteúdo
 * @param card - Dados do card
 */
const ContentCard = ({ card }: { card: typeof CONTENT_CARDS[0] }) => (
  <div
    style={{
      width: '270px',
      height: '483px',
      background: colors.primary,
      borderRadius: '20px',
      border: `2px solid ${colors.secondary}`,
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      transform: 'scale(1) translateY(0)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.08) translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
      e.currentTarget.style.border = `3px solid ${colors.secondary}`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1) translateY(0)';
      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
      e.currentTarget.style.border = `2px solid ${colors.secondary}`;
    }}
  >
    {/* Imagem da mulher */}
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '250px',
        borderTopLeftRadius: '18px',
        borderTopRightRadius: '18px',
        overflow: 'hidden'
      }}
    >
      <Image
        src={card.image}
        alt={card.alt}
        width={270}
        height={193}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        quality={90}
      />
      
      {/* Bandeira do Brasil */}
      <Image
        src={IMAGE_CONFIG.brazil.src}
        alt={IMAGE_CONFIG.brazil.alt}
        width={IMAGE_CONFIG.brazil.width}
        height={IMAGE_CONFIG.brazil.height}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          width: '40px',
          height: '30px',
          objectFit: 'contain',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
        }}
        quality={90}
      />
    </div>
    
    {/* Seta decorativa */}
    <div
      style={{
        position: 'absolute',
        top: '180px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80px',
        height: '20px',
        background: 'rgba(59, 130, 246, 0.2)',
        border: '2px solid rgba(59, 130, 246, 0.5)',
        borderRadius: '10px',
        boxShadow: '0 0 12px rgba(59, 130, 246, 0.4)',
        zIndex: 10
      }}
    >
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              width: 0,
              height: 0,
              borderLeft: '8px solid #FFFFFF',
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
              marginRight: i < 2 ? '3px' : '0'
            }}
          />
        ))}
      </div>
    </div>
    
    {/* Conteúdo do card */}
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '300px',
        background: colors.primary,
        padding: '10px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '40px'
      }}
    >
      <div
        style={{
          fontFamily: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '1.3',
          letterSpacing: '0.5px',
          textAlign: 'center',
          background: 'transparent',
          color: '#D4C47E',
          display: 'block',
          whiteSpace: 'normal',
          borderRadius: '4px',
          padding: '4px 8px',
          marginBottom: '10px',
          zIndex: 5
        }}
      >
        {card.title}
      </div>
      <div
        style={{
          color: colors.text.primary,
          fontSize: '16px',
          textAlign: 'center',
          lineHeight: '1.5',
          fontFamily: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
          fontWeight: 400
        }}
      >
        {card.description}
      </div>
    </div>
    
    {/* Imagem de fundo ondulado */}
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50px',
        overflow: 'hidden',
        borderBottomLeftRadius: '18px',
        borderBottomRightRadius: '18px'
      }}
    >
      <Image
        src={IMAGE_CONFIG.cardBottom.src}
        alt={IMAGE_CONFIG.cardBottom.alt}
        width={IMAGE_CONFIG.cardBottom.width}
        height={IMAGE_CONFIG.cardBottom.height}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        quality={90}
      />
    </div>
  </div>
);

/**
 * Componente principal da página
 * @returns JSX.Element - Estrutura completa da landing page
 */
export default function Home() {
  return (
    <div className="min-h-screen relative responsive-container">
      {/* 
        ========================================
        SEÇÃO 1: HERO SECTION - IMAGENS DE FUNDO
        ========================================
      */}
      
      {/* Imagem de fundo principal - Hero Section */}
      <Image
        src={IMAGE_CONFIG.hero.src}
        alt={IMAGE_CONFIG.hero.alt}
        width={IMAGE_CONFIG.hero.width}
        height={IMAGE_CONFIG.hero.height}
        className="w-full h-auto hero-image"
        priority
        quality={IMAGE_CONFIG.hero.quality}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
      
      {/* Imagem secundária de fundo com borda decorativa */}
      <div
        style={{
          border: `4px solid ${colors.secondary}`,
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 15px rgba(212, 196, 126, 0.3)'
        }}
      >
        <Image
          src={IMAGE_CONFIG.secondary.src}
          alt={IMAGE_CONFIG.secondary.alt}
          width={IMAGE_CONFIG.secondary.width}
          height={IMAGE_CONFIG.secondary.height}
          className="w-full h-auto"
          quality={IMAGE_CONFIG.secondary.quality}
          loading="lazy"
        />
      </div>
      

      {/* Logo principal da marca */}
      <Image
        src={IMAGE_CONFIG.logo.src}
        alt={IMAGE_CONFIG.logo.alt}
        width={IMAGE_CONFIG.logo.width}
        height={IMAGE_CONFIG.logo.height}
        className="logo-responsive"
        priority
        quality={IMAGE_CONFIG.logo.quality}
      />
      
      {/* 
        ========================================
        SEÇÃO 2: CONTEÚDO PRINCIPAL
        ========================================
      */}
      
      {/* 
        Texto descritivo principal - Hero Text
        - Posicionamento absoluto preciso
        - Tipografia aplicada via design tokens
        - Conteúdo principal da proposta de valor
      */}
      <div className="hero-text" style={typography.styles.body}>
        Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula on-line e gratuita, onde eu vou ensinar todos os exercícios do meu curso de Ginástica Íntima para todas as mulheres que se preocupam em desenvolver a própria intimidade.
      </div>
      
      {/* 
        Informações de data e horário do evento
        - Destaque para data e horário em cor dourada
        - Call-to-action para cadastro
        - Tipografia diferenciada para hierarquia visual
      */}
      <div className="date-info" style={typography.styles.body}>
        {/* Texto com hierarquia visual diferenciada */}
        <div style={typography.styles.bodyBold}>
          {/* Data e horário em destaque (cor dourada) */}
          <span style={{ color: colors.secondary }}>
            Ao vivo, dia 13 de agosto, às 20h,
          </span>
          <br />
          <span style={{ color: colors.secondary }}>
            horário de Brasília.
          </span>
          {/* Call-to-action em cor branca */}
          <span style={{ color: colors.text.primary }}>
            {' '}Cadastre-se, gratuitamente, e receba o link da live
          </span>
        </div>
      </div>
      
      {/* 
        ========================================
        SEÇÃO 3: FORMULÁRIO DE CADASTRO
        ========================================
      */}
      
      {/* 
        Campo de cadastro por email
        - Design customizado com bordas arredondadas
        - Input e botão integrados visualmente
        - Posicionamento absoluto preciso
      */}
      <div
        className="form-container"
        style={{
          border: `2px solid ${colors.secondary}`, // Borda dourada
          borderRadius: '38.492919921875px', // Bordas totalmente arredondadas
          opacity: 1,
          background: colors.secondary, // Fundo dourado
          display: 'flex', // Layout flexbox para alinhamento
          alignItems: 'center', // Centralização vertical
          overflow: 'hidden' // Esconde bordas internas
        }}
      >
        {/* 
          Campo de input para email
          - Fundo branco para contraste
          - Bordas arredondadas apenas do lado esquerdo
          - Tipografia aplicada via design tokens
        */}
        <input
          type="email"
          placeholder="DIGITE AQUI O SEU MELHOR E-MAIL"
          className="form-input"
          style={{
            flex: 1, // Ocupa todo espaço disponível
            background: colors.white, // Fundo branco
            height: '100%', // Altura total do container
            border: 'none', // Remove borda padrão
            outline: 'none', // Remove outline padrão
            paddingLeft: '25px', // Espaçamento interno esquerdo
            paddingRight: '15px', // Espaçamento interno direito
            borderRadius: '36.492919921875px 0 0 36.492919921875px', // Bordas arredondadas apenas à esquerda
            marginRight: '-2px', // Sobreposição para eliminar gap
            ...typography.styles.input // Aplicação dos tokens de tipografia
          }}
        />

        {/* 
          Botão de envio
          - Fundo dourado para consistência
          - Ícone de seta para indicar ação
          - Bordas arredondadas apenas do lado direito
        */}
        <button
          className="form-button"
          style={{
            width: '90px', // Largura fixa para o botão
            height: '100%', // Altura total do container
            background: colors.secondary, // Fundo dourado
            display: 'flex', // Layout flexbox para centralizar ícone
            justifyContent: 'center', // Centralização horizontal
            alignItems: 'center', // Centralização vertical
            cursor: 'pointer', // Cursor de ponteiro
            border: 'none', // Remove borda padrão
            padding: 0, // Remove padding padrão
            borderRadius: '0 36.492919921875px 36.492919921875px 0' // Bordas arredondadas apenas à direita
          }}
        >
          {/* Ícone de seta para a esquerda */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ color: '#1E40AF' }} // Cor azul para contraste
          >
            <path
              d="M15 18L9 12L15 6" // Path da seta para esquerda
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      
      {/* 
        ========================================
        SEÇÃO 4: SEÇÃO "O QUE VOCÊ VAI APRENDER"
        ========================================
      */}
      
      {/* 
        Container retangular para seção de conteúdo
        - Fundo azul com borda dourada
        - Posicionamento absoluto específico
        - Container para título e texto descritivo
      */}
      <div
        className="section-container"
        style={{
          background: colors.primary, // Fundo azul
          borderRadius: '23px', // Bordas arredondadas
          border: `5px solid ${colors.secondary}` // Borda dourada
        }}
      >
        {/* 
          Imagem de fundo do container
          - Overlay com blend mode para efeito visual
          - Bordas arredondadas internas
          - Qualidade alta para melhor visual
        */}
        <Image
          src="/images/fundo.png"
          alt="Imagem de fundo retangular - Textura de fundo"
          width={1144}
          height={243}
          style={{
            width: '100%', // Ocupa toda largura do container
            height: '100%', // Ocupa toda altura do container
            objectFit: 'cover', // Cobre todo o espaço mantendo proporção
            borderRadius: '18px', // Bordas arredondadas internas
            backgroundColor: colors.primary, // Cor de fallback
            mixBlendMode: 'overlay' // Modo de mistura para efeito visual
          }}
          quality={90} // Alta qualidade para imagem de fundo
        />
        
        {/* 
          Container centralizado com todo o conteúdo
          - Posicionamento centralizado vertical e horizontalmente
          - Texto centralizado com hierarquia visual
        */}
        <div
          style={{
            position: 'absolute',
            width: '90%', // Largura com margem
            top: '50%', // Centralização vertical
            left: '50%', // Centralização horizontal
            transform: 'translate(-50%, -50%)', // Centralização perfeita
            textAlign: 'center', // Texto centralizado
            display: 'flex',
            flexDirection: 'column',
            gap: '20px' // Espaçamento entre título e texto
          }}
        >
          {/* Título principal */}
          <div className="section-title" style={typography.styles.headingSecondary}>
            O que você vai aprender nas Pompolimpíadas
          </div>
          
          {/* Texto descritivo */}
          <div className="section-text" style={{
            fontFamily: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '140%',
            letterSpacing: '-0.01em',
            color: '#FFFFFF'
          }}>
            Participe da superaula gratuita de Ginástica Íntima no dia 13 de agosto, às 20h, e tenha acesso a todo o conteúdo do curso. Aprenda a dominar a arte do aperta e solta e conquiste o ouro em saúde íntima, autoestima e prazer. Inscreva-se nas{' '}
            <span style={{ color: '#FFFFFF' }}>Pompolimpíadas 2024</span>
            {' '}para alcançar o topo em todas as suas relações.{' '}
            <span style={{ 
              fontWeight: 700,
              color: '#D4C47E'
            }}>
              Veja abaixo o que você vai aprender:
            </span>
          </div>
        </div>
      </div>
      
      {/* 
        ========================================
        SEÇÃO 5: CARDS DE CONTEÚDO
        ========================================
      */}
      
      {/* 
        Container principal dos 4 cards
        - Layout flexbox para alinhamento horizontal
        - Centralização na página
        - Gap consistente entre os cards
      */}

      {/* 
        ========================================
        SEÇÃO 6: IMAGEM MEDALHA
        ========================================
        * Imagem de medalha com posicionamento específico
        * - Dimensões: 630.62px x 755px
        * - Posição: top 1779px, left -279px
        * - Opacidade total para visibilidade completa
      */}
      <Image
        src="/images/med.png"
        alt="Medalha das Olimpíadas do Pomporrismo"
        width={630}
        height={755}
        style={{
          position: 'absolute',
          top: '1600px',
          left: '0px',
          width: '360.6194458007812px',
          height: '755.004638671875px',
          opacity: 1,
          zIndex: 5,
          objectFit: 'contain',
          objectPosition: 'center'
        }}
      />

      {/* 
        ========================================
        SEÇÃO 7: TEXTO INFORMATIVO
        ========================================
        * Texto sobre tipos de ppka
        * - Posicionamento específico conforme layout
        * - Tipografia Nunito Sans ExtraBold
        * - Fundo branco para destaque
      */}
      <div
        style={{
          position: 'absolute',
          top: '1650px',
          left: '467px',
          width: '986px',
          height: '120px',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5
        }}
      >
        <div
          style={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 800,
            fontStyle: 'normal',
            fontSize: '28px',
            lineHeight: '40px',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#FFFFFF',
            width: '100%'
          }}
        >
          Existem dois tipos de ppka, aquelas que dominam a modalidade do aperta e solta e as que não praticam nenhum exercício, ou seja, as sedentárias.
        </div>
        
        {/* Linha dourada decorativa abaixo da frase */}
        <div
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '4px',
            backgroundColor: '#D4C47E',
            borderRadius: '2px',
            zIndex: 6
          }}
        />
        
        {/* Botão PPKA SEDENTÁRIA abaixo da linha */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#F5F5F5',
            border: '2px solid #D4C47E',
            borderRadius: '25px',
            padding: '12px 30px',
            zIndex: 6,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 196, 126, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
          }}
        >
          <span
            style={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              color: '#1E40AF',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            PPKA SEDENTÁRIA
          </span>
        </div>
      </div>

      {/* 
        ========================================
        SEÇÃO 8: CARDS DE SINTOMAS PPKA SEDENTÁRIA
        ========================================
      */}
      <div
        style={{
          position: 'absolute',
          top: POSITIONS.cards.top,
          left: POSITIONS.cards.left,
          transform: 'translateX(-50%)',
          width: POSITIONS.cards.width,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '28px',
          zIndex: 5,
          maxWidth: '90vw'
        }}
      >
        {PPKA_SEDENTARIA_SYMPTOMS.map((symptom, index) => (
          <SymptomBenefitCard key={index} text={symptom} isBenefit={false} />
        ))}
      </div>

      {/* 
        ========================================
        SEÇÃO 8.1: BOTÃO PPKA ATLETA
        ========================================
        * Botão "PPKA ATLETA" abaixo dos cards de sintomas
        * - Design com borda dourada e fundo azul
        * - Texto branco em maiúsculas
        * - Bordas arredondadas
        * - Posicionamento centralizado
      */}
      <div
        style={{
          position: 'absolute',
          top: '2230px',
          left: '55%',
          transform: 'translateX(-50%)',
          background: '#1E40AF',
          border: '2px solid #D4C47E',
          borderRadius: '25px',
          padding: '12px 30px',
          zIndex: 6,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 196, 126, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }}
      >
        <span
          style={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          PPKA ATLETA
        </span>
      </div>

      {/* 
        ========================================
        SEÇÃO 8.2: CARDS DE BENEFÍCIOS PPKA ATLETA
        ========================================
      */}
      <div
        style={{
          position: 'absolute',
          top: '2300px',
          left: '55%',
          transform: 'translateX(-50%)',
          width: '1200px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          zIndex: 5
        }}
      >
        {PPKA_ATLETA_BENEFITS.map((benefit, index) => (
          <SymptomBenefitCard key={index} text={benefit} isBenefit={true} />
        ))}
        {/* Posição vazia no canto inferior direito */}
        <div></div>
      </div>

      {/* 
        ========================================
        SEÇÃO 8.3: QUEM VAI TE ENSINAR
        ========================================
        * Seção com texto e imagem da instrutora
        * - Layout dividido verticalmente (50% cada lado)
        * - Fundo azul vibrante
        * - Título amarelo "Quem vai te ensinar"
        * - Texto branco com parágrafos
        * - Imagem da mulher com acessórios dourados
      */}
      <div
        style={{
          position: 'absolute',
          top: '2726px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '700px',
          background: '#1E40AF',
          display: 'flex',
          alignItems: 'center',
          zIndex: 4
        }}
      >
        {/* Lado esquerdo - Texto */}
        <div
          style={{
            width: '50%',
            height: '100%',
            padding: '80px 60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {/* Título amarelo */}
          <h2
            style={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 900,
              fontSize: '48px',
              color: '#D4C47E',
              marginBottom: '500px',
              lineHeight: '1.4',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
          >
            Quem vai te ensinar
          </h2>

          {/* Texto da biografia */}
          <div
            style={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '24px',
              lineHeight: '200',
              letterSpacing: '0%',
              color: '#FFFFFF',
              textAlign: 'left',
              margin: 0,
              marginTop: '-440px',
              width: '100%',
              maxWidth: '766px',
              opacity: 1,
              zIndex: 5
            }}
          >
            <p
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: 900,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '123%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                textAlign: 'left',
                margin: 0
              }}
            >
              Cátia Damasceno é fisioterapeuta especializada em uroginecologia, e iniciou seu trabalho ensinando exercícios de Ginástica Íntima para o fortalecimento da musculatura de mulheres com problema de flacidez íntima após o parto.
              <br /><br />
              Desde então, se especializou em Ginástica Íntima feminina e, ao longo de mais de 15 anos de carreira, seus cursos e palestras já ajudaram milhares de mulheres pelo Brasil. Ao todo, são mais de 150 mil alunas participando ativamente das suas metodologias.
              <br /><br />
              Atualmente, Cátia é bastante reconhecida por esse trabalho e se tornou a precursora da Ginástica Íntima no Brasil, tornando-se a maior referência nacional no assunto. Já participou de vários programas influentes na mídia, como          &quot;Programa do Jô&quot;, &quot;Tonight Show&quot; na CNN, &quot;Se Joga&quot;, também da Rede Globo, e vários outros.
            </p>
          </div>
        </div>

        {/* Lado direito - Imagem da mulher */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            left: '50%',
            transform: 'translateX(50%)',
            width: '545px',
            height: '852px',
            opacity: 1,
            zIndex: 5
          }}
        >
            <Image
              src="/images/Agrupar 6 1.png"
              alt="Imagem da mulher"
              width={545}
              height={852}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
        </div>
      </div>

      {/* 
        ========================================
        FOOTER
        ========================================
        * Footer com informações de contato e logo
        * - Fundo dourado #D4C47E
        * - Layout dividido em 3 colunas
        * - Informações de contato à esquerda
        * - Logo centralizado
        * - Links legais à direita
      */}
      <div
        style={{
          position: 'absolute',
          top: '3424px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1920px',
          height: '177px',
          background: '#D4C47E',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          zIndex: 3
        }}
      >
        {/* Lado esquerdo - Informações de contato */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            flex: 1
          }}
        >
          {/* Primeira linha: Email | CNPJ */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <a
              href="mailto:suporte@mulheresbemresolvidas.com.br"
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '14px',
                color: '#000000',
                textDecoration: 'underline',
                fontWeight: 400
              }}
            >
              suporte@mulheresbemresolvidas.com.br
            </a>
            <span
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '14px',
                color: '#000000',
                fontWeight: 400
              }}
            >
              |
            </span>
            <span
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '14px',
                color: '#000000',
                fontWeight: 400
              }}
            >
              CNPJ: 23.705.563.0001/80
            </span>
          </div>
          
          {/* Segunda linha: Endereço */}
          <span
            style={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontSize: '14px',
              color: '#000000',
              fontWeight: 400
            }}
          >
            SHTN Bloco D RUV, SHCS CLS 216 - Asa Sul, Brasília - DF, 70294-530
          </span>
        </div>

        {/* Centro - Logo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            flex: 1
          }}
        >
          <Image
            src="/images/final.png"
            alt="Logo Pompo Olimpíadas"
            width={200}
            height={80}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
            quality={90}
          />
        </div>

        {/* Lado direito - Links legais */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '4px',
            flex: 1
          }}
        >
          {/* Primeira linha: Links legais */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '14px',
                color: '#000000',
                textDecoration: 'underline',
                fontWeight: 400
              }}
            >
              Política de privacidade
            </a>
            <span
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '14px',
                color: '#000000',
                fontWeight: 400
              }}
            >
              |
            </span>
            <a
              href="#"
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '14px',
                color: '#000000',
                textDecoration: 'underline',
                fontWeight: 400
              }}
            >
              Termos de uso
            </a>
          </div>
          
          {/* Segunda linha: Copyright */}
          <span
            style={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontSize: '14px',
              color: '#000000',
              fontWeight: 400
            }}
          >
            © 2022 Todos os direitos reservados
          </span>
        </div>
      </div>

      {/* 
        ========================================
        SEÇÃO 9: CARDS DE CONTEÚDO
        ========================================
      */}
      <div className="cards-container" style={{ marginTop: '-100px' }}>
        {CONTENT_CARDS.map((card) => (
          <ContentCard key={card.id} card={card} />
        ))}
      </div>
      
      {/* 
        ========================================
        SEÇÃO 6: IMAGEM DE FUNDO INFERIOR
        ========================================
      */}
      
      {/* 
        Imagem de fundo na parte inferior da página
        - Posicionamento após os cards
        - Largura total da tela
        - Qualidade otimizada para performance
      */}
      <div
        style={{
          border: `4px solid ${colors.secondary}`, // Borda dourada
          borderRadius: '8px', // Bordas arredondadas
          overflow: 'hidden', // Esconde bordas internas
          boxShadow: '0 4px 15px rgba(212, 196, 126, 0.3)' // Sombra dourada sutil
        }}
      >
       <Image
  src="/images/capa3.png"
  alt="Imagem de fundo inferior - Capa 3"
  width={1920}
  height={600}
  className="w-full h-auto"
  quality={85}
  loading="lazy"
/>
        
        {/* Imagem das medalhas dentro da imagem capa3 */}
        <div style={{ position: 'relative' }}>
        <Image
          src="/images/med.png"
          alt="Medalhas olímpicas - Dentro da capa3"
          width={450}
          height={200}
          style={{
            position: 'absolute',
            top: '3px', // Distância do topo da imagem capa3
            left: '3px', // Distância da esquerda da imagem capa3
            zIndex: 2, // Sobre a imagem capa3
            opacity: 1,
            borderRadius: '8px' // Bordas arredondadas
          }}
          quality={90} // Alta qualidade para a imagem das medalhas
        />
        </div>
      </div>
      
      {/* 
        ========================================
        SEÇÃO 7: TEXTO DE PRIVACIDADE
        ========================================
      */}
      
      {/* 
        Aviso de privacidade e proteção de dados
        - Posicionamento absoluto específico
        - Tipografia pequena para não interferir no design
        - Conformidade com LGPD
      */}
      <div className="privacy-text" style={typography.styles.small}>
        NÃO SE PREOCUPE, SEUS DADOS ESTÃO PROTEGIDOS DE ACORDO COM A LEI LGPD.
      </div>
    </div>
  );
}
