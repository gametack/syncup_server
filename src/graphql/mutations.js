// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    display_name
    first_name
    last_name
    email
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    display_name
    first_name
    last_name
    email
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    display_name
    first_name
    last_name
    email
  }
}
`;
export const createStage = `mutation CreateStage($input: CreateStageInput!) {
  createStage(input: $input) {
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
export const updateStage = `mutation UpdateStage($input: UpdateStageInput!) {
  updateStage(input: $input) {
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
export const deleteStage = `mutation DeleteStage($input: DeleteStageInput!) {
  deleteStage(input: $input) {
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
export const createSong = `mutation CreateSong($input: CreateSongInput!) {
  createSong(input: $input) {
    id
    media
    name
    reference
  }
}
`;
export const updateSong = `mutation UpdateSong($input: UpdateSongInput!) {
  updateSong(input: $input) {
    id
    media
    name
    reference
  }
}
`;
export const deleteSong = `mutation DeleteSong($input: DeleteSongInput!) {
  deleteSong(input: $input) {
    id
    media
    name
    reference
  }
}
`;
