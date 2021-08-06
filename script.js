// declare our target elements as variables
var navLinkDesign = document.getElementById('navLinkDesign');
var navLinkDev = document.getElementById('navLinkDev');
var navLinkDrum = document.getElementById('navLinkDrum');
var navImgDesign = document.getElementById('navImgDesign');
var navImgDev = document.getElementById('navImgDev');
var navImgDrum = document.getElementById('navImgDrum');

// Reusable mouseover and mouseout functions to add/remove the class "active" which adds/removes the hover styles
// 'target' is the argument that can be anything when you call the function, e.g. navImgDev
function mOver(target) {
  target.classList.add("active");
}
function mOut(target) {
  target.classList.remove("active");
}

/* Design link and image hover effect */
// Highlight img when hovering over link
navLinkDesign.addEventListener('mouseover', function () {
	mOver(navImgDesign);
}, false);
navLinkDesign.addEventListener('mouseout', function () {
	mOut(navImgDesign);
}, false);
// Highlight link when hovering over img
navImgDesign.addEventListener('mouseover', function () {
	mOver(navLinkDesign);
}, false);
navImgDesign.addEventListener('mouseout', function () {
	mOut(navLinkDesign);
}, false);


/* Dev link and image hover effect */
// Highlight img when hovering over link
navLinkDev.addEventListener('mouseover', function () {
	mOver(navImgDev);
}, false);
navLinkDev.addEventListener('mouseout', function () {
	mOut(navImgDev);
}, false);
// Highlight link when hovering over img
navImgDev.addEventListener('mouseover', function () {
	mOver(navLinkDev);
}, false);
navImgDev.addEventListener('mouseout', function () {
	mOut(navLinkDev);
}, false);

/* Drum link and image hover effect */
// Highlight img when hovering over link
navLinkDrum.addEventListener('mouseover', function () {
	mOver(navImgDrum);
}, false);
navLinkDrum.addEventListener('mouseout', function () {
	mOut(navImgDrum);
}, false);
// Highlight link when hovering over img
navImgDrum.addEventListener('mouseover', function () {
	mOver(navLinkDrum);
}, false);
navImgDrum.addEventListener('mouseout', function () {
	mOut(navLinkDrum);
}, false);

