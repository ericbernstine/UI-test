
let img = document.querySelector('.shopBlock img');
let title = document.querySelector('.shopBlock h4');
let description = document.querySelector('.shopBlock p');
let target = '';
let button = document.querySelector('.shopBlock button')
document.getElementById('options').addEventListener('change', (event) => {
    let current = event.target.value;
    switch (current){
        case 'manual':
            target = 'manual';
            img.src = "images/shop/skylights/manual_skylights/manual_freshAir_skylight.png";
            title.innerText = 'Manual Fresh Air Skylights';
            description.innerText = 'Ideal for a skylight within reach. This "Fresh Air" skylight allows you to easily open and close with the turn of a handle.';
            break;
        case 'electric':
            target = 'electric';
            img.src = "images/shop/skylights/electric_skylights/electric_freshAir_skylight.png";
            title.innerText = 'Electric Fresh Air Skylights';
            description.innerText = "Easily open and close this electric skylight with a concealed operator, powered by your own home's electricity.";
            break;
        case 'solar':
            target = 'solar';
            img.src = "images/shop/skylights/solar_skylights/solar_freshAir_skylight.png";
            title.innerText = 'Solar Fresh Air Skylights';
            description.innerText = 'Open and close this skylight with the power of the sun. The solar panel attached allows for this skylight to open at the press of a button.';
            break;
        case 'fixed':
            target = 'fixed';
            img.src = "images/shop/skylights/fixed_skylights/fixedSkylight.png";
            title.innerText = 'Fixed Skylights';
            description.innerText = 'Fixed Skylights are designed for the sole purpose of bringing in fresh air. These skylights are ideal for spaces like sunrooms or porches.';
            break;
        case 'skymax':
            target = 'skymax';
            img.src = "images/shop/skylights/skymax_skylights/skyMax.png";
            title.innerText = 'SkyMax Skylights';
            description.innerText = 'SkyMax skylights offer maximum sunlight with flexible options on the size of skylight you want. Up to 10ft in length!';
            break;
        case 'flat':
            target = 'flat';
            img.src = "images/shop/skylights/flatroof_skylights/flatRoofSkylight.png";
            title.innerText = 'Flat Roof Skylights'
            description.innerText = 'Where a slanted roof is not an option. Flat roof skylights fit perfect. The curved glass allows water to disperse evenly without issue.';
            break;
    }
})

button.addEventListener('click', () => {
    switch (target){
        case 'manual':
            document.getElementById('descriptionBlock1').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'electric':
            document.getElementById('descriptionBlock2').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'solar':
            document.getElementById('descriptionBlock3').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'fixed':
            document.getElementById('descriptionBlock4').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'skymax':
            document.getElementById('descriptionBlock5').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'flat':
            document.getElementById('descriptionBlock6').scrollIntoView({ behavior: 'smooth' })
            break;
        default:
            document.getElementById('descriptionBlock1').scrollIntoView({ behavior: 'smooth' });
            break;
    }
})

// $('.skyMax').click(() => {
//     document.getElementById('descriptionBlock5').scrollIntoView({ behavior: 'smooth' });
// })
// $('.flatRoof').click(() => {
//     document.getElementById('descriptionBlock6').scrollIntoView({ behavior: 'smooth' });
// })