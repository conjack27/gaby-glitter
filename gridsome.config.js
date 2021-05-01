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
        path: 'oneoffs/**/*.md',
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
