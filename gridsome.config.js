const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Gaby Jonna',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'Project',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'singles/**/*.md',
        typeName: 'Single',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projectsMainImage/**/*.md',
        typeName: 'ProjectsMainImage',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'singlesMainImage/**/*.md',
        typeName: 'SinglesMainImage',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'aboutText/**/*.md',
        typeName: 'AboutText',
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
