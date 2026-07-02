import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Autor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "role", title: "Cargo", type: "string" }),
    defineField({
      name: "avatar",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "avatar" } },
});
