import Prismic from '@prismicio/client'

const apiEndpoint = "https://victor-portifolio.cdn.prismic.io/api/v2";
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;
const client = Prismic.client(apiEndpoint, { accessToken })

export async function getProjects() {
  const response = await client.query('', { orderings : '[document.id]' })
  const projects = response.results.map((item) => {
    return getFormatedProjects(item.data, item.uid)
  })
  return projects
}

function getFormatedProjects(prismicData, id) {
  const name = prismicData.name[0].text
  const description = prismicData.description[0].text
  const image = prismicData.image
  const repository = prismicData.repository.url
  const url = prismicData.url.url

  return {
    id,
    name,
    description,
    image,
    repository,
    url
  }
}