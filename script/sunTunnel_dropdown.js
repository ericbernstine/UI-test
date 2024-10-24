let img = document.querySelector('.shopBlock img');
let title = document.querySelector('.shopBlock h3');
let description = document.querySelector('.shopBlock p');
let target = '';
let button = document.querySelector('.shopBlock button');


document.getElementById('options').addEventListener('change', (event) => {
    let current = event.target.value;

    switch(current){
        case 'flexible':
            target = 'flexible';
            img.src = 'images/shop/sun_tunnels/flexible_suntunnel/flexible_suntunnel.png'
            title.innerText = 'Flexible Sun Tunnels';
            description.innerText = 'Flexible tubes are recommended when installation around obstacles within the loft space is required.'
            break;
        case 'rigid':
            target = 'rigid';
            img.src = 'images/shop/sun_tunnels/rigid_suntunnel/rigid_suntunnel.png';
            title.innerText = 'Rigid Sun Tunnels';
            description.innerText = 'Rigid tubes are recommended when there is a straight, unobstructed path from the roof to the ceiling.'
            break;
    }
})

button.addEventListener('click', () => {
    switch (target){
        case 'flexible':
            document.getElementById('descriptionBlock1').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'rigid':
            document.getElementById('descriptionBlock2').scrollIntoView({ behavior: 'smooth' });
            break;
        default:
            document.getElementById('descriptionBlock1').scrollIntoView({ behavior: 'smooth' });
            break;
    }
})