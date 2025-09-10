/**
 * ===== DESIGN TOKENS - SISTEMA DE DESIGN POMPO OLIMPÍADAS =====
 * 
 * Este arquivo centraliza todas as definições de design do projeto,
 * incluindo cores, tipografia, espaçamentos e outros tokens visuais.
 * 
 * Benefícios:
 * - Consistência visual em todo o projeto
 * - Facilita manutenção e atualizações
 * - Padronização de cores e tipografia
 * - Reutilização de valores em diferentes componentes
 * 
 * Estrutura:
 * - colors: Paleta de cores principal e variações
 * - typography: Configurações de fonte, tamanhos e estilos
 * - spacing: Valores de espaçamento padronizados
 * - breakpoints: Pontos de quebra para responsividade
 */

// ===== PALETA DE CORES =====
/**
 * Sistema de cores baseado na identidade visual do evento
 * - Azul principal (#1A18BB): Cor primária da marca
 * - Dourado (#D4C47E): Cor secundária para destaques e bordas
 * - Branco (#FFFFFF): Cor neutra para textos e fundos
 */
export const colors = {
  // Cores primárias da marca
  primary: '#1A18BB',    // Azul principal - cor de destaque
  secondary: '#D4C47E',  // Dourado - cor de contraste e elegância
  white: '#FFFFFF',      // Branco - cor neutra base
  
  // Cores específicas para textos
  text: {
    primary: '#FFFFFF',   // Texto principal em branco
    secondary: '#D4C47E', // Texto secundário em dourado
    dark: '#1E40AF',      // Texto escuro para contraste
    light: '#FFFCFC'      // Texto claro para suavidade
  },
  
  // Cores de fundo para diferentes contextos
  background: {
    primary: '#1A18BB',   // Fundo principal azul
    secondary: '#D4C47E', // Fundo secundário dourado
    white: '#FFFFFF'      // Fundo branco neutro
  },
  
  // Cores para bordas e separadores
  border: {
    primary: '#D4C47E',   // Borda principal dourada
    secondary: '#1A18BB'  // Borda secundária azul
  }
} as const;

// ===== TIPOGRAFIA =====
export const typography = {
  // Famílias de fonte
  fontFamily: {
    oswald: 'var(--font-oswald), "Oswald", Arial, sans-serif',
    nunitoSans: 'var(--font-nunito-sans), "Nunito Sans", "Inter", system-ui, sans-serif',
    poppins: 'var(--font-poppins), "Poppins", "Inter", system-ui, sans-serif',
    paris2024: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
    inter: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif'
  },
  
  // Pesos de fonte
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  
  // Tamanhos de fonte
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
    '5xl': '38px',
    '6xl': '48px'
  },
  
  // Altura de linha
  lineHeight: {
    tight: '100%',
    normal: '123%',
    relaxed: '150%'
  },
  
  // Espaçamento entre letras
  letterSpacing: {
    tight: '-0.025em',
    normal: '0%',
    wide: '0.025em',
    wider: '0.5px'
  },
  
  // Estilos de texto pré-definidos
  styles: {
    // Título principal
    heading: {
      fontFamily: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '38px',
      lineHeight: '110%',
      letterSpacing: '-0.02em',
      color: colors.secondary
    },
    
    // Título secundário
    headingSecondary: {
      fontFamily: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '38px',
      lineHeight: '110%',
      letterSpacing: '-0.02em',
      color: colors.secondary
    },
    
    // Texto do corpo principal
    body: {
      fontFamily: '"Nunito Sans", "Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
      fontWeight: 300,
      fontSize: '28px',
      lineHeight: '123%',
      letterSpacing: '0%',
      color: colors.text.primary
    },
    
    // Texto do corpo em negrito
    bodyBold: {
      fontFamily: '"Nunito Sans", "Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
      fontWeight: 300,
      fontSize: '28px',
      lineHeight: '123%',
      letterSpacing: '0%',
      color: colors.secondary
    },
    
    // Texto descritivo (dentro do retângulo)
    descriptive: {
      fontFamily: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '140%',
      letterSpacing: '-0.01em',
      color: colors.text.primary
    },
    
    // Texto descritivo em negrito
    descriptiveBold: {
      fontFamily: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '140%',
      letterSpacing: '-0.01em',
      color: colors.text.primary
    },
    
    // Texto descritivo destacado (dourado)
    descriptiveHighlight: {
      fontFamily: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '140%',
      letterSpacing: '-0.01em',
      color: colors.secondary
    },
    
    // Texto pequeno
    small: {
      fontFamily: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '150%',
      letterSpacing: '0',
      color: colors.text.primary
    },
    
    // Input de formulário
    input: {
      fontFamily: '"Inter", "Roboto", "Segoe UI", system-ui, sans-serif',
      fontWeight: 500,
      fontSize: '16px',
      letterSpacing: '0.01em',
      color: colors.text.dark
    }
  }
} as const;

// ===== ESPAÇAMENTOS =====
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px'
} as const;

// ===== BORDAS =====
export const borders = {
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    full: '50%'
  },
  width: {
    thin: '1px',
    medium: '2px',
    thick: '5px'
  }
} as const;

// ===== SOMBRAS =====
export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1)'
} as const;

// ===== BREAKPOINTS =====
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;
