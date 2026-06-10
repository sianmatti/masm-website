export const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/masm/growth-diagnostic";

export function calendlyEmbedUrl() {
  const separator = calendlyUrl.includes("?") ? "&" : "?";
  return `${calendlyUrl}${separator}hide_gdpr_banner=1&background_color=f7f7f5&text_color=0a0a0a&primary_color=0a0a0a`;
}
