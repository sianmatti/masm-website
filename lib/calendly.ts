export const calendlyUrl = "https://calendly.com/masmgrowth-info/30min";

export function calendlyEmbedUrl(url = calendlyUrl) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}hide_gdpr_banner=1&background_color=f5f5f5&text_color=111111&primary_color=000000`;
}
