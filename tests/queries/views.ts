import { gql } from 'apollo-server-express'
import { EntityViewsInfo } from '../../src/entities/EntityViewsInfo'
import { ChannelConnection, VideoConnection } from '../../src/types'

export const GET_MOST_VIEWED_VIDEOS_CONNECTION = gql`
  query GetMostViewedVideosConnection($periodDays: Int, $limit: Int!) {
    mostViewedVideosConnection(periodDays: $periodDays, limit: $limit) {
      edges {
        node {
          id
          views
        }
      }
    }
  }
`

export type GetMostViewedVideosConnection = {
  mostViewedVideosConnection: VideoConnection
}
export type GetMostViewedVideosConnectionArgs = {
  periodDays: number | null
  limit: number
}

export const GET_MOST_VIEWED_CHANNELS_CONNECTION = gql`
  query GetMostViewedChannelsConnection($periodDays: Int, $limit: Int!) {
    mostViewedChannelsConnection(periodDays: $periodDays, limit: $limit) {
      edges {
        node {
          id
          views
        }
      }
    }
  }
`

export type GetMostViewedChannelsConnection = {
  mostViewedChannelsConnection: ChannelConnection
}

export type GetMostViewedChannelsConnectionArgs = {
  periodDays: number | null
  limit: number
}

export const GET_MOST_VIEWED_CATEGORIES = gql`
  query GetMostViewedCategories($timePeriodDays: Int!) {
    mostViewedCategories(timePeriodDays: $timePeriodDays) {
      id
      views
    }
  }
`

export const GET_MOST_VIEWED_CATEGORIES_ALL_TIME = gql`
  query GetMostViewedVideosAllTime($limit: Int!) {
    mostViewedCategoriesAllTime(limit: $limit) {
      id
      views
    }
  }
`
export type GetMostViewedCategories = {
  mostViewedCategories: EntityViewsInfo[]
}
export type GetMostViewedCategoriesArgs = {
  timePeriodDays: number
}
export type GetMostViewedCategoriesAllTimeArgs = {
  limit: number
}
export type GetMostViewedCategoriesAllTime = {
  mostViewedCategoriesAllTime: EntityViewsInfo[]
}

export const ADD_VIDEO_VIEW = gql`
  mutation AddVideoView($videoId: ID!, $channelId: ID!, $categoryId: ID) {
    addVideoView(videoId: $videoId, channelId: $channelId, categoryId: $categoryId) {
      id
      views
    }
  }
`
export type AddVideoView = {
  addVideoView: EntityViewsInfo
}
export type AddVideoViewArgs = {
  videoId: string
  channelId: string
  categoryId?: string
}
