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
          testimonial4
          image4 {
            sourceUrl
          }
          name4
          titleposition4
          testimonial5
          image5 {
            sourceUrl
          }
          name5
          titleposition5
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
          bannerVideo1 {
            mediaItemUrl
          }
          bannerVideo2 {
            mediaItemUrl
          }
        }
        homeStats {
          stat1
          stat1Client
          stat1Company
          stat1Description
          stat1Heading
          stat1Testimonial
          stat2
          stat2Client
          stat2Company
          stat2Description
          stat2Heading
          stat2Testimonial
          stat3
          stat3Client
          stat3Company
          stat3Description
          stat3Heading
          stat3Testimonial
          stat4
          stat4Client
          stat4Company
          stat4Description
          stat4Heading
          stat4Testimonial
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
          shortDescription2

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
        ourStoryBannerVideo {
          mediaItemUrl
        }
      }
      whoWeAre {
        title1
        description1
        icon1 {
          sourceUrl
        }
        title2
        description2
        icon2 {
          sourceUrl
        }
        title3
        description3
        icon3 {
          sourceUrl
        }
        title4
        description4
        icon4 {
          sourceUrl
        }
        backgroundImage {
          sourceUrl
        }
        sectionHeading
      }
      ourTeam {
        memberName1
        memberTitle1
        memberDescription1
        memberImage1 {
          sourceUrl
        }
        memberName2
        memberTitle2
        memberDescription2
        memberImage2 {
          sourceUrl
        }
        memberName3
        memberTitle3
        memberDescription3
        memberImage3 {
          sourceUrl
        }
        memberName4
        memberTitle4
        memberDescription4
        memberImage4 {
          sourceUrl
        }
        memberName5
        memberTitle5
        memberDescription5
        memberImage5 {
          sourceUrl
        }
        memberName6
        memberTitle6
        memberDescription6
        memberImage6 {
          sourceUrl
        }
        memberName7
        memberTitle7
        memberDescription7
        memberImage7 {
          sourceUrl
        }
        memberName8
        memberTitle8
        memberDescription8
        memberImage8 {
          sourceUrl
        }
        ourTeamSectionHeading
      }
  }
}`;

export const GET_AUTOMATE_BUSINESS_PAGE = `query getAutomateBusinessPage {
  page(id: 255, idType: DATABASE_ID) {
    id
    slug
    title
    content(format: RENDERED)
    automateBusiness {
      automate1Heading
      automate1Description
      automate1Image {
        sourceUrl
      }
      automate2Heading
      automate2Description
      automate2Image {
        sourceUrl
      }
      automate3Heading
      automate3Description
      automate3Image {
        sourceUrl
      }
    }
  }
}`;

export const GET_BUILD_BRAND_PAGE = `query getBuildBrandPage {
  page(id: 288, idType: DATABASE_ID) {
    id
    slug
    title
    content(format: RENDERED)
    buildBrand {
      buildBrand1Heading
      buildBrand1Description
      buildBrand1Image {
        sourceUrl
      }
      buildBrand2Heading
      buildBrand2Description
      buildBrand2Image {
        sourceUrl
      }
      buildBrand3Heading
      buildBrand3Description
      buildBrand3Image {
        sourceUrl
      }
      brandingProcess1
      brandProcess1Icon {
        sourceUrl
      }
      brandingProcess2
      brandProcess2Icon {
        sourceUrl
      }
      brandingProcess3
      brandProcess3Icon {
        sourceUrl
      }
    }
  }
}`;

export const GET_GENERATE_LEADS_PAGE = `query getGenerateLeadsPage {
  page(id: 253, idType: DATABASE_ID) {
    id
    slug
    title
    content(format: RENDERED)
    leadGenerationPage {
      leadGenBannerTitle
      leadGenBannerSubheading
      leadGenBannerImage {
        sourceUrl
      }
      leadGenSection2BackgroundColor
      leadGenSection2Heading
      leadGenSection2Subheading
      leadGenSection2Image {
        sourceUrl
      }
      leadGenSection2ClientName
      leadGenSection2ClientPosition
      leadGenSection2Subheading2
      leadGenSection2Image2 {
        sourceUrl
      }
      leadGenSection2ClientName2
      leadGenSection2ClientPosition2
      leadGenSection3aTitle
      leadGenSection3aSubheading
      leadGenSection3aImage {
        sourceUrl
      }
      leadGenSection3bTitle
      leadGenSection3bSubheading
      leadGenSection3bImage {
        sourceUrl
      }
    }
  }
}`;

export const GET_PRIVACY_POLICY_PAGE = `query getPrivacyPolicyPage {
  page(id: "3", idType: DATABASE_ID) {
    id
    slug
    title
    content(format: RENDERED)
    privacyPolicy {
      policyContent
    }
  }
}`;

export const GET_LANDING_PAGE = `query getLandingPage {
  page(id: "590", idType: DATABASE_ID) {
    id
    slug
    title
    landingBanner {
      bannerContent
      bannerVideo {
        mediaItemUrl
      }
    }
    landingWhatWeDeliver {
      landingDeliverHeading
      leadsCountHeading
      weDeliver1
      weDeliver2
      weDeliver3
      denesImage {
        sourceUrl
      }
      backgroundImage {
        sourceUrl
      }
    }
    landingTestimonials {
      landingTestimonialHeading
      clientTestimonial1
      clientName1
      clientCompany1
      clientImage1 {
        sourceUrl
      }
      clientTestimonial2
      clientName2
      clientCompany2
      clientImage2 {
        sourceUrl
      }
      clientTestimonial3
      clientName3
      clientCompany3
      clientImage3 {
        sourceUrl
      }
      clientTestimonial4
      clientName4
      clientCompany4
      clientImage4 {
        sourceUrl
      }
    }
    landingHowWeWork {
      landingHowWeWorkHeading
      description
      image {
        sourceUrl
      }
    }
    landingWhyTrustUs {
      whyUsHeading
      whyUsTitle1
      whyUsDescription1
      whyUsIcon1 {
        sourceUrl
      }
      whyUsTitle2
      whyUsDescription2
      whyUsIcon2 {
        sourceUrl
      }
      whyUsTitle3
      whyUsDescription3
      whyUsIcon3 {
        sourceUrl
      }
      whyUsTitle4
      whyUsDescription4
      whyUsIcon4 {
        sourceUrl
      }
    }
    landingServices {
      servicesTitle1
      servicesDescription1
      servicesImage1 {
        sourceUrl
      }
      servicesTitle2
      servicesDescription2
      servicesImage2 {
        sourceUrl
      }
      servicesTitle3
      servicesDescription3
      servicesImage3 {
        sourceUrl
      }
      servicesTitle4
      servicesDescription4
      servicesImage4 {
        sourceUrl
      }
    }
  }
}`;

export const GET_LEAD_GEN_FOR_BUSINESS = `query getLeadGenForBusiness {
  page(id: "728", idType: DATABASE_ID) {
    id
    slug
    title
    leadGenForBusinessBanner {
      bannerHeading730
      bannerImage1 {
        sourceUrl
      }
      bannerImage2 {
        sourceUrl
      }
      bannerImage3 {
        sourceUrl
      }
      section2Heading730
      section2Subheading730
      section2Image {
        mediaItemUrl
      }
      section2GearImgSmall {
        sourceUrl
      }
      section2GearImgMed {
        sourceUrl
      }
      section2GearImgLarge {
        sourceUrl
      }
      section3GearImg {
        sourceUrl
      }
      section4Img1 {
        sourceUrl
      }
      section4Img2 {
        sourceUrl
      }
      section4Img3 {
        sourceUrl
      }
    }
  }
}`;