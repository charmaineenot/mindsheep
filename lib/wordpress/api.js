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

export const FOOTER_DATA = `query getFooterData {
    page(id: 13, idType: DATABASE_ID) {
        id
        slug
        title
        content(format: RENDERED)
        homePartners {
          partner1Image {
            sourceUrl
          }
          partner2Image {
            sourceUrl
          }
          partner3Image {
            sourceUrl
          }
          partner4Image {
            sourceUrl
          }
        }
        homeTestimonials {
          testimonialHeading
          testimonial1
          image1 {
            sourceUrl
          }
          name1
          titleposition1
          testimonial2
          image2 {
            sourceUrl
          }
          name2
          titleposition2
          testimonial3
          image3 {
            sourceUrl
          }
          name3
          titleposition3
        }
        homeContact {
          homeContactHeading
          homeContactDescription
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
            mediaItemUrl
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
          whyUsHeading
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
        homeAbout {
          shortDescription
        }
        homeServices {
          servicesHeading
          homeServices1Title
          homeServices1Icon {
            sourceUrl
          }
          homeServices2Title
          homeServices2Icon {
            sourceUrl
          }
          homeServices3Title
          homeServices3Icon {
            sourceUrl
          }
          homeServices4Title
          homeServices4Icon {
            sourceUrl
          }
          homeServices5Title
          homeServices5Icon {
            sourceUrl
          }
          homeServices6Title
          homeServices6Icon {
            sourceUrl
          }
          homeServices7Title
          homeServices7Icon {
            sourceUrl
          }
        }
        homePartners {
          partner1Image {
            sourceUrl
          }
          partner2Image {
            sourceUrl
          }
          partner3Image {
            sourceUrl
          }
          partner4Image {
            sourceUrl
          }
        }
        homeTestimonials {
          testimonialHeading
          testimonial1
          image1 {
            sourceUrl
          }
          name1
          titleposition1
          testimonial2
          image2 {
            sourceUrl
          }
          name2
          titleposition2
          testimonial3
          image3 {
            sourceUrl
          }
          name3
          titleposition3
        }
        homeContact {
          homeContactHeading
          homeContactDescription
        }
    }
}`;

export const GET_OUR_APPROACH_PAGE = `query getOurApproachPage {
  page(id: 139, idType: DATABASE_ID) {
    id
    slug
    title
    content(format: RENDERED)
    ourApproach {
      bannerHeading139
      bannerSubHeading139
      bannerImage139 {
        mediaItemUrl
      }
    }
    homePartners {
      partner1Image {
        sourceUrl
      }
      partner2Image {
        sourceUrl
      }
      partner3Image {
        sourceUrl
      }
      partner4Image {
        sourceUrl
      }
    }
    ourApproachProcess {
      processHeading
      processImage {
        sourceUrl
      }
      process1Title
      process1Description
      process2Title
      process2Description
      process3Title
      process3Description
      process4Title
      process4Description
      process5Title
      process5Description
    }
    ourApproachFormula {
      formulaHeading
      formulaDescription
      formulaImage {
        sourceUrl
      }
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

export const GET_OUR_STORY_PAGE = `query getOurStoryPage {
  page(id: 106, idType: DATABASE_ID) {
      id
      slug
      title
      content(format: RENDERED)
      ourStory {
        bannerheading
        bannersubheading
        bannerImage {
          sourceUrl
        }
      }
  }
}`;