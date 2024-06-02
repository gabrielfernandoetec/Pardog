document.addEventListener('DOMContentLoaded', function() {
    const dogs = [
        {
            name: 'Nome:Cleber',
            age: 'idade:' + 3,
            bio: 'Cleber é um Bulldog que nasceu em Paris',
            img: 'img/bulldog-frances.jpg',
            match: 1
        },
        {
            name: 'Nome:Rex',
            age: 'idade:' + 5,
            bio: 'Rex adora correr no parque',
            img: 'img/borderCollie.png',
            match: 0
        },
        {
            name: 'Nome:Luna',
            age: 'idade:' + 2,
            bio: 'Luna é uma Golden adorável',
            img: 'img/golden.jpg',
            match: 0
        },
        {
            name: 'Nome:Maria Clara',
            age: 'idade:' + 2,
            bio: 'Maria Clara é elegante, sempre bem produzida',
            img: 'img/chowchow.jpg',
            match: 1
        },
        {
            name: 'Nome:Oswaldor',
            age: 'idade:' + 6,
            bio: 'Sempre Alerta💚💛💙',
            img: 'img/Pastor.jpg',
            match: 1
        },
        {
            name: 'Nome:Pituco',
            age: 'idade:' + 1,
            bio: 'Rebaixado, porém lindo',
            img: 'img/salsicha.jpg',
            match: 0
        },
        {
            name: 'Nome:Filo',
            age: 'idade:' + 4,
            bio: 'Mofadinho, gostosinho, fofinho.',
            img: 'img/mofadinho.jpg',
            match: 1
        }
    ];

    let currentIndex = 0;

    const likeButton = document.getElementById('like');
    const dislikeButton = document.getElementById('dislike');
    const photoImg = document.getElementById('photo-img');
    const dogName = document.getElementById('dog-name');
    const dogAge = document.getElementById('dog-age');
    const bio = document.getElementById('bio');

    function updateDogInfo(index) {
        photoImg.src = dogs[index].img;
        dogName.textContent = dogs[index].name;
        dogAge.textContent = dogs[index].age;
        bio.textContent = dogs[index].bio;
    }

    function handleLike() {
        if (dogs[currentIndex].match === 1) {
            alert('Você achou seu Pardog perfeito corra mandar um "AU AU AU" na aba mensagens');
            
        } else {
            currentIndex = (currentIndex + 1) % dogs.length;
            updateDogInfo(currentIndex);
        }
    }

    likeButton.addEventListener('click', handleLike);

    likeButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % dogs.length;
        updateDogInfo(currentIndex);
        }
    );

    dislikeButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % dogs.length;
        updateDogInfo(currentIndex);
        }
    );

    updateDogInfo(currentIndex);
});
