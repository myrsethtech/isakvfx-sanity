import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'Title on front page',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Heading on front page',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description on front page',
    }),
  ],
})
