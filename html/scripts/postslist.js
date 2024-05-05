
function showModal(postId) {
    const modal = document.getElementById('deleteModal');
    modal.style.display = 'block';

    const yesBtn = document.getElementById('deleteYesBtn');
    const noBtn = document.getElementById('deleteNoBtn');

    yesBtn.addEventListener('click', function() {
        
        const post = document.getElementById(postId);
        post.parentNode.removeChild(post);

        modal.style.display = 'none';
    });

    noBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}


window.addEventListener('click', function(event) {
    const modal = document.getElementById('deleteModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
