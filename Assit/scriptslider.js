let next = document.querySelector('.next-s')
let prev = document.querySelector('.prev-s')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slides').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slides').prepend(items[items.length - 1]) // here the length of items = 6
})