function card(request, response) {
  response.json([
    {
      id: 1,
      name: 'react hex converter',
      alt: 'hex converter website image',
      link: 'https://hopeful-noether-d6c814.netlify.app/',
      description: 'Projeto de conversor de Hex para RGB e RGB para Hex.',
      github: 'https://github.com/vict3or/react-hex-converter',
      image: 'https://images.prismic.io/victor-oliveira/5dbce414-fda1-4a6e-b3f3-a3b06a173f7c_hexToRgb.png?auto=compress,format',
    },
    {
      id: 2,
      name: 'react image search',
      alt: 'image search website image',
      link: 'link: https://sherlockimg.netlify.app/',
      description: 'Projeto de pesquisa de imagens.',
      github: 'https://github.com/vict3or/react-image-search',
      image: 'https://images.prismic.io/victor-oliveira/03662756-0d9a-4792-b351-22445011ddc0_imageSearcher.png?auto=compress,format'
    },
    {
      id: 3,
      name: 'expense tracker',
      alt: 'expense tracker website image',
      link: 'https://awesome-thompson-0ea580.netlify.app/',
      description: 'Projeto para balanço de despesas.',
      github: 'https://github.com/vict3or/Expense-Tracker-React',
      image: 'https://images.prismic.io/victor-oliveira/fd25cb96-d3f3-41ce-a18c-efd07c1dc6d1_expenseTracker.png?auto=compress,format'
    },
    {
      id: 4,
      name: 'react blog',
      alt: 'blog website image',
      link: 'link: https://optimistic-shannon-aedbac.netlify.app/',
      description: 'Projeto de blog com funcionalidade de adicionar e remover postagem.',
      github: 'https://github.com/vict3or/React-blog',
      image: 'https://images.prismic.io/victor-oliveira/f904b5f8-bb40-4eaf-9572-edc9c7680e0e_reactBlog.png?auto=compress,format'
    },
    {
      id: 5,
      name: 'proffy',
      alt: 'proffy website image',
      link: 'https://victor-nlw-proffy.herokuapp.com/',
      description: 'Projeto de uma plataforma de estudos online.',
      github: 'https://github.com/vict3or/nlw-proffy',
      image: 'https://images.prismic.io/victor-oliveira/593c25ff-a198-435e-9761-b190e4248a3a_proffy.png?auto=compress,format'
    },
    {
      id: 6,
      name: 'livrorama',
      alt: 'display of books website image',
      description: 'Um projeto para adicionar e remover livros.',
      link: 'https://vict3or.github.io/livrorama/',
      github: 'https://github.com/vict3or/livrorama',
      image: 'https://images.prismic.io/victor-oliveira/e9402a31-2339-466c-ba21-77546cd89977_livrorama.png?auto=compress,format'
    }
  ])
}

export default card