function init() {
  let commentsContainer = document.getElementsByClassName('seccionComments')[0];
  let commentsForm = document.getElementById('formComment');
  let warningMessage = document.getElementById('warning');
  
  let Comment = (name, comment) => `
    <div class="comment">
      <p class="comment-user">${name}</p>
      <p class="comment-message">${comment}</p>
    </div>
  `

  commentsForm.addEventListener('submit', event => {
    event.preventDefault();
    
    let commenter = document.getElementById('username');
    let commenterMessage = document.getElementById('userComment');
       
    if(commenter.value !== '' && commenterMessage.value !== '') {
      commentsContainer.innerHTML += Comment(commenter.value, commenterMessage.value);
      warningMessage.style.display = 'none';
    }
    else {
      warningMessage.style.display = 'block'
    }
  })
}

init();