// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    display_name
    first_name
    last_name
    email
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    display_name
    first_name
    last_name
    email
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    display_name
    first_name
    last_name
    email
  }
}
`;
export const onCreateStage = `subscription OnCreateStage {
  onCreateStage {
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
export const onUpdateStage = `subscription OnUpdateStage {
  onUpdateStage {
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
export const onDeleteStage = `subscription OnDeleteStage {
  onDeleteStage {
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
export const onCreateSong = `subscription OnCreateSong {
  onCreateSong {
    id
    media
    name
    reference
  }
}
`;
export const onUpdateSong = `subscription OnUpdateSong {
  onUpdateSong {
    id
    media
    name
    reference
  }
}
`;
export const onDeleteSong = `subscription OnDeleteSong {
  onDeleteSong {
    id
    media
    name
    reference
  }
}
`;
