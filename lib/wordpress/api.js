//grab the first 4 post
export const ALL_POSTS = `query AllPosts{
    posts(first:4, where: { orderby: {field: DATE, order: DESC}}){
        nodes{
            id
            date
            title
            slug
            excerpt
        }
    }
}`;
//get all slugs for static paths / static generation
export const GET_ALL_POSTS_WITH_SLUG = `
{
    posts(first: 4){
        nodes{
            slug
        }
    }
}
`;
//get post by slug, so we can display to the user
export const GET_POST_BY_SLUG = `query PostBySlug ($id: ID!, $idType:PostIdType!){
    post(id: $id, idType: $idType) {
      date
      slug
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
}`;

export const GET_HOME_PAGE = `query getHomePage {
    page(id: 13, idType: DATABASE_ID) {
        id
        slug
        title
        content(format: RENDERED)
        homeFieldGroup {
          bannerHeading
          bannerSubHeading
          bannerImage {
            sourceUrl
          }
        }
        homeStats {
          stat1
          stat1Description
          stat2
          stat2Description
          stat3
          stat3Description
        }
        homeWhyUs {
          sectionHeading
          whyUs1Description
          whyUs1Icon {
            sourceUrl
          }
          whyUs1Title
          whyUs2Description
          whyUs2Icon {
            sourceUrl
          }
          whyUs2Title
          whyUs3Description
          whyUs3Icon {
            sourceUrl
          }
          whyUs3Title
        }
    }
}`;

export const GET_SAMPLE_PAGE = `query getSamplePage {
    page(id: 2, idType: DATABASE_ID) {
      id
      slug
      title
      content(format: RENDERED)
      demoFieldGroup {
        customText
      }
    }
}`;