import { gql } from 'apollo-server-express'
import { FeaturedVideo, VideoHero } from '../../src/models/FeaturedContent'
import { CategoryFeaturedVideos } from '../../src/entities/CategoryFeaturedVideos'

export const GET_VIDEO_HERO = gql`
  query GetVideoHero {
    videoHero {
      heroTitle
      heroVideoCutUrl
      heroPosterUrl
      videoId
    }
  }
`
export type GetVideoHero = {
  videoHero: VideoHero | null
}

export const GET_CATEGORY_FEATURED_VIDEOS = gql`
  query GetCategoryFeaturedVideos($categoryId: ID!) {
    categoryFeaturedVideos(categoryId: $categoryId) {
      videoCutUrl
      videoId
    }
  }
`
export type GetCategoryFeaturedVideos = {
  categoryFeaturedVideos: {
    videoId: string
    videoCutUrl: string
  }
}
export type GetCategoryFeaturedVideosArgs = {
  categoryId: string
}

export type GetAllCategoriesFeaturedVideosArgs = {
  videosLimit: number
}

export const GET_ALL_CATEGORIES_FEATURED_VIDEOS = gql`
  query GetAllCategoriesFeaturedVideos($videosLimit: Int!) {
    allCategoriesFeaturedVideos(videosLimit: $videosLimit) {
      categoryId
      categoryFeaturedVideos {
        videoId
        videoCutUrl
      }
    }
  }
`
export type GetAllCategoriesFeaturedVideos = {
  allCategoriesFeaturedVideos: CategoryFeaturedVideos[] | null
}

export const SET_VIDEO_HERO = gql`
  mutation SetVideoHero($newVideoHero: VideoHeroInput!) {
    setVideoHero(newVideoHero: $newVideoHero) {
      videoId
      heroTitle
      heroVideoCutUrl
      heroPosterUrl
    }
  }
`
export type SetVideoHero = {
  setVideoHero: VideoHero
}
export type SetVideoHeroArgs = {
  newVideoHero: {
    videoId: string
    heroTitle: string
    heroVideoCutUrl: string
    heroPosterUrl: string
  }
}

export const SET_CATEGORY_FEATURED_VIDEOS = gql`
  mutation SetCategoryFeaturedVideos($categoryId: ID!, $videos: [FeaturedVideoInput!]!) {
    setCategoryFeaturedVideos(categoryId: $categoryId, videos: $videos) {
      videoId
      videoCutUrl
    }
  }
`
export type SetCategoryFeaturedVideos = {
  setCategoryFeaturedVideos: FeaturedVideo[]
}
export type SetCategoryFeaturedVideosArgs = {
  categoryId: string
  videos: FeaturedVideo[]
}
