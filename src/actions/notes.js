export const fetchNotes = (notesArr) => {
    return {
        type: 'FETCH_NOTES',
        notes: notesArr
    }
}

export const createNote= (newNote) => {
    return {
      type: 'CREATE_NOTE',
      note: newNote
    }
  }

export const deleteNote= (id) => {
    return {
      type: 'DELETE_NOTE',
      id: id
    }
  }

export const viewNote= (note) => {
    return {
        type: 'VIEW_NOTE',
        note: note
    }
}

export const updateNote= (updatedNote) => {
  return {
      type: 'UPDATE_NOTE',
      note: updatedNote
  }
}

export const updateNoteSuccess= (updatedNote) => {
  return {
      type: 'UPDATE_NOTE_SUCCESS',
      note: updatedNote
  }
}

