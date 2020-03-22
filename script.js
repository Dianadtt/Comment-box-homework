const comments = [{
    id: '1',
    email: 'razvan@gmail.com',
    image: '/avatar.png',
    name: 'Razvan',
    msg: 'Mesaj nr. 1'
}, ]


const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');
const commentList = document.querySelector('#commentList');
btn.addEventListener('click', function() {
    const id = (Math.floor(Math.random() * 1000)).toString();
    comments.push({
        id: id,
        name: 'Alex',
        email: 'alex@gmail.com',
        image: '/avatar.png',
        msg: input.value,
    });
    displayComments(comments, commentList);
})

displayComments(comments, commentList);

function displayComments(comments, containerNode) {
    function addParagraph(text) {
        const newP = document.createElement("p");
        newP.innerText = text;
        return newP;
    }

    function addTitle(title) {
        const h1 = document.createElement("h1");
        h1.innerText = title;
        return h1;
    }

    function addEmail(emailAddress) {
        const email = document.createElement("p");
        email.classList.add("emailText");
        email.innerHTML = emailAddress;
        return email;
    }

    function addImage(imageUrl) {
        const image = document.createElement("img");
        image.classList.add("avatar");
        image.setAttribute("src", imageUrl);
        return image;
    }

    function addRemoveBtn(commentId) {
        const btn = document.createElement("button");
        btn.classList.add("removeBtn");
        btn.innerHTML = "X";
        btn.setAttribute("data-value", commentId);
        btn.addEventListener("click", function() {
            const id = this.getAttribute('data-value');
            for (let i = 0; i < comments.length; i++) {
                const comment = comments[i];
                if (comment.id === id) {
                    comments.splice(i, 1);
                    break;
                }
            }
            displayComments(comments, commentList);
        });
        return btn;
    }

    function createComment(comment) {
        const containerBox = document.createElement('li');
        const image = addImage(comment.image);
        const title = addTitle(comment.name);
        const p = addParagraph(comment.msg);
        const email = addEmail(comment.email);
        const button = addRemoveBtn(comment.id);
        containerBox.appendChild(image);
        containerBox.appendChild(title);
        containerBox.appendChild(email);
        containerBox.appendChild(p);
        containerBox.appendChild(button);

        return containerBox;
    }


    containerNode.innerHTML = "";
    for (let idx = 0; idx < comments.length; idx++) {
        const comment = comments[idx];
        const commentNode = createComment(comment);
        containerNode.appendChild(commentNode);

    }
}