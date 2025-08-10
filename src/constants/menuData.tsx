export const menu = [
  { label: "All", value: "all" },
  { label: "Published", value: "published" },
  { label: "Drafts", value: "draft" },
];

export const customizeColor = [
  { label: "Primary Color", key: "primaryColor" },
  { label: "Secondary Color", key: "secondaryColor" },
  { label: "Accent Color", key: "accentColor" },
  { label: "Text Color", key: "textColor" },
  { label: "Background Color", key: "backgroundColor" },
] as const;

export const IMAGE_TYPE = [
  "rounded-none",
  "rounded-lg",
  "rounded-2xl",
  "rounded-4xl",
  "rounded-full",
] as const;

export type ImageType = (typeof IMAGE_TYPE)[number];
export const customImageSizeOptions: { label: string; value: ImageType }[] = [
  { label: "None", value: "rounded-none" },
  { label: "Small", value: "rounded-lg" },
  { label: "Medium", value: "rounded-2xl" },
  { label: "Large", value: "rounded-4xl" },
  { label: "Full", value: "rounded-full" },
] as const;
