const monthEl=document.getElementById('month');
const dayEl=document.getElementById('day');
const numberEl=document.getElementById('number');
const yearEl=document.getElementById('year');

const date= new Date();
const month=date.getMonth();
monthEl.innerText = date.toLocaleString('en',{
    month:'long'
})
dayEl.innerText = date.toLocaleString('en',{
    weekday:'long'
});
numberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
