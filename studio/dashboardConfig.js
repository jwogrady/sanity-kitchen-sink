export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8f3addfa31dd00995e76c8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-q9w7zduy',
                  apiId: '7ed11d7d-f19b-47ff-9b73-753b48a641c0'
                },
                {
                  buildHookId: '5f8f3adda0419f00a557643f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vmmzexqc',
                  apiId: '7eb8c768-7fd6-492e-bdfc-9eb7e26ac95b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jwogrady/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vmmzexqc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
