const dash = document.querySelector('.dash');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const clear = document.querySelector('.clear');


dash.addEventListener('click', function(){
    sidebar.style.left = '0'
})
clear.addEventListener('click', function(){
    sidebar.style.left = '-340px';
})
document.addEventListener('click', function(e){
    if(e.target === container){
        sidebar.style.left = '-340px';
    }
})