
const sidebarNav = document.querySelector('.sidebar');
const mainSection = document.querySelector('.main');
const headerSection = document.querySelector('header');

const primaryColor = '#4834d4'
const warningColor = '#f0932b'
const successColor = '#6ab04c'
const dangerColor = '#eb4d4b'


// Task btn sidebar \\

const sidebarBtn = document.querySelector('.navbar-icon');


sidebarBtn.addEventListener('click', () => {
    
    sidebarNav.classList.toggle('w250');
    mainSection.classList.toggle('ml250');
    
});

// =================\\



// Task mode btn \\
const modeBtn = document.querySelector('.mode');
const lightMode = document.querySelector('.mode-light');
const darkMode = document.querySelector('.mode-dark');


function removeMode(mode) {
    headerSection.classList.remove(mode);
    mainSection.classList.remove(mode);
    sidebarNav.classList.remove(mode);
}

function addMode(mode) {
    sidebarNav.classList.add(mode);
    mainSection.classList.add(mode);
    headerSection.classList.add(mode);
}


modeBtn.addEventListener('click', () =>  {
    lightMode.classList.toggle('mode-active');
    darkMode.classList.toggle('mode-active');
});
lightMode.addEventListener('click', (e) => {
    e.preventDefault();
    removeMode('light');
    addMode('dark');



});
darkMode.addEventListener('click', (e) => {
    e.preventDefault();
    removeMode('dark');
    addMode('light');


});



// =================\\

// notifications btn 
const notificationBtn = document.querySelector('.bell-btn');
const notificationsMenu = document.querySelector('.notifications');
notificationBtn.addEventListener('click', () => {
	notificationsMenu.classList.toggle('notifications--active');
});



// =================\\


// Avatar Btn \\

const avatarBtn = document.querySelector('.avatar');
const menuUser = document.querySelector('.user-menu') 

avatarBtn.addEventListener('click', () => {
    menuUser.classList.toggle('user-menu--active');
});

// ===========\\


//=========== Canvas ============\\

var ctx = document.getElementById('myChart')
ctx.height = 500
ctx.width = 500
var data = {
	labels: ['January', 'February', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	datasets: [{
		fill: false,
		label: 'Completed',
		borderColor: successColor,
		data: [120, 115, 130, 100, 123, 88, 99, 66, 120, 52, 59],
		borderWidth: 2,
		lineTension: 0,
	}, {
		fill: false,
		label: 'Issues',
		borderColor: dangerColor,
		data: [66, 44, 12, 48, 99, 56, 78, 23, 100, 22, 47],
		borderWidth: 2,
		lineTension: 0,
	}]
}

var lineChart = new Chart(ctx, {
	type: 'line',
	data: data,
	options: {
		maintainAspectRatio: false,
		bezierCurve: false,
	}
})

