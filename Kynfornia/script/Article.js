class Article {
	constructor(user, heading, content) {
		this.creator = user.name; // poster's user name
		
		// poster's pfp
		this.generatePFP(user.pfp);
		
		// user generated heading for the post
		this.generateHeader(heading);
		
		// user generated content for the post
		this.content = document.createElement("p");
		this.content.innerHTML = content;
		
		// formatting div
		this.groupElements();
		
		// generate article
		this.generateArticle();
	}
	
	generatePFP(img) {
		this.postpfp = document.createElement("img"); 
		this.postpfp.classList = "mr-3 pfp";
		this.postpfp.src = img;
		this.postpfp.alt = this.creator + "'s pfp";
	}
	
	generateHeader(heading) {
		this.heading = document.createElement("h5");
		this.heading.classList = "mt-0";
		this.heading.innerHTML = heading;
	}
	
	groupElements() {
		this.div = document.createElement("div");
		this.div.classList = "media-body";
		this.div.innerHTML = this.heading.textContent +
													"<hr class=\"my-0\">" +
													this.content.textContent;
	}
	
	generateArticle() {
		this.article = document.createElement("article");
		this.article.classList = "bg-gold p-3 rounded media overflow-hidden";
		this.article.appendChild(this.postpfp);
		this.article.appendChild(this.div);
	}
	
}