import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prosjekt',
  title: 'Prosjekt',
  type: 'document',
  fields: [
    defineField({
      name: 'tittel',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'beskrivelse',
      title: 'Beskrivelse',
      type: 'string',
    }),
    defineField({
      name: 'teknologier',
      title: 'Teknologier',
      type: 'string',
    }),
    defineField({
      name: 'hovedBilde',
      title: 'Hoved bilde',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'tittel',
      media: 'mainImage',
    },
  },
})
