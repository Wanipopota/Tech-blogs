const post = async (event) => {
    console.log(id);
    const postId = event.currentTarget.getAttribute('data-id');
    console.log(postId);
  };

  document.querySelector('.post').addEventListener('click', post);