import type { GetStaticProps, NextPage } from 'next'
import {Text, Stack, Grid, Image, Container, Link, LinkBox, LinkOverlay, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react'
import api, { Article, Tag } from '../articles/api'

type Props = {
  articles: Article[];
  tags: Tag[];
}

export const getStaticProps : GetStaticProps = async () =>{
  const {articles, tags} = await api.list();
  return {
    props: {
      articles,
      tags,
    },
  }
}
const Home: NextPage<Props> = ({articles, tags}) => {
  console.log(articles)
  return (
    <Container maxWidth="container.xl">
       <Stack>
          <Text fontSize="3xl" textDecoration="underline">Acumulado Grilla</Text>
          <Breadcrumb separator=".">
            {tags.map((tag) =>(
               <BreadcrumbItem key={tag.slug}>
                  <BreadcrumbLink color="linkedin.500" href={`/${tag.slug}`}>{tag.text}</BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <Grid gap={6} templateColumns="repeat(auto-fill, minmax(250px,1fr))">
            {articles.map((article) => (
              <LinkBox key={article._id}>
                <Stack fontFamily="Arial">
                <Image _hover={{
                  filter: "brightness(110%)",
                }} 
                height={256}
                objectFit ="cover"
                src = {article.promo_items?.basic?.url!} 
                alt={article.headlines.basic} 
                transition= "all .2s ease-in-out" />
                <Stack spacing={0}>
                  <Text as={LinkOverlay} href= {article.website_url} isExternal fontSize="lg" fontWeight="bold" lineHeight="normal">{article.headlines.basic}</Text>
                  <Text fontSize="sm" color= "gray.500">{article.display_date}</Text>
                </Stack> 
              </Stack>
              </LinkBox>
            ))}
          </Grid>
      </Stack>
    </Container>
  )
}

export default Home
