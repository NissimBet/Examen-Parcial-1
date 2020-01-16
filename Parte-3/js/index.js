function init() {
  let commentsContainer = document.getElementsByClassName('seccionComments')[0];
  let commentsForm = document.getElementById('formComment');
  let warningMessage = document.getElementById('warning');
  
  let commenter = document.getElementById('username');
  let commenterMessage = document.getElementById('userComment');

  let Comment = (name, comment) => `
    <div class="comment">
      <p class="comment-user">${name}</p>
      <p class="comment-message">${comment}</p>
    </div>
  `

  commentsForm.addEventListener('submit', event => {
    event.preventDefault();
    
       
    if(commenter.value !== '' && commenterMessage.value !== '') {
      commentsContainer.innerHTML += Comment(commenter.value, commenterMessage.value);
      warningMessage.style.display = 'none';
    }
    else {
      warningMessage.style.display = 'block'
    }
  })

  commenter.addEventListener("change", _ => {
    if(commenter.value === "") {
      warningMessage.style.display = 'block';
    }
    else {
      warningMessage.style.display = 'none';
    }
  })

  commenterMessage.addEventListener("change", _ => {
    if(commenterMessage.value === "") {
      warningMessage.style.display = 'block';
    }
    else {
      warningMessage.style.display = 'none';
    }
  })
}

init();