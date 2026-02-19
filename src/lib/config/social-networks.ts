/**
 * Configuración visual de Redes Sociales
 * @module lib/config/social-networks
 */

export interface SocialNetworkStyle {
  bg: string;
  text: string;
  hover: string;
}

export const socialNetworkColors: Record<string, SocialNetworkStyle> = {
  orcid: {
    bg: 'bg-[#A6CE39]/20',
    text: 'text-[#A6CE39]',
    hover: 'hover:bg-[#A6CE39]/30',
  },
  googleScholar: {
    bg: 'bg-[#4285F4]/20',
    text: 'text-[#4285F4]',
    hover: 'hover:bg-[#4285F4]/30',
  },
  linkedin: {
    bg: 'bg-[#0A66C2]/20',
    text: 'text-[#0A66C2]',
    hover: 'hover:bg-[#0A66C2]/30',
  },
  researchGate: {
    bg: 'bg-[#00CCBB]/20',
    text: 'text-[#00CCBB]',
    hover: 'hover:bg-[#00CCBB]/30',
  },
};

export function getSocialNetworkClasses(network: keyof typeof socialNetworkColors): string {
  const style = socialNetworkColors[network];
  return `${style.bg} ${style.text} ${style.hover}`;
}
