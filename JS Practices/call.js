const NasaHacker = {
    name : 'HtmlHacker',
    content : 'Html',
    About : function(rating, support) {
        console.log(`Hi! I'am NASA hacker. ${this.name} Using html as hacking Lang. ${this.content} Html documentary encourage him to do it. My rating for him ${rating}. Also  ${support} nasa!!!!!`);
    }
}


// NasaHacker.About(0, 'desliked');

const NasaHacker2 = {
    name : 'cssHacker',
    content : 'css',
}

NasaHacker.About.call(NasaHacker2,1, 'Maybe Liked' );