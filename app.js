'use strict'
const switcher = document.querySelector('.dark-theme');

switcher.addEventListener('click', function() {
document.body.classList.toggle('dark-theme')
var classname=document.body.classname;
if (classname=="dark-theme") {
    this.textcontent=".dark-theme";
} else {
    this.textcontent=".dark-theme";
}
console.log('current class name'+classname);
});
