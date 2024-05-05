
function toggleEditMode() {
    const postTitle = document.querySelector('.post-title h1');
    const postText = document.querySelector('.post-text');
    const editBtn = document.getElementById('editBtn');

    if (editBtn.textContent === 'Edit') {
        postTitle.contentEditable = true;
        postText.contentEditable = true;
        postTitle.style.border = '1px solid pink';
        postText.style.border = '1px solid pink';
        editBtn.textContent = 'Save';
    } else {
        postTitle.contentEditable = false;
        postText.contentEditable = false;
        postTitle.style.border = 'none';
        postText.style.border = 'none';
        editBtn.textContent = 'Edit';
    }
}


function likePost() {
    const likeBtn = document.querySelector('.like-btn');
    const likeMessage = document.querySelector('.like-message');

    if (likeBtn.textContent === 'Like') {
        likeBtn.textContent = 'Liked!';
        likeMessage.textContent = '1 person likes this!';
    } else {
        const likes = parseInt(likeMessage.textContent);
        likeMessage.textContent = `${likes + 1} people like this!`;
    }
}


function addComment() {
    const commentInput = document.querySelector('.comment-input');
    const commentText = commentInput.value;
    const allComments = document.querySelector('.all-comments');

    if (commentText.trim() !== '') {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;
        allComments.prepend(commentDiv);
        commentInput.value = '';
    } else {
        alert('Please enter a comment!');
    }
}

// Event listeners
document.getElementById('editBtn').addEventListener('click', toggleEditMode);
document.querySelector('.like-btn').addEventListener('click', likePost);
document.querySelector('.comment-btn').addEventListener('click', addComment);
