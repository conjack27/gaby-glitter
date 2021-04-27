module.exports = {
  siteName: 'Gabrielle',
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
        path: 'one-offs/**/*.md',
        typeName: 'OneOff',
       
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
