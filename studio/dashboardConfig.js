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
                  buildHookId: '5f8f4e56bf8aa30c470dce20',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-c2hn9hif',
                  apiId: '914f093b-e748-4796-967e-53f5e105f5db'
                },
                {
                  buildHookId: '5f8f4e57678dba0d881538eb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ddpztqjz',
                  apiId: 'a26ebe9e-b6eb-4b69-a3e0-9e6a72401349'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bjg813/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ddpztqjz.netlify.app', category: 'apps'}
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
