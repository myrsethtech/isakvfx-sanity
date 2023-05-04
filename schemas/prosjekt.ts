import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'fromDate',
      title: 'From Date',
      type: 'datetime',
    }),
    defineField({
      name: 'toDate',
      title: 'To Date',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
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
      title: 'title',
      media: 'mainImage',
    },
  },
})
