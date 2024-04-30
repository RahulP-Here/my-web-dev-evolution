// ----------------------------
/*FOR PROJECT-CARD*/

let cards = {
    logo_img: ['./Project-1/img/logo/logo.png'],
    title: ['HTML Cheatsheet'],
    desc:['HTML Cheatsheet serves as a quick reference guide for essential HTML elements and syntax'],
    tech: [
        ["HTML5"],
    ],
    view: ['./Project-1/index.html']
}

Array.from(cards.logo_img).forEach((element, index) => {
    let logo = element;
    let title = cards.title[index];
    let desc = cards.desc[index];
    let view = cards.view[index];
    let badges = ''
    Array.from(cards.tech[index]).forEach((element) => {
        badges += `<span class="badge">${element}</span>`
    })

    let project = document.createElement('div');
    project.classList.add('project-card');
    project.innerHTML = `
        <div class="title">
            <img src="${logo}" alt="Project 1 Thumbnail">
            <h3>${title}</h3>
        </div>
        <p>${desc}</p>
        <div class="tech-stack">
            ${badges}
        </div>
        <a href="${view}" class="btn">View Project</a>
    `;

    document.body.querySelector('.container').appendChild(project);

});


// let project = document.createElement('div');
// project.classList.add('project-card');
// document.body.querySelector('.Questions').appendChild(div);

{/* <div class="project-card">
                <div class="title">
                    <img src="./img/RP.jpg" alt="Project 1 Thumbnail">
                    <h3>Project 1 Title</h3>
                </div>
                <p>A brief description of Project 1. Lorem ipsum dolor sit amet...</p>
                <div class="tech-stack">
                    <span class="badge">HTML5</span>
                    <span class="badge">CSS3</span>
                </div>
                <a href="projects/project1/" class="btn">View Project</a>
            </div> */}