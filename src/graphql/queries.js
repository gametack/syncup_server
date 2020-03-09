// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    display_name
    first_name
    last_name
    email
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      display_name
      first_name
      last_name
      email
    }
    nextToken
  }
}
`;
export const getStage = `query GetStage($id: ID!) {
  getStage(id: $id) {
    id
    name
    description
    queue {
      id
      media
      name
      reference
    }
    playlists {
      id
      media
      name
      reference
    }
    participants {
      id
      display_name
      first_name
      last_name
      email
    }
  }
}
`;
export const listStages = `query ListStages(
  $filter: ModelStageFilterInput
  $limit: Int
  $nextToken: String
) {
  listStages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      queue {
        id
        media
        name
        reference
      }
      playlists {
        id
        media
        name
        reference
      }
      participants {
        id
        display_name
        first_name
        last_name
        email
      }
    }
    nextToken
  }
}
`;
export const getSong = `query GetSong($id: ID!) {
  getSong(id: $id) {
    id
    media
    name
    reference
  }
}
`;
export const listSongs = `query ListSongs(
  $filter: ModelSongFilterInput
  $limit: Int
  $nextToken: String
) {
  listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      media
      name
      reference
    }
    nextToken
  }
}
`;
