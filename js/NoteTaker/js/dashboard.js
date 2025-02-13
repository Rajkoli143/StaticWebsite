// Get DOM elements
const notesGrid = document.getElementById('notes-grid');
const noteModal = document.getElementById('note-modal');
const noteForm = document.getElementById('note-form');
const newNoteBtn = document.getElementById('new-note-btn');
const cancelNoteBtn = document.getElementById('cancel-note');
const modalTitle = document.getElementById('modal-title');

let editingNoteId = null;

// Show/hide modal
function toggleModal(show = true) {
    noteModal.style.display = show ? 'flex' : 'none';
    if (!show) {
        noteForm.reset();
        editingNoteId = null;
        modalTitle.textContent = 'New Note';
    }
}

// Create note card element
function createNoteCard(note) {
    const div = document.createElement('div');
    div.className = 'note-card';
    div.innerHTML = `
        <h3>${note.title}</h3>
        <div class="note-actions">
            <button onclick="editNote('${note.id}')" class="btn btn-outline">Edit</button>
            <button onclick="deleteNote('${note.id}')" class="btn btn-outline">Delete</button>
        </div>
        <div class="note-content">
            ${note.content}
        </div>
    `;
    return div;
}

// Fetch all notes
async function fetchNotes() {
    const { data: notes, error } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching notes:', error);
        return;
    }

    notesGrid.innerHTML = '';
    notes.forEach(note => {
        notesGrid.appendChild(createNoteCard(note));
    });
}

// Create/Update note
async function saveNote(title, content) {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
        alert('Please sign in to create notes');
        return;
    }

    const note = {
        title,
        content,
        user_id: user.id
    };

    let error;

    if (editingNoteId) {
        const { error: updateError } = await supabase
            .from('notes')
            .update(note)
            .eq('id', editingNoteId);
        error = updateError;
    } else {
        const { error: insertError } = await supabase
            .from('notes')
            .insert([note]);
        error = insertError;
    }

    if (error) {
        alert('Error saving note: ' + error.message);
        return;
    }

    toggleModal(false);
    fetchNotes();
}

// Edit note
async function editNote(id) {
    const { data: note, error } = await supabase
        .from('notes')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        alert('Error fetching note: ' + error.message);
        return;
    }

    editingNoteId = id;
    document.getElementById('note-title').value = note.title;
    document.getElementById('note-content').value = note.content;
    modalTitle.textContent = 'Edit Note';
    toggleModal(true);
}

// Delete note
async function deleteNote(id) {
    if (!confirm('Are you sure you want to delete this note?')) {
        return;
    }

    const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id);

    if (error) {
        alert('Error deleting note: ' + error.message);
        return;
    }

    fetchNotes();
}

// Event Listeners
newNoteBtn.addEventListener('click', () => toggleModal(true));
cancelNoteBtn.addEventListener('click', () => toggleModal(false));

noteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    await saveNote(title, content);
});

// Initialize dashboard
checkAuth().then(user => {
    if (user) {
        fetchNotes();
    }
});
